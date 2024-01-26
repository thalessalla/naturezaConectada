
import { Link } from "react-router-dom";


function MenuItem() {
  return (
    <div className="menu-item">

      <Link to="/"><p> Home</p></Link>
      <Link to="/login"><p> Login</p></Link>
      <Link to="/signup"><p> Cadastre-se</p></Link>

    </div>
  );
}

export default MenuItem;