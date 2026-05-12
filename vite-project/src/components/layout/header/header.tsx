import { Fragment } from "react/jsx-runtime"
import styles from './header.module.css'

const Header = () => {



    return (
        <Fragment>
            <header className={styles.header}>
                <span className={styles.logo}>ShopZone</span>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>Man's clothing</li>
                        <li>Woman's clothing</li>
                        <li>Jewelery</li>
                        <li>Electronics</li>
                    </ul>
                    <span className={styles.viewCart}>View Cart</span>
                </nav>
            </header>
        </Fragment>
    )
}
export default Header