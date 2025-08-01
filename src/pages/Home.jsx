
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";



export const Home = () => {
	const { store } = useGlobalReducer()
	
	

	return (
		<>
		<div className="contaoner-card-home  slider-container pb-3">
			<h1>Characters </h1>
			{
				store.characters.map(character => (
					<Card key={character.id} character={character} nija="character"  />
				))
			}

		</div >
		<div className="contaoner-card-home bg-transparent border-0 ">
			<h1>Akatsuki</h1>
			{
				store.akatsuki.map(character => (
					<Card key={character.id} character={character} nija="akatsuki" />
				))
			}

		</div >
		<div className="contaoner-card-home p-2" style={{ backgroundColor: 'transparent' }}>
			<h1>Tailed Beasts</h1>
			{
				store.tailedBeasts.map(character => (
					<Card key={character.id} character={character} nija="beasts" />
				))
			}

		</div >
		</>
	);
}; 