

export const initialStore = () => {
  const favoritosAlLocalStorage = localStorage.getItem('favoritos');
  // Tomar la lista de favoritos.
  return {
    characters: [],
    akatsuki: [],
    tailedBeasts: [],
    favoritos: favoritosAlLocalStorage ? JSON.parse(favoritosAlLocalStorage) : [],

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
      return {
        ...store,
        tailedBeasts: action.payload
      }
    case 'add_favoritos':
      const existe = store.favoritos.some(favorito => favorito.id === action.payload.id);
      if (existe) return store;
      // si ya esta, no lo añadas
      const nuevosFavoritos = [...store.favoritos, action.payload];
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      // Guardar en localStorage
      return {
        ...store,
        favoritos: nuevosFavoritos
      }
    case 'delete_favoritos':
       const nuevosFavoritosBorrado = store.favoritos.filter(favorito => favorito.id !== action.id);
       localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritosBorrado));
        return {
        ...store,
        favoritos: nuevosFavoritosBorrado
        
        
      }
    default:
      throw Error('Unknown action.');
  }
}

