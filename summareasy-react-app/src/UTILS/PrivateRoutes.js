import { Outlet, Navigate} from 'react-router-dom';

const PrivateRoutes = () => {
    let authToken = localStorage.getItem('myJWT')
  return (
      authToken ? <Outlet/> : <Navigate to='/'/>
    )
  }
  export default PrivateRoutes