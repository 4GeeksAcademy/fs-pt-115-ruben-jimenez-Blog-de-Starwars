import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../css/navbar.css"
import { useEffect, useRef, useState } from "react";
export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [showResults, setShowResults] = useState(false);// Desplegar o no desplegar posibles resultados


	const navigate = useNavigate();
	const inputRef = useRef(null);

	const handleSelect = (id, nija) => {
		setSearchTerm("");
		setShowResults(false);
		navigate(`/info/${nija}/${id}`);
	};

	useEffect(() => {
		if (searchTerm.trim() === "") {
			setSearchResults([]);
			setShowResults(false);
			return;
		}
		// Datos en un array con {id, name, nija}, por separado falla.
		const todoStore = [
			...store.characters.map(c => ({ id: c.id, name: c.name, nija: "character" })),
			...store.akatsuki.map(a => ({ id: a.id, name: a.name, nija: "akatsuki" })),
			...store.tailedBeasts.map(t => ({ id: t.id, name: t.name, nija: "beasts" })),
		];

		const filtrar = todoStore.filter(item =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setSearchResults(filtrar);
		setShowResults(true);


	}, [searchTerm, store.characters, store.akatsuki, store.tailedBeasts]);
	// -------------------termina el useEffect


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://api-dattebayo.vercel.app/assets/images/logo.png" alt="Bootstrap" width="30" height="24"></img>
				</Link>
				{/* //----------------- intento 24 buscador */}
				<div className="search-wrapper" ref={inputRef} >
					<input
						type="text"
						autoComplete="off"
						name="text"
						className="input"
						placeholder="Buscar..."
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						onFocus={() => searchResults.length > 0 && setShowResults(true)}
					/>
					{showResults && searchResults.length > 0 && (
						<ul className="search-results">

							{searchResults.map(character => (
								<li
									key={`${character.nija}-${character.id}`}
									onClick={() => handleSelect(character.id, character.nija)}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSelect(character.id, character.nija)
										}
									}}>
									 <small >{character.name} ({character.nija})</small>
									 {/* el error reusado */}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* //----------------- buscador */}
				<div className="ml-auto">

					<div className="dropdown">

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