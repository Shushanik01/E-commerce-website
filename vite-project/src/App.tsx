import { Fragment } from "react/jsx-runtime"
// import ProductCards from "./components/productCards";
import { Provider } from "react-redux";
import store from "./store/store";
import Products from "./pages/productPage/ProductsPage";
import CartPage from "./pages/cartPage/CartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import ManSection from "./pages/ManSection/manSection";
import CategoryPage from "./pages/categoryPage/categoryPage";

function App() {

  return (
    <Fragment>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Products/>}/>
            <Route path="cart" element={<CartPage/>}/>
            <Route path="men" element={<ManSection/>}/>
            <Route path="women" element={<CategoryPage category="women's clothing"/>}/>
            <Route path="jewelery" element={<CategoryPage category="jewelery"/>}/>
            <Route path="electronics" element={<CategoryPage category="electronics"/>}/>
          </Route>
        </Routes>
      </Provider>
    </Fragment>
  )
}

export default App
