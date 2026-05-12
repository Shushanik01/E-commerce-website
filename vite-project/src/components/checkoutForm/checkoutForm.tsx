import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import styles from './checkoutForm.module.css';

const CheckoutForm = () => {
    const items = useSelector((state: RootState) => state.cart.items);

    const totalPrice = items.reduce((sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity, 0);
    const totalItems = items.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Order placed successfully!');
    };

    return (
        <div>
            <h2 className={styles.heading}>Checkout</h2>
            <p className={styles.subheading}>Please fill in your details to complete the order.</p>

            <div className={styles.wrapper}>
                <div className={styles.formSection}>
                    <form onSubmit={handleSubmit}>
                        <p className={styles.sectionTitle}>Billing Address</p>

                        <div className={styles.columns}>
                            <div className={styles.col}>
                                <div className={styles.field}>
                                    <label htmlFor="fname">Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Jane Doe" required />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="jane@example.com" required />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="adr">Address</label>
                                    <input type="text" id="adr" name="address" placeholder="123 Main St" required />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="city">City</label>
                                    <input type="text" id="city" name="city" placeholder="New York" required />
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="NY" />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="10001" />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.col}>
                                <p className={styles.sectionTitle}>Payment</p>

                                <div className={styles.cards}>
                                    <span className={styles.cardIcon}>VISA</span>
                                    <span className={styles.cardIcon}>AMEX</span>
                                    <span className={styles.cardIcon}>MC</span>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="Jane Doe" required />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="ccnum">Card Number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="•••• •••• •••• ••••" required />
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="MM" />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="expyear">Exp Year</label>
                                        <input type="text" id="expyear" name="expyear" placeholder="YYYY" />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="•••" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <label className={styles.checkbox}>
                            <input type="checkbox" defaultChecked name="sameadr" />
                            Shipping address same as billing
                        </label>

                        <button type="submit" className={styles.submitBtn}>
                            Place Order — ${totalPrice.toFixed(2)}
                        </button>
                    </form>
                </div>

                <div className={styles.summary}>
                    <p className={styles.summaryTitle}>Order Summary ({totalItems} items)</p>

                    {items.map(item => (
                        <div key={item.id} className={styles.summaryItem}>
                            <span className={styles.summaryItemName}>
                                {item.title.length > 28 ? item.title.substring(0, 28) + '…' : item.title}
                            </span>
                            <span className={styles.summaryItemPrice}>
                                ${item.price} × {item.quantity}
                            </span>
                        </div>
                    ))}

                    <div className={styles.summaryDivider} />

                    <div className={styles.summaryTotal}>
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
