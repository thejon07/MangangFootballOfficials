import axios from "axios";

// Create Axios instance
const instance = axios.create({
  baseURL: "https://dreamersbackend.onrender.com" || "http://localhost:4000" // Use Vite's method to access environment variables
});

// Add Axios Interceptor to handle token refresh
instance.interceptors.response.use(
  response => response,  // Pass through if no error
  async (error) => {
    const refreshtoken = localStorage.getItem("refresh_token");
    console.log("Your refresh token is: " + refreshtoken);
    const originalRequest = error.config;

    // Check if the error is 401 and the request hasn't been retried
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;  // Mark as retry to prevent loops

      try {
        // Send a request to refresh the access token using the refresh token
        const response = await instance.post(
          "/users/refresh-token",  // Use relative URL since baseURL is set
          { refreshToken: refreshtoken },  // Send refreshToken in request body
          { withCredentials: true }  // Ensure cookies are sent with the request
        );

        const newrefreshToken = response.data.statuscode.refreshtoken;
        console.log("Your new refresh token is: " + newrefreshToken);
        localStorage.setItem("refresh_token", newrefreshToken);

        const newAccessToken = response.data.statuscode.accesstoken;
        console.log("Successfully generated access token: ", newAccessToken);

        // Store the new access token in localStorage
        localStorage.setItem("access_token", newAccessToken);

        // Update original request with the new access token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        // Retry the original request with the new token
        return instance(originalRequest);  // Use the instance created above
      } catch (err) {
        console.error("Failed to refresh token:", err);
        window.location.href = "/login";  // Redirect to login if refreshing fails
      }
    }

    return Promise.reject(error);  // Reject if error not handled
  }
);

// API methods
const getaccesstokenfromrefreshtoken = async () => {
  const refreshtoken = localStorage.getItem("refresh_token");
  console.log(refreshtoken);
  const response = await instance.post('/users/refresh-token', { refreshToken: refreshtoken });
  console.log(response);
  return response;
}

const handlePostrequest = async (data) => {
  try {
    const senddata = await instance.post("/users/register", data); // Use the instance here
    console.log(senddata);
    return senddata;
  } catch (error) {
    console.log(error);
    throw error; // Consider throwing to allow further handling
  }
};

const handleblogPostrequest = async (data) => {
  try {
    const token = localStorage.getItem("access_token");
    const userid = localStorage.getItem("user_id");
    const senddata = await instance.post(`/users/postdata/${userid}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,  // Include token in Authorization header
      },
    });
    console.log(senddata);
    return senddata;
  } catch (error) {
    console.log(error);
    throw error; // Consider throwing to allow further handling
  }
};

const getallpost = async () => {
  try {
    const allpost = await instance.get('/users/allpost'); // Use the instance
    return allpost;
  } catch (error) {
    console.log("Error while getting all posts:", error);
  }
};

const getallusers = async () => {
  try {
    const allusers = await instance.get('/users/allusers'); // Use the instance
    return allusers;
  } catch (error) {
    console.log("Error while getting all users:", error);
  }
};

const getpostbyuserid = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const userid = localStorage.getItem("user_id");
    const getdata = await instance.get(`/users/getcurrentuserpost/${userid}`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Include token in Authorization header
      },
    });
    return getdata;
  } catch (error) {
    console.log(error);
    throw error; // Consider throwing to allow further handling
  }
};

const handleloginrequest = async (data) => {
  try {
    const senddata = await instance.post("/users/login", data); // Use the instance
    console.log(senddata);
    return senddata;
  } catch (error) {
    console.log(error);
    throw error; // Consider throwing to allow further handling
  }
};

const getcurrentuser = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const senddata = await instance.get("/users/getcurrentuser", {
      headers: {
        Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
      },
    });
    console.log(senddata);
    return senddata;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error; // Consider throwing to allow further handling
  }
};

const logoutuser = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const senddata = await instance.get("/users/logout", {
      headers: {
        Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
      },
    });
    console.log("User logged out successfully", senddata);
    localStorage.removeItem("access_token");
    window.location.href = '/';
    return senddata;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error; // Consider throwing to allow further handling
  }
};

// Exporting functions
export {
  handlePostrequest,
  handleloginrequest,
  getcurrentuser,
  logoutuser,
  handleblogPostrequest,
  getpostbyuserid,
  getallusers,
  getallpost,
  getaccesstokenfromrefreshtoken
};
