import {Link} from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
        <div className="home-container">
            <h1>WildRoutes</h1>
            <p>Explora aqui</p>
            <Link to="/catalog" className="btn btn-primary">
            Ver Catálogo
            </Link>
        </div>
    </div>
  );
}
