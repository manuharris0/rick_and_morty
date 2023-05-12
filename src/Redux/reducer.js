import { ADD_FAV, FILTER, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                    ...state,
                    myFavorites: [...state.allCharactersFav, action.payload],
                    allCharactersFav: [...state.allCharactersFav, action.payload],
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== Number(action.payload))
// filtramos el array para que se que con toodos los char menos el que llega por id, parciamos el tipo de dato que viene de la action a number
            }
        case "FILTER":
            const allCharactersFiltered = state.allCharactersFav.filter((char)=> char.gender === action.payload);
            return {
                ...state,
                myFavorites: allCharactersFiltered
            }
        case  "ORDER":
            const allCharactersFavCopy = [...state.allCharactersFav];
            return{
                ...state,
                myFavorites: 
                action.payload === "A"
                ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state} // tambien podria devolver simplemente state, pero es buena practica devolver la copia 
    };
};

export default reducer;