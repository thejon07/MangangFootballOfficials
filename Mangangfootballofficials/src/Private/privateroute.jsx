import { useEffect } from 'react';
import { Outlet,Navigate} from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRoute = () => {


  return useAuth() ? <Outlet/> : <Navigate to={"/login"}/>;
}

export default PrivateRoute;
