import logo from './logo.svg';
import './App.css';
//importing the components from reactstrap to create the navbar
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
    return (
        <div className="App">
            {/* for dark navbar, here you write it as below, if you want other color, try primary, or other */}
       <Navbar color="dark" className="navbar-dark">
        <div className="container">
        <NavbarBrand href="/">  Ristorante Con Fusion</NavbarBrand>
        </div>
       </Navbar>
      </div>
    );
} export default App;
