// import React, { createContext, useState, useContext, useLayoutEffect } from "react";
// import { toast } from "react-toastify";
// import { api } from "../utils/apicall";

// const AuthContext = createContext();

// export const useAuth = () => {
//   const authContext = useContext(AuthContext);

//   if (!authContext) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return authContext;
// };

// const AuthProvider = ({ children }) => {
//   const [authTokens, setAuthTokens] = useState(null);

 
//   const login = async (email, password) => {
//     try {
//       const response = await api.post("/login", { email, password });
//       console.log("response.data.accessToken",response.data.accessToken)
//       setAuthTokens(response.data.accessToken);
//       setAuthHeader(accessToken);
//       toast.success("Login successful!");
//     } catch (error) {
//       setAuthTokens(null);
//       toast.error("Login failed! Please try again.");
//       console.error("Login error:", error);
//     }
//   };

//   const logout = () => {
//     setAuthTokens(null);
//     toast.info("Logged out successfully!");
//   };

//   useLayoutEffect(() => {
//     const authInterceptor = api.interceptors.request.use((config) => {
//       if (authTokens) {
//         config.headers.Authorization = `Bearer ${authTokens}`;
//       }
//       return config;
//     });

//     return () => {
//       api.interceptors.request.eject(authInterceptor);
//     };
//   }, [authTokens]);

//   useLayoutEffect(() => {
//     const refreshInterceptor = api.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const originalRequest = error.config;
//         if (error.response?.status === 400 && error.response.data.message === "Unauthorized") {
//           try {
//             const response = await api.get("/refreshToken");
//             setAuthTokens(response.data.accessToken);
//             originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
//             originalRequest._retry = true;
//             return api(originalRequest);
//           } catch (refreshError) {
//             setAuthTokens(null);
//             toast.error("Session expired. Please log in again.");
//             console.error("Token refresh error:", refreshError);
//           }
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       api.interceptors.response.eject(refreshInterceptor);
//     };
//   }, [authTokens]);

//   return (
//     <AuthContext.Provider value={{ authTokens, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
