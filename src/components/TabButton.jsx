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
    
    // Variante alternativa (commentata) per gestire il click:
    // potresti definire una funzione qui dentro e poi usarla nel bottone
    // come onClick={handleClick}. Nel tuo caso, però, passi direttamente
    // la funzione dal padre tramite props.onSelect, che è la soluzione migliore.
    // function handleClick(){
    //     console.log("Hello World");
    // }

    return (
        <li>
            {/* 
              - className={props.isSelected ? 'active' : undefined}:
                se props.isSelected è true, aggiungiamo la classe CSS "active"
                al bottone (es. per evidenziare il tab selezionato).
                Se è false, passiamo undefined, quindi nessuna classe extra.
              
              - onClick={props.onSelect}:
                quando l'utente clicca il bottone, React chiamerà la funzione
                passata dal componente padre tramite la prop onSelect.
                Nel padre (App) questa funzione è un wrapper che chiama handleSelect(...)
                con il nome del tab.
            */}
            <button
              className={props.isSelected ? 'active' : undefined}
              onClick={props.onSelect}
            >
              {props.children}
            </button>
        </li>
    );
}