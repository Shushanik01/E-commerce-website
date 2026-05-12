import { Fragment } from "react/jsx-runtime"
// import ProductCards from "./components/productCards";
import { Provider } from "react-redux";
import store from "./store/store";
import Products from "./pages/productPage/ProductsPage";
import CartPage from "./pages/cartPage/CartPage";

function App() {

  return (
    <Fragment>
      <Provider store={store}>
        <Products/>
        <CartPage/>
      </Provider>
    </Fragment>
  )
}

export default App
