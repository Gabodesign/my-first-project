// Importiamo i dati dei concetti fondamentali da un file separato.
// CORE_CONCEPTS è in genere un array di oggetti (title, description, image, ecc.)
// che useremo per popolare dinamicamente i componenti CoreConcept.
import { CORE_CONCEPTS } from '../data.js'
// Importiamo il componente CoreConcept dal relativo file.
// Questo componente rappresenta un singolo "concetto" mostrato nella lista.
import CoreConcept from './CoreConcept.jsx'
import Section from './Section.jsx';

export default function CoreConcepts(){
    return(
        <Section id="core-concepts" title="Core Concepts">
            {/* Sottotitolo della sezione. */}
            {/* Lista non ordinata che conterrà diversi elementi CoreConcept. */}
            <ul>
    
                {/* Usiamo il metodo .map sull'array CORE_CONCEPTS per trasformare
                    ogni oggetto "conceptItem" in un componente <CoreConcept />.
                    - key={conceptItem.title}: la key aiuta React a identificare
                        in modo univoco ogni elemento della lista (qui usiamo il titolo).
                    - {...conceptItem}: operatore "spread" che passa tutte le proprietà
                        dell'oggetto conceptItem (title, description, image, ecc.)
                        come singole props al componente CoreConcept. */}
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept 
                    key={conceptItem.title} 
                    {...conceptItem}
                    />
                ))}
    
                {/* Ogni CoreConcept è un'istanza del componente riutilizzabile definito sopra.
                    Passiamo i dati (title, description, image) come props, così il componente
                    può mostrare contenuti diversi mantenendo la stessa struttura. */}
                {/* I valori che passiamo come props provengono dall'array CORE_CONCEPTS
                    importato da ./data.js. Ogni elemento dell'array è un oggetto con
                    le proprietà title, description e image. 
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
                In questo caso usiamo l'operatore "spread" {...CORE_CONCEPTS[2]}.
                    Questo prende tutte le proprietà dell'oggetto CORE_CONCEPTS[2]
                    (es. title, description, image) e le passa come singole props
                    al componente CoreConcept.
                <CoreConcept {...CORE_CONCEPTS[2]} />
                Stesso approccio anche per il quarto elemento: tutte le proprietà
                    dell'oggetto CORE_CONCEPTS[3] vengono "spalmate" come props. 
                <CoreConcept {...CORE_CONCEPTS[3]} />
                */}
            </ul>
        </Section>
    );
}