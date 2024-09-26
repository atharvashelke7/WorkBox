// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../components/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { authTokens } = useAuth();

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (authTokens === null) {
//       return navigate("/");
//     }
//   }, [navigate, authTokens]);

//   return children;
// };

// export default ProtectedRoute;
