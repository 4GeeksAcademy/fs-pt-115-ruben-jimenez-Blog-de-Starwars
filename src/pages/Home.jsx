
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";



export const Home = () => {
	const { store } = useGlobalReducer()
	
	

	return (
		<>
		<div className="contaoner-card-home bg-transparent border-0 ">
			{
				store.characters.map(character => (
					<Card key={character.id} character={character} nija="character"  />
				))
			}

		</div >
		<div className="contaoner-card-home bg-transparent border-0 ">
			{
				store.akatsuki.map(character => (
					<Card key={character.id} character={character} nija="akatsuki" />
				))
			}

		</div >
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