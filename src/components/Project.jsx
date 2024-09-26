import React, { createContext, useContext, useReducer, useEffect } from "react";
import { projectReducer, initialState } from "../utils/reducer";
import { api } from "../utils/apicall";

const ProjectContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }

  return context;
};

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");
      dispatch({ type: "SET_PROJECTS", projects: response.data });
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = (project) => {
    dispatch({ type: "ADD_PROJECT", project });
  };

  return (
    <ProjectContext.Provider value={{ ...state, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
