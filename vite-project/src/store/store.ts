import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import cartReducer, { addToCart } from '../slices/cartSlice';
import productsReducer from '../slices/productSlice';
import toastReducer, { showToast, hideToast } from '../slices/toastSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: addToCart,
    effect: async (action, api) => {
        const title = (action.payload as { title: string }).title;
        const short = title.length > 35 ? title.substring(0, 35) + '…' : title;
        api.dispatch(showToast(`"${short}" added to cart`));
        await api.delay(3000);
        api.dispatch(hideToast());
    },
});

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        toast: toastReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart.items));
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
