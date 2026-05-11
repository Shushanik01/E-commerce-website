import { Fragment } from "react/jsx-runtime"
import ProductCards from "./components/productCards";
import { Provider } from "react-redux";
import store from "./store/cartStore";

function App() {

  return (
    <Fragment>
      <Provider store={store}>
        <ProductCards />
      </Provider>
    </Fragment>
  )
}

export default App
