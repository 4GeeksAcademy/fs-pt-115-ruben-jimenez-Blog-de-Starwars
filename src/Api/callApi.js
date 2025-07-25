
export const getCharacters = async () => {
    const response = await fetch("https://dattebayo-api.onrender.com/characters",{
        method: "GET"
    })
    const data = await response.json()
    return data.characters;
}

export const getAkatsuki = async () => {
    const response = await fetch("https://dattebayo-api.onrender.com/akatsuki",{
        method: "GET"
    })
    const data = await response.json()
    return data.akatsuki;
}
export const getTailedBeasts= async ()=>{
    const response =await fetch("https://dattebayo-api.onrender.com/tailed-beasts",{
    method: "GET" })
    const data =await response.json()
    return data["tailed-beasts"]
}