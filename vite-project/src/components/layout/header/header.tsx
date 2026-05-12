import { Fragment } from "react/jsx-runtime"
import styles from './header.module.css';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <Fragment>
            <header className={styles.header}>
                <span className={styles.logo}>ShopZone</span>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li
                        onClick={()=> navigate('/')}
                        >
                            All products
                        </li>
                        <li
                        onClick={()=> navigate('men')}
                        >Man's clothing</li>
                        <li 
                        onClick={()=> navigate('women')}
                        >Woman's clothing</li>
                        <li
                        onClick={()=> navigate('jewelery')}
                        >Jewelery</li>
                        <li
                        onClick={()=> navigate('electronics')}
                        >Electronics</li>
                    </ul>
                    <span className={styles.viewCart}
                    onClick={()=> navigate('cart')}
                    >View Cart</span>
                </nav>
            </header>
        </Fragment>
    )
}
export default Header