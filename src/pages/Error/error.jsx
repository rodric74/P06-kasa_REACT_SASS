import { Link } from "react-router-dom";
import './Error.scss'

function Error() {
  return (
    <div className="error">
      <h1 className="error_title">404</h1>
      <h2 className="error_message"></h2>
      <Link to='/'>Retour à la page d'accueil</Link>
      
    </div>
  )
}

export default Error;
