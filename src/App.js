import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './context/cartContext';

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:id"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
