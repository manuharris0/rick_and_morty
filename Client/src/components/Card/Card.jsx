import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { addFav, removeFav } from '../../Redux/actions.js'

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose})
   setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <br/>
         <button onClick={() => onClose(id)}>X</button>
         <br/>
         <img src={image} alt={name} />

         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}
// funcion para despachar la action al reducer, recibe dispatch (la capacidad de dispatch)
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}
// esta es para el componente de clase, igual se puede usar en funcional, pero mas dificil 

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);