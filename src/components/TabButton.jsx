// Importiamo il file di stile CSS per il componente TabButton.
// Gli stili definiti qui controlleranno l'aspetto del <li> e del <button>.
import './TabButton.css'

// Definiamo il componente TabButton come "export di default".
// Riceve un oggetto "props" dal componente padre.
// In questo caso useremo in particolare props.children, cioè il contenuto
// che viene inserito tra i tag <TabButton> ... </TabButton>.
export default function TabButton(props){
    // Il componente restituisce un elemento di lista (<li>) che contiene un bottone.
    // All'interno del bottone mostriamo props.children:
    // questo significa che il testo (o anche altri elementi JSX) vengono passati
    // dal componente padre, rendendo TabButton un componente molto riutilizzabile.
    //
    // Esempio d'uso:
    // <TabButton>Components</TabButton>  --> props.children sarà "Components"
    //function handleClick(){
        //console.log("Hello World");
    //}
    return (
        <li>
            <button onClick={props.onSelect}>{props.children}</button>
        </li>
    );
} 