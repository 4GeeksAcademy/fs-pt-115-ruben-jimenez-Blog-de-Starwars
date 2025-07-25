import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://api-dattebayo.vercel.app/assets/images/logo.png" alt="Bootstrap" width="30" height="24"></img>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Faboritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};