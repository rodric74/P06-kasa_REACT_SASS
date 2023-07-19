import { Link } from "react-router-dom";
import './Error.scss'

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__message">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to='/' className="error__link">Retour à la page d'accueil</Link>
      
    </div>
  )
}

export default Error;
