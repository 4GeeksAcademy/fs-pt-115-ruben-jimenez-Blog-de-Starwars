export const initialStore = () => {
  return {
    characters: [],
    akatsuki: [],
    tailedBeasts: [],
    favoritos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      return {
        ...store,
        characters: action.payload
      }
    case 'add_akatsuki':
      return {
        ...store,
        akatsuki: action.payload
      }
      case 'add_tailedBeasts':
        return{
          ...store,
          tailedBeasts: action.payload
        }
      case 'add_favoritos':
        const existe =store.favoritos.some(favorito=>favorito.id=== action.payload.id);
        if(existe)return store;
        // si ya esta, no lo añadas
        return{
          ...store,
          favoritos:[...store.favoritos, action.payload]
        }
      case 'delete_favoritos':
        return{
          ...store,
          favoritos: store.favoritos.filter(favorito=>(favorito.id !== action.id ))
        }
    default:
      throw Error('Unknown action.');
  }
}

