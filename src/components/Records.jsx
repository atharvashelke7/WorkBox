import React, { useState, useEffect, useReducer } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { api } from "../utils/apicall";
import { initialState, projectReducer } from "../utils/reducer";

const Records = () => {
  const [projects, setProjects] = useState([]); // State for project records
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const recordsPerPage = 10; // Number of records per page

  const [state] = useReducer(projectReducer, initialState);

  console.log("state from  recordsss",state)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);



  // Function to update project status
  const updateStatus = async (index, newStatus) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, status: newStatus } : project
    );
    setProjects(updatedProjects);

    // Update the backend with the new status
    const updatedProject = updatedProjects[index];
    try {
      await api.put(`/projects/${updatedProject._id}`, updatedProject);
    } catch (error) {
      console.error("Error updating project status:", error);
    }
  };

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.theme.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages and current page projects
  const totalPages = Math.ceil(filteredProjects.length / recordsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg md:-mt-12">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 p-4 bg-white rounded-t-lg">
          {/* Search bar */}
          <div className="relative mt-2 md:mt-0 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-md w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          {/* Sorting dropdown (not functional in this example) */}
          <div>
            <h1 className="flex flex-row items-center">
              Sort By: <span className="ml-2 font-bold">Priority</span>
              <div className="dropdown relative">
                <button
                  tabIndex={0}
                  className="flex items-center ml-2 p-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  <IoIosArrowDown className="text-xl" />
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content absolute right-0 mt-2 bg-white rounded-md shadow-lg z-10 w-52 p-2"
                >
                  <li className="py-1 px-2 hover:bg-gray-100 rounded-md">
                    <a href="#">Priority</a>
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded-md">
                    <a href="#">Recently Modified</a>
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded-md">
                    <a href="#">Status</a>
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded-md">
                    <a href="#">Start Date</a>
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded-md">
                    <a href="#">End Date</a>
                  </li>
                </ul>
              </div>
            </h1>
          </div>
        </div>
        <div className="overflow-x-auto">
          {/* Desktop view table */}
          <table className="w-full bg-white hidden md:table">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">Project Name</th>
                <th className="py-2 px-4 text-left">Reason</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Division</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Priority</th>
                <th className="py-2 px-4 text-left">Dept.</th>
                <th className="py-2 px-4 text-left">Location</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-bold">{project.theme}</div>
                      <div className="text-sm text-gray-600">
                        {new Date(project.startDate).toLocaleDateString()} -{" "}
                        {new Date(project.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{project.reason}</td>
                  <td className="py-4 px-4">{project.type}</td>
                  <td className="py-4 px-4">{project.division}</td>
                  <td className="py-4 px-4">{project.category}</td>
                  <td className="py-4 px-4">{project.priority}</td>
                  <td className="py-4 px-4">{project.department}</td>
                  <td className="py-4 px-4">{project.location}</td>
                  <td className="py-4 px-4">{project.status}</td>
                  <td className="py-4 px-4 flex flex-col md:flex-row gap-2">
                    <button
                      onClick={() => updateStatus(index, "Running")}
                      className="bg-blue-500 text-white px-4 py-1 rounded-full"
                    >
                      Start
                    </button>
                    <button
                      onClick={() => updateStatus(index, "Closed")}
                      className="bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded-full"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => updateStatus(index, "Cancelled")}
                      className="bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded-full"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Mobile view cards */}
          <div className="grid md:hidden gap-4">
            {currentProjects.map((project, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold">{project.theme}</div>
                  <div className="text-blue-500 font-bold">
                    {project.status}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {new Date(project.startDate).toLocaleDateString()} to{" "}
                  {new Date(project.endDate).toLocaleDateString()}
                </div>
                <div className="text-sm text-gray-600">
                  <p>Reason: {project.reason}</p>
                  <p>Type: {project.type}</p>
                  <p>Category: {project.category}</p>
                  <p>Div: {project.division}</p>
                  <p>Dept: {project.department}</p>
                  <p>Location: {project.location}</p>
                  <p>Priority: {project.priority}</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => updateStatus(index, "Running")}
                    className="bg-blue-500 text-white px-4 py-1 rounded-full w-full"
                  >
                    Start
                  </button>
                  <button
                    onClick={() => updateStatus(index, "Closed")}
                    className="bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded-full w-full"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => updateStatus(index, "Cancelled")}
                    className="bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded-full w-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center py-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white border border-blue-500 text-blue-500"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Records;
