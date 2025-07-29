import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "../css/card.css"

export const Card = ({ character, nija }) => {
    const { store, dispatch } = useGlobalReducer()

        ;

    console.log(store.favoritos)
    return (
        <div className="card" style={{ width: 280, flex: '0 0 auto' }}>
            <img src={character.images[0]} alt="Imagen de ejemplo" />
            <div className="card-content text-center" >
                <div className="card-title "  >{character.name.toUpperCase()} </div>
            </div>
            < div className="card-buttons d-flex justify-content-between " >
                <Link to={`/info/${nija}/${character.id}`}>
                    <button className="btn info-btn" id="info-btn"> Info </button>
                </Link>
                < button className="btn fav-btn  " id="favorito-btn" onClick={() =>
                    dispatch({ type: 'add_favoritos', payload: { nija, id: character.id, name: character.name } })}> Favoritos </button>
            </div>
        </div>

    )

}