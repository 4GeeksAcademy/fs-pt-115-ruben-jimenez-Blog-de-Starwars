export const initialStore = () => {
  return {
    characters: [],
    akatsuki: [],
    tailedBeasts: []
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
    default:
      throw Error('Unknown action.');
  }
}
