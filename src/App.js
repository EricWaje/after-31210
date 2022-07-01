import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <ItemListContainer saludo="Bienvenidos" />
            <ItemDetailContainer />
        </BrowserRouter>
    );
}

export default App;
