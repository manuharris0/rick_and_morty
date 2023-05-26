import Card from '../Card/Card';

export default function Cards({characters, onClose }) {
   return (
      <div>
         {
            characters.map(({id, name, status, species, gender, origin, image}) => {
// no se usa forEach(), porque solo recorre, no retorna
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}
                     onClose={onClose}
                  />
               )
            })
      }
   </div>
   )
}