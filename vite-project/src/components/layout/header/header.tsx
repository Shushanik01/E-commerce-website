import { Fragment } from "react/jsx-runtime"
import styles from './header.module.css'

const Header = () => {



    return (
        <Fragment>
            <div className={styles.logo}>
                 <nav>
                    <ul>
                        <li>Man's clothing</li>
                        <li>Woman's clothing</li>
                        <li>Jewelery</li>
                        <li>Electronics</li>
                    </ul>
                    <span>View Cart</span>
                 </nav>
            </div>
           
        </Fragment>
    )
}
export default Header