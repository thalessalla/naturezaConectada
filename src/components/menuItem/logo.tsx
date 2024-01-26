
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

function LogoMenu() {
  return (

    <div className='containerLogo'>
     <Link to="/"> <img src={logo} alt="Logo da Minha Empresa" /> </Link>
    </div>
  );
}

export default LogoMenu;