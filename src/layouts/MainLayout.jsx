import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Sidebar from '../components/layout/Sidebar/Sidebar';

function MainLayout() {
    return (
        <div className="layout">
            <Sidebar />

            <div className="content">
                <Navbar />

                <main className="main-content">
                    
                    <Outlet />

                </main>

            </div>

        </div>
    );
}

export default MainLayout;