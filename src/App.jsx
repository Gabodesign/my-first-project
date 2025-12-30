// Importiamo l'hook useState dalla libreria React.
// useState ci permette di creare e gestire uno "stato" dentro un componente.
import { useState } from 'react'

// Importiamo il file di stile CSS per questo componente.
// Gli stili definiti qui verranno applicati agli elementi con le classi corrispondenti.
import './App.css'

// Importiamo i dati dei concetti fondamentali da un file separato.
// CORE_CONCEPTS è in genere un array di oggetti (title, description, image, ecc.)
// che useremo per popolare dinamicamente i componenti CoreConcept.
import { CORE_CONCEPTS } from './data.js'

// Importiamo anche gli esempi (EXAMPLES) dallo stesso file dei dati.
// EXAMPLES è tipicamente un oggetto in cui le chiavi (components, jsx, props, state)
// corrispondono ai "topic" selezionabili e i valori contengono title, description e code.
import { EXAMPLES} from './data.js'

// Importiamo il componente Header dal suo file dedicato.
// Tenere i componenti in file separati rende il codice più organizzato e riutilizzabile.
import Header from './components/Header.jsx'

// Importiamo il componente CoreConcept dal relativo file.
// Questo componente rappresenta un singolo "concetto" mostrato nella lista.
import CoreConcept from './components/CoreConcept.jsx'

// Importiamo il componente TabButton.
// Lo useremo per visualizzare una serie di pulsanti (tab) nella sezione "Examples".
import TabButton from './components/TabButton.jsx'

// Array di stringhe che useremo per descrivere React in modo "dinamico".
// Insieme alla funzione genRandomInt, ci permette di scegliere casualmente
// una delle descrizioni ogni volta che il componente viene renderizzato.
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// Funzione di utilità che genera un numero intero casuale tra 0 e "max" (incluso).
// La useremo per scegliere un indice casuale nell'array reactDescriptions.
// Nota: qui usiamo 2 come valore massimo perché l'array ha 3 elementi (0,1,2).
function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}


// Definiamo il componente principale "App".
// È il componente che verrà montato nella pagina HTML (di solito in <div id="root">).
function App() {
  // Stato che memorizza quale "topic" (scheda/tab) è attualmente selezionato
  // nella sezione "Examples". Il valore iniziale è 'components', quindi
  // all'avvio mostreremo subito l'esempio relativo ai componenti.
  const [selectedTopic, setSelectedTopic] = useState('components');

  // Variabile locale che potrebbe essere usata per definire il contenuto
  // da mostrare in base al tab selezionato. Al momento è inizializzata con
  // un messaggio fisso e viene solo loggata in console nella funzione handleSelect.
  let tabContent = 'Please click a button';

  // Creiamo uno stato chiamato "count" con valore iniziale 0.
  // - count: contiene il valore corrente del contatore
  // - setCount: funzione per aggiornare il valore di count
  // useState(0) indica che il valore iniziale è 0.
  const [count, setCount] = useState(0)

  // Scegliamo in modo casuale una delle stringhe presenti in reactDescriptions.
  // genRandomInt(2) restituisce un numero tra 0 e 2, che usiamo come indice dell'array.
  const description = reactDescriptions[genRandomInt(2)];
  // Il componente App restituisce la struttura dell'interfaccia (JSX).

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

  return (
    // React Fragment: <>...</>
    // È un contenitore "invisibile" che ci permette di restituire più elementi
    // senza aggiungere un <div> extra nel DOM.
    <>
      {/* Usiamo il componente Header definito sopra. */}
      {/* Anche se Header è definito in un altro file (./components/Header.jsx),
          una volta importato possiamo usarlo qui come qualsiasi altro componente. */}
      <Header />

      {/* Titolo principale della pagina. */}
      {/* {description} aggiunge una parola scelta casualmente dall'array
          reactDescriptions ogni volta che il componente viene renderizzato. */}
      <h1>Questo è il mio primo progetto {description}</h1>

      {/* Contenitore con classe CSS "card". Lo stile è definito in App.css. */}
      <div className="card">
        {/* Bottone che, quando cliccato, aumenta il valore di count di 1. */}
        <button
          // onClick riceve una funzione che verrà eseguita quando l'utente clicca.
          // Usiamo la forma setCount((count) => count + 1) che prende il valore
          // precedente di count e ne calcola il nuovo valore.
          onClick={() => setCount((count) => count + 1)}
        >
          {/* Testo dentro il bottone.
              Le graffe { } servono per inserire JavaScript dentro il JSX.
              Qui stiamo mostrando il valore corrente di count. */}
          count is {count}
        </button>

        {/* Paragrafo con un messaggio di istruzioni. */}
        <p>
          {/* <code>...</code> serve solo a visualizzare il testo come "codice". */}
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Paragrafo con una classe CSS specifica. */}
      <p className="read-the-docs">
        {/* Testo che invita l'utente a cliccare sui loghi per la documentazione. */}
        Click on the Vite and React logos to learn more
      </p>

      {/* Sezione dedicata ai "concetti fondamentali" (core concepts). */}
      <section id="core-concepts">
        {/* Sottotitolo della sezione. */}
        <h2>Core Concepts</h2>
        {/* Lista non ordinata che conterrà diversi elementi CoreConcept. */}
        <ul>
          {/* Ogni CoreConcept è un'istanza del componente riutilizzabile definito sopra.
              Passiamo i dati (title, description, image) come props, così il componente
              può mostrare contenuti diversi mantenendo la stessa struttura. */}
          {/* I valori che passiamo come props provengono dall'array CORE_CONCEPTS
              importato da ./data.js. Ogni elemento dell'array è un oggetto con
              le proprietà title, description e image. */}
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}  
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept 
            title={CORE_CONCEPTS[1].title} 
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
          />
          {/* In questo caso usiamo l'operatore "spread" {...CORE_CONCEPTS[2]}.
              Questo prende tutte le proprietà dell'oggetto CORE_CONCEPTS[2]
              (es. title, description, image) e le passa come singole props
              al componente CoreConcept. */}
          <CoreConcept {...CORE_CONCEPTS[2]} />
          {/* Stesso approccio anche per il quarto elemento: tutte le proprietà
              dell'oggetto CORE_CONCEPTS[3] vengono "spalmate" come props. */}
          <CoreConcept {...CORE_CONCEPTS[3]} />
          
        </ul>
      </section>

      {/* Sezione che conterrà esempi pratici relativi ai concetti di React. */}
      <section id="examples">
        {/* Titolo della sezione degli esempi. */}
        <h2>Examples</h2>
        {/* <menu> è simile a una lista; qui lo usiamo per raggruppare
            i pulsanti che rappresentano le diverse schede (tab). */}
        <menu>
          {/* Ogni TabButton è un componente che riceve come contenuto (children)
              il testo da mostrare sul pulsante. In seguito potrai aggiungere
              logica per reagire al click e cambiare il contenuto mostrato
              in base al tab selezionato. */}
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>

        {/* Contenitore che mostra i dettagli relativi al "topic" selezionato.
            Usiamo selectedTopic come chiave per accedere all'oggetto EXAMPLES
            corrispondente (es. EXAMPLES['components']). */}
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
      </section>
    </>
  )
}

// Esportiamo il componente App come "export di default" di questo file.
// In altri file potremo importarlo semplicemente con: import App from './App.jsx'
export default App