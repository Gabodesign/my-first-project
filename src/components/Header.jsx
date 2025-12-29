
// Importiamo il file SVG del logo di React.
// Con Vite, questo import diventa un URL che può essere usato in <img src="...">
import reactLogo from '../assets/react.svg'

// Importiamo il file SVG del logo di Vite.
// Anche questo diventerà un URL per l'attributo src dell'immagine.
import viteLogo from '/vite.svg'

// Definiamo un componente React chiamato "Header".
// È una funzione che restituisce del JSX (markup simile a HTML).
export default function Header() {
  // Questa funzione restituisce l'intestazione della nostra pagina,
  // con i loghi di Vite e React cliccabili.
  return (
    <header>
      {/* Primo link: porta al sito di Vite e si apre in una nuova scheda */}
      <a href="https://vite.dev" target="_blank">
        {/* Immagine del logo di Vite.
            - src={viteLogo}: usa l'URL importato sopra
            - className="logo": applica la classe CSS "logo"
            - alt="Vite logo": testo alternativo per accessibilità */}
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>

      {/* Secondo link: porta al sito di React e si apre in una nuova scheda */}
      <a href="https://react.dev" target="_blank">
        {/* Immagine del logo di React.
            - className="logo react": applica due classi CSS, "logo" e "react",
              per avere stili combinati */}
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </header>
  )
}