import {useAuth} from "../conntexts/UserContext";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({
                            requiredRole,
                            children,
                        }) => {

    const {role}  = useAuth();
    const {user}  = useAuth();

    console.log(role);
    if (!user) {
        return <Navigate to={'/login'} replace = {true}/>;
    }
    else if (requiredRole && requiredRole !== role) {
        return <Navigate to={'/unauthorized'} replace = {true}/>;
    }

    return children ? children : <Outlet/>;
};

export default ProtectedRoute;