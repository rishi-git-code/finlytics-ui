import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeforeLoginHome from "../pages/BeforeLoginHome";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "../components/PrivateRoutes";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegisterPage />} />

                {/* Protected routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="home" element={<BeforeLoginHome />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes;