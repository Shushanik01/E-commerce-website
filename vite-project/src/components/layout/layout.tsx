import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import CartBar from "../cartIcon/cartBar";

const Layout = ()=>{

    const location = useLocation()

    return(
        <>
            <Header/>

            {location.pathname !== 'cart' && <CartBar/>}

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </>
    )

}
export default Layout