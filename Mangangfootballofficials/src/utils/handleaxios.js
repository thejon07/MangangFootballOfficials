import axios from "axios";

// Create Axios instance
// const instance = axios.create({
//   baseURL: "http://localhost:4000"
// });

// Add Axios Interceptor to handle token refresh
axios.interceptors.response.use(
  response => response,  // Pass through if no error
  async (error) => {
    const refreshtoken = localStorage.getItem("refresh_token");
    console.log("your refresh token is" + refreshtoken)
    const originalRequest = error.config;
    
    // Check if the error is 401 and the request hasn't been retried
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;  // Mark as retry to prevent loops

      try {
        // Send a request to refresh the access token using the refresh token
        const response = await axios.post(
          "http://localhost:4000/users/refresh-token", 
          { refreshToken: refreshtoken },  // Send refreshToken in request body
          { withCredentials: true }  // Ensure cookies are sent with the request
        );
        
        const newrefreshToken = response.data.statuscode.refreshtoken;
        console.log("your new refresh token is:"+ newrefreshToken)
        localStorage.setItem("refresh_token", newrefreshToken)

        const newAccessToken = response.data.statuscode.accesstoken;
        console.log("successfully generate access token",newAccessToken)

        // Store the new access token in localStorage
        localStorage.setItem("access_token", newAccessToken);

        const finallyupdatedaccesstoken = localStorage.getItem("access_token")
  
        // Update original request with the new access token
        originalRequest.headers['Authorization'] = `Bearer ${finallyupdatedaccesstoken}`;
        // Retry the original request with the new token
        return instance(originalRequest);
      } catch (err) {
        console.error("Failed to refresh token:", err);
        window.location.href = "/login";  // Redirect to login if refreshing fails
      }
    }

    return Promise.reject(error);  // Reject if error not handled
  }
);

// Continue with your existing API methods...

const getaccesstokenfromrefreshtoken = async()=>{
   const refreshtoken = localStorage.getItem("refresh_token")
   console.log(refreshtoken)
   const response =  await instance.post('/users/refresh-token',{refreshToken:refreshtoken})
   console.log(response)
   return response
}

const handlePostrequest = async (data) => {
  try {
    const senddata = await axios.post("/users/register", data);
    console.log(senddata);
    return senddata;
  } catch (error) {
    console.log(error);
  }
};

const handleblogPostrequest = async (data) => {
  try {
    const token = localStorage.getItem("access_token");
    const userid = localStorage.getItem("user_id");
    const senddata = await axios.post(`/users/postdata/${userid}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,  // Include token in Authorization header
      },
    });
    console.log(senddata);
    return senddata;
  } catch (error) {
    console.log(error);
  }
};

const getallpost = async () => {
  const allpost = await axios.get('/users/allpost');
  if (!allpost) {
    console.log("error while getting all post");
  }
  return allpost;
};

const getallusers = async () => {
  const allusers = await axios.get('/users/allusers');
  if (!allusers) {
    console.log("error while getting all users");
  }
  return allusers;
};

const getpostbyuserid = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const userid = localStorage.getItem("user_id");
    const getdata = await axios.get(`/users/getcurrentuserpost/${userid}`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Include token in Authorization header
      },
    });
    return getdata;
  } catch (error) {
    console.log(error);
  }
};

const handleloginrequest = async (data) => {
  try {
    const senddata = await axios.post("/users/login", data);
    console.log(senddata);
    return senddata;
  } catch (error) {
    console.log(error);
  }
};

const getcurrentuser = async () => {
  const token = localStorage.getItem("access_token");
  console.log(token);
  try {
    const senddata = await axios.get("/users/getcurrentuser", {
      headers: {
        Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
      },
    });
    console.log(senddata);
    return senddata;
  } catch (error) {
    console.error("error sending data");
  }
};

const logoutuser = async () => {
  const token = localStorage.getItem("access_token");
  console.log(token);
  try {
    const senddata = await instance.get("/users/logout", {
      headers: {
        Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
      },
    });
    console.log("user logged out successfully", senddata);
    localStorage.removeItem("access_token");
    window.location.href = ('/');
    return senddata;
  } catch (error) {
    console.error("error sending data");
  }
};

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
