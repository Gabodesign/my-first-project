// Componente riutilizzabile "CoreConcept".
// Riceve dei "props" (proprietà) e visualizza un elemento di lista (<li>)
// con un'immagine, un titolo e una descrizione.
export default function CoreConcept(props){
  return(
    <li>
      {/* Mostriamo l'immagine passata tramite props.image.
          L'attributo alt usa props.description per rendere l'immagine accessibile. */}
      <img src={props.image} alt={props.description}/>
      {/* Titolo del concetto, passato dal padre tramite la prop "title". */}
      <h3>{props.title}</h3>
      {/* Testo descrittivo del concetto, passato tramite la prop "description". */}
      <p>{props.description}</p>
    </li>
  );
}

function CoreConcept2({image,title,description}){
  return(
    <li>
      {/* Mostriamo l'immagine passata tramite props.image.
          L'attributo alt usa props.description per rendere l'immagine accessibile. */}
      <img src={image} alt={description}/>
      {/* Titolo del concetto, passato dal padre tramite la prop "title". */}
      <h3>{title}</h3>
      {/* Testo descrittivo del concetto, passato tramite la prop "description". */}
      <p>{description}</p>
    </li>
  );
}