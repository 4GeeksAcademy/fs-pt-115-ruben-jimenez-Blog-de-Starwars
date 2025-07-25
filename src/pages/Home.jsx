
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";



export const Home = () => {
	const { store } = useGlobalReducer()
	console.log(store);
	

	return (
		<>
		<div className="contaoner-card-home">
			{
				store.characters.map(character => (
					<Card key={character.id} character={character} />
				))
			}

		</div >
		<div className="contaoner-card-home">
			{
				store.akatsuki.map(character => (
					<Card key={character.id} character={character} />
				))
			}

		</div >
		<div className="contaoner-card-home">
			{
				store.tailedBeasts.map(character => (
					<Card key={character.id} character={character} />
				))
			}

		</div >
		</>
	);
}; 