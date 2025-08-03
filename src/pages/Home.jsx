
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";



export const Home = () => {
	const { store } = useGlobalReducer()



	return (
		<>
			<div className="d-flex justify-content-center align-items-center">
				<h1 className="text-black">Characters </h1>
			</div>
			<div className="contaoner-card-home  slider-container pb-3">

				{
					store.characters.map(character => (
						<Card key={character.id} character={character} nija="character" />
					))
				}

			</div >
			<div className="d-flex justify-content-center align-items-center">
				<h1 className="text-black">Akatsuki</h1>
			</div>
			<div className="contaoner-card-home  slider-container pb-3">
				
				{
					store.akatsuki.map(character => (
						<Card key={character.id} character={character} nija="akatsuki" />
					))
				}

			</div >
			<div className="d-flex justify-content-center align-items-center">
				<h1 className="text-black" >Tailed Beasts</h1>
			</div>
			<div className="contaoner-card-home p-2" style={{ backgroundColor: 'transparent' }}>
				
				{
					store.tailedBeasts.map(character => (
						<Card key={character.id} character={character} nija="beasts" />
					))
				}

			</div >
		</>
	);
}; 