import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import styles from './MainLayout.module.css';

function MainLayout() {
    return (
        <div className={styles.layout}>
            <Sidebar />

            <div className={styles.content}>
                <Navbar />

                <main className={styles.mainContent}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default MainLayout;