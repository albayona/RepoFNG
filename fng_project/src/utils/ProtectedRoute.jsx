import {useAuth} from "../conntexts/UserContext";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({
                            role,
                            redirectPath = '/login',
                            children,
                        }) => {

    const {user}  = useAuth();
    if (user && role !== user.role) {
        return <Navigate to={redirectPath} replace = {true}/>;
    }

    return children ? children : <Outlet/>;
};

export default ProtectedRoute;