import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../css/navbar.css"
export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()




	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://api-dattebayo.vercel.app/assets/images/logo.png" alt="Bootstrap" width="30" height="24"></img>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<input type="text" autocomplete="off" name="text" class="input" placeholder="Username"></input>
						<button
							className="btn dropdown-toggle "
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							id="info-btn"
						>Tus favortitos

						</button>
						<ul className="dropdown-menu">
							{store.favoritos.length > 0 ? (
								store.favoritos.map(favo => (
									<li key={favo.id} className="d-flex justify-content-between " >
										<span>{favo.name}</span>
										<span onClick={() => dispatch({ type: 'delete_favoritos', id: favo.id })} >❌</span>
									</li>
								))
							) : (
								<li>No favoritos </li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};