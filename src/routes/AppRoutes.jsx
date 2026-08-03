import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;