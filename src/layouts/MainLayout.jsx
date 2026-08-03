import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Sidebar from '../components/layout/Sidebar/Sidebar';

function MainLayout() {
    return (
        <div>
            <Sidebar />

            <div>
                <Navbar />

                <main>
                    
                    <Outlet />

                </main>

            </div>

        </div>
    );
}

export default MainLayout;