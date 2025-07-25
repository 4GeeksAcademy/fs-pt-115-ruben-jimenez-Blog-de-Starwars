export const Card = ({character}) => {



    return (
        <div className="card" style={{ width: 360, flex: '0 0 auto' }}>
            <img src={character.images[0]} alt="Imagen de ejemplo" />
            <div className="card-content" >
                <div className="card-title" >{character.name} </div>
            </div>
            < div className="card-buttons" >
                <button className="info-btn" > Info </button>
                < button className="fav-btn" > Favoritos </button>
            </div>
        </div>

    )

}