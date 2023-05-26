import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Detail = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
         <img src={character.image && character.image} alt={character.name} />
         <h1>{character.name && character.name}</h1>
         <h2>{character.status && character.status}</h2>
         <span>{character.species && character.species} / </span>
         <span>{character.gender && character.gender}</span>
         <p>{character.origin?.name && character.origin?.name}</p>
        </div>
    )
};

export default Detail;