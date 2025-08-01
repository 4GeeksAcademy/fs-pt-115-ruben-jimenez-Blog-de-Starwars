import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react";
import "../css/cardInfoCharacter.css"

export const CardInfoCharacter = () => {
    const { store } = useGlobalReducer();
    const [urlStore, setUrlStore] = useState({})

    const params = useParams()
    const { id, nija } = params//sacamos los datos de la URL, desestructuramos id en el propio const.
    if (!id || !nija) return console.log("not data");

    useEffect(() => {
        if (!nija || !id) {
            console.error("Parámetros inválidos");
            return;
        }
        let infoList;
        if (nija === "character") {
            infoList = store.characters;
        } else if (nija === "akatsuki") {
            infoList = store.akatsuki;
        } else if (nija === "beasts") {
            infoList = store.tailedBeasts;
        } else {
            console.error("Tipo inválido de nija:", nija);
            setUrlStore(null);
            return;
        }

        const info = infoList.find(p => String(p.id) === id) || null;
        setUrlStore(info);

    }, [nija, id, store.characters, store.akatsuki, store.tailedBeasts]);

    if (!urlStore) {
        return <p>Tenemos un error</p>;
    }


    return (
        <div className=" card-character">
            <div className=" card-img">
            {urlStore.images?.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    className="card-img-top"
                    alt={urlStore.name}
                />
            ))}
            </div>
            <div className="card-body">
                <h5 className="card-title">{urlStore.name}</h5>

                {/* Debut */}
                {urlStore.debut && (
                    <>
                        {Object.entries(urlStore.debut).map(([media, value]) => (
                            <p key={media} className="card-text">
                                <strong>Debut {media.toUpperCase()}:</strong> {value}
                            </p>
                        ))}
                    </>
                )}
                {/* Clan */}
                {urlStore.clan && (
                    <p className="card-text">
                        <strong>Clan:</strong> {urlStore.clan}
                    </p>
                )}
                {/* Familia */}
                {urlStore.family && (
                    <>
                        {Object.entries(urlStore.family?? {}).map(([relation, member]) => (
                            <p key={relation} className="card-text">
                                <strong>{relation.toUpperCase()}:</strong> {member}
                            </p>
                        ))}
                    </>
                )}
                {/*  si family es "undefined", se convierte en un objeto vacío {}, y Object.entries({}) retorna un array vacío. No causa error y no renderiza nada. */}
                 {/* Rank */}
                {urlStore.rank?.ninjaRank?.["Part I"] && (
                    <p className="card-text">
                        <strong>Rank Part I:</strong> {urlStore.rank.ninjaRank["Part I"]}
                    </p>
                )}
                {urlStore.rank?.ninjaRank?.["Part II"] && (
                    <p className="card-text">
                        <strong>Rank Part II:</strong> {urlStore.rank.ninjaRank["Part II"]}
                    </p>
                )}
                {urlStore.rank?.ninjaRank?.Gaiden && (
                    <p className="card-text">
                        <strong>Rank Gaiden:</strong> {urlStore.rank.ninjaRank.Gaiden}
                    </p>
                )}
                {urlStore.rank?.ninjaRegistration && (
                    <p className="card-text">
                        <strong>Registro ninja:</strong> {urlStore.rank.ninjaRegistration}
                    </p>
                )}

                {/* Jutsu */}
                {urlStore.jutsu && (
                    <p className="card-text">
                        <strong>Jutsu:</strong> {urlStore.jutsu.join(", ")}
                    </p>
                )}

                {/* Nature Type */}
                {urlStore.natureType && (
                    <p className="card-text">
                        <strong>Nature Type:</strong> {urlStore.natureType.join(", ")}
                    </p>
                )}

                {/* Personal */}
                {urlStore.personal && (
                    <>
                        {Object.entries(urlStore.personal).map(([key, value]) => {

                            if (typeof value === "object") return null;// Saltamos sub-objetos complejos
                            return (
                                <p key={key} className="card-text">
                                    <strong>{key.toUpperCase()}:</strong> {value}
                                </p>
                            );
                        })}
                    </>
                )}

                {/* Tools */}
                {urlStore.tools && (
                    <p className="card-text">
                        <strong>Tools:</strong> {urlStore.tools.join(", ")}
                    </p>
                )}

                {/* Voice Actors */}
                {urlStore.voiceActors && (
                    <>
                        {Object.entries(urlStore.voiceActors).map(([lang, actors]) => (
                            <p key={lang} className="card-text">
                                <strong>Voice ({lang}):</strong> {Array.isArray(actors) ? actors.join(", ") : String(actors)}
                            </p>  
                        ))}
                    </> 
                )}{/* Array.isArray() devuelve "false" para valores que no son [arrays], incluso si parecen tener estructura de lista (como objetos con índices e length) */}
            </div>
        </div>
    );
};

//Object.entries() para renderizar dinámicamente propiedades de objetos como debut, family, personal, etc., sin tener que escribir una línea por cada campo
// .join(", ")  Es una opción sencilla para mostrar un array de strings como un solo párrafo.
//.toUpperCase() para convertir cualquier texto a mayúsculas.
//Array.isArray() devuelve "false" para valores que no son [arrays], incluso si parecen tener estructura de lista (como objetos con índices e length) 