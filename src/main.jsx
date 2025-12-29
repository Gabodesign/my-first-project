// Importiamo StrictMode dalla libreria React.
// StrictMode è un componente speciale che aiuta a individuare potenziali problemi
// durante lo sviluppo (per esempio eseguendo alcuni effetti due volte in dev).
import { StrictMode } from 'react'

// Importiamo createRoot dal pacchetto react-dom/client.
// createRoot è l'API introdotta con React 18 per "montare" la nostra app
// dentro un elemento del DOM (di solito un <div id="root"> nell'index.html).
import { createRoot } from 'react-dom/client'

// Importiamo gli stili globali dell'applicazione.
// Questo file CSS di solito contiene stili base per il body, font, ecc.
import './index.css'

// Importiamo il componente principale della nostra applicazione.
// App è il componente che abbiamo definito in App.jsx e che rappresenta
// il "cuore" dell'interfaccia.
import App from './App.jsx'

// createRoot(...) crea un "root React", cioè il punto di ingresso
// dove React controllerà il contenuto dell'interfaccia.
createRoot(
  // document.getElementById('root') prende l'elemento <div id="root"> 
  // dal file index.html generato da Vite.
  document.getElementById('root'),
)
// Dopo aver creato il root, chiamiamo .render(...) per dire a React
// quale componente deve essere "montato" dentro quell'elemento.
.render(
  // StrictMode avvolge la nostra App e abilita controlli aggiuntivi in sviluppo.
  // Non influisce sul comportamento in produzione, serve solo per aiutarci
  // a scrivere codice più sicuro e senza pattern obsoleti.
  <StrictMode>
    {/* Montiamo il componente App come radice della nostra interfaccia. */}
    <App />
  </StrictMode>,
  // La virgola finale è opzionale in JavaScript moderno, ma è accettata
  // e non crea problemi. È solo uno stile di formattazione.
)