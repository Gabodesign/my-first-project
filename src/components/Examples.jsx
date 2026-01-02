import { useState } from "react";
// Importiamo anche gli esempi (EXAMPLES) dallo stesso file dei dati.
// EXAMPLES è tipicamente un oggetto in cui le chiavi (components, jsx, props, state)
// corrispondono ai "topic" selezionabili e i valori contengono title, description e code.
import { EXAMPLES} from '../data.js'
// Importiamo il componente TabButton.
// Lo useremo per visualizzare una serie di pulsanti (tab) nella sezione "Examples".
import TabButton from './TabButton.jsx'
import Section from "./Section.jsx";
export default function Examples(){
      // Stato che memorizza quale "topic" (scheda/tab) è attualmente selezionato
      // nella sezione "Examples". Qui non passiamo un valore iniziale a useState(),
      // quindi selectedTopic sarà undefined finché l'utente non clicca un TabButton.
      // Useremo questo per mostrare un messaggio "Please select a topic" quando
      // nessun topic è ancora stato scelto.
      const [selectedTopic, setSelectedTopic] = useState();
    
      // Variabile locale che potrebbe essere usata per definire il contenuto
      // da mostrare in base al tab selezionato. Al momento è inizializzata con
      // un messaggio fisso e viene solo loggata in console nella funzione handleSelect.
      let tabContent = 'Please click a button';
      // Funzione gestore che viene chiamata quando si clicca su uno dei TabButton.
        // selectedButton è una stringa che identifica il tab scelto
        // (es. 'components', 'jsx', 'props', 'state').
        function handleSelect(selectedButton){
          // Aggiorniamo lo stato selectedTopic con il valore del tab selezionato.
          // Questo causerà un nuovo render del componente e aggiornerà il contenuto
          // mostrato nella sezione "Examples" in base alla chiave usata in EXAMPLES.
          setSelectedTopic(selectedButton)
          // Al momento logghiamo in console il valore di tabContent, che è sempre
          // "Please click a button" perché non viene mai modificato.
          console.log(tabContent);
        }
    return(
        <Section id="examples" title="Examples">
        {/* Titolo della sezione degli esempi. */}
        {/* <menu> è simile a una lista; qui lo usiamo per raggruppare
            i pulsanti che rappresentano le diverse schede (tab). */}
        <menu>
          {/* Ogni TabButton riceve:
                - children: il testo mostrato sul pulsante (es. "Components")
                - onSelect: funzione da chiamare quando il bottone viene cliccato
                - isSelected: booleano che indica se questo tab è quello attivo.
              Qui confrontiamo selectedTopic con la stringa del tab per ottenere
              true/false, utile per cambiare stile (es. evidenziare il tab attivo). */}
          <TabButton 
            isSelected={selectedTopic === 'components'} 
            onSelect={() => handleSelect('components')}
          >
            Components
          </TabButton>
          <TabButton 
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}
          >
            Props
          </TabButton>
          <TabButton 
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}
          >
            State
          </TabButton>
        </menu>

        {/* Render condizionale:
            - Se selectedTopic è "falsy" (undefined all'inizio), mostriamo
              un semplice paragrafo che invita a selezionare un topic.
            - Altrimenti mostriamo il blocco con titolo, descrizione e codice
              dell'esempio corrispondente. */}
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          /* Contenitore che mostra i dettagli relativi al "topic" selezionato.
             Usiamo selectedTopic come chiave per accedere all'oggetto EXAMPLES
             corrispondente (es. EXAMPLES['components']). */
          <div id="tab-content"> 
            {/* Titolo dell'esempio attualmente selezionato. */}
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            {/* Descrizione testuale dell'esempio corrente. */}
            <p>{EXAMPLES[selectedTopic].description}</p>
            {/* <pre> e <code> vengono usati insieme per visualizzare blocchi di codice
                preservando formattazione e andare a capo in modo leggibile. */}
            <pre>
              <code>
                {/* Mostriamo il codice di esempio associato al topic selezionato. */}
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        )}
        
        
      </Section>
    );
}