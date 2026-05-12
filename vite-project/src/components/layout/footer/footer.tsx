import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.brand}>
                    <span className={styles.logo}>ShopZone</span>
                    <p>Your one-stop shop for the latest trends in fashion and electronics.</p>
                </div>

                <div className={styles.column}>
                    <h4>Shop</h4>
                    <ul>
                        <li>Man's clothing</li>
                        <li>Woman's clothing</li>
                        <li>Jewelery</li>
                        <li>Electronics</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Support</h4>
                    <ul>
                        <li>FAQ</li>
                        <li>Shipping & Returns</li>
                        <li>Order Tracking</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Press</li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>© 2026 ShopZone. All rights reserved.</p>
                <div className={styles.bottomLinks}>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Cookies</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer
