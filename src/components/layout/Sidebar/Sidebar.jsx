import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.brand}>
                <div className={styles.logo}>E</div>

                <div>
                    <h2>EnterpriseFlow</h2>
                    <span>Gestão empresarial</span>
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;