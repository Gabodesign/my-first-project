
// Importiamo l'hook useState dalla libreria React.
// useState ci permette di creare e gestire uno "stato" dentro un componente.
import { useState } from 'react'

// Importiamo il file di stile CSS per questo componente.
// Gli stili definiti qui verranno applicati agli elementi con le classi corrispondenti.
import './App.css'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'

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
  // Creiamo uno stato chiamato "count" con valore iniziale 0.
  // - count: contiene il valore corrente del contatore
  // - setCount: funzione per aggiornare il valore di count
  // useState(0) indica che il valore iniziale è 0.
  const [count, setCount] = useState(0)

  // Scegliamo in modo casuale una delle stringhe presenti in reactDescriptions.
  // genRandomInt(2) restituisce un numero tra 0 e 2, che usiamo come indice dell'array.
  const description = reactDescriptions[genRandomInt(2)];
  // Il componente App restituisce la struttura dell'interfaccia (JSX).
  return (
    // React Fragment: <>...</>
    // È un contenitore "invisibile" che ci permette di restituire più elementi
    // senza aggiungere un <div> extra nel DOM.
    <>
      {/* Usiamo il componente Header definito sopra. */}
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
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
          
        </ul>
      </section>
    </>
  )
}

// Esportiamo il componente App come "export di default" di questo file.
// In altri file potremo importarlo semplicemente con: import App from './App.jsx'
export default App