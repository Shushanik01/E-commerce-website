import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

const CheckoutForm = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <div style={{ fontFamily: 'Arial', fontSize: '17px', padding: '8px' }}>
      <h2
        style={{
          fontSize: '40px',
          background: 'linear-gradient(to left, #660066 0%, #ff3300 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
         Checkout 
      </h2>
      <p>Please checkout and pay us, before you run away.</p>

      <div className="row" style={{ display: 'flex', margin: '0 -16px', flexWrap: 'wrap' }}>
        {/* Billing Form */}
        <div className="col-75" style={{ flex: '75%', padding: '0 16px' }}>
          <div
            className="container"
            style={{
              backgroundColor: '#f2f2f2',
              padding: '5px 20px 15px 20px',
              border: '1px solid lightgrey',
              borderRadius: '3px',
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row" style={{ display: 'flex' }}>
                <div className="col-50" style={{ flex: '50%', padding: '0 16px' }}>
                  <h3>Billing Address</h3>
                  <label htmlFor="fname" style={{ display: 'block', marginBottom: '10px' }}>
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Ravi Raushan"
                    required
                    style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />

                  <label htmlFor="email" style={{ display: 'block', marginBottom: '10px' }}>
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="ravi@raushan.com"
                    required
                    style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />

                  <label htmlFor="adr" style={{ display: 'block', marginBottom: '10px' }}>
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="officers Colony"
                    required
                    style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />

                  <label htmlFor="city" style={{ display: 'block', marginBottom: '10px' }}>
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ranchi"
                    required
                    style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />

                  <div className="row" style={{ display: 'flex' }}>
                    <div className="col-50" style={{ flex: '50%', padding: '0 16px' }}>
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="JH"
                        style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                      />
                    </div>
                    <div className="col-50" style={{ flex: '50%', padding: '0 16px' }}>
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="814111"
                        style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="col-50" style={{ flex: '50%', padding: '0 16px' }}>
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container" style={{ marginBottom: '20px', padding: '7px 0', fontSize: '24px' }}>
                    <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                    <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                    <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                    <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                  </div>

                  <label htmlFor="cname" style={{ display: 'block', marginBottom: '10px' }}>
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Ravi Raushan"
                    required
                    style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />

                  <label htmlFor="ccnum" style={{ display: 'block', marginBottom: '10px' }}>
                    Credit card number
                  </label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    required
                    style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />

                  <label htmlFor="expmonth" style={{ display: 'block', marginBottom: '10px' }}>
                    Exp Month
                  </label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />

                  <div className="row" style={{ display: 'flex' }}>
                    <div className="col-50" style={{ flex: '50%', padding: '0 16px' }}>
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2033"
                        style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                      />
                    </div>
                    <div className="col-50" style={{ flex: '50%', padding: '0 16px' }}>
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="111"
                        style={{ width: '100%', marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '3px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <label style={{ display: 'block', marginBottom: '10px' }}>
                <input type="checkbox" checked readOnly name="sameadr" /> Shipping address same as billing
              </label>

              <button
                type="submit"
                className="btn"
                style={{
                  background: 'linear-gradient(to left, #99ccff 0%, #003399 100%)',
                  color: 'black',
                  padding: '12px',
                  margin: '10px 0',
                  border: 'none',
                  width: '100%',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to left, #003399 0%, #99ccff 100%)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to left, #99ccff 0%, #003399 100%)';
                }}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-25" style={{ flex: '25%', padding: '0 16px' }}>
          <div
            className="container"
            style={{
              backgroundColor: '#f2f2f2',
              padding: '5px 20px 15px 20px',
              border: '1px solid lightgrey',
              borderRadius: '3px',
            }}
          >
            <h4>
              Cart{' '}
              <span className="price" style={{ color: 'black', float: 'right' }}>
                <i className="fa fa-shopping-cart"></i> <b>{totalItems}</b>
              </span>
            </h4>

            {items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {items.map((item) => (
                  <p key={item.id}>
                    <a href="#" style={{ color: '#2196F3' }}>
                      {item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}
                    </a>{' '}
                    <span className="price" style={{ float: 'right', color: 'grey' }}>
                      ${item.price} x {item.quantity}
                    </span>
                  </p>
                ))}
                <hr style={{ border: '1px solid lightgrey' }} />
                <p>
                  Total{' '}
                  <span className="price" style={{ color: 'black', float: 'right' }}>
                    <b>${totalPrice.toFixed(2)}</b>
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;