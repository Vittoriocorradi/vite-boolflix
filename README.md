# Boolflix

## Descrizione

Ricreare un applicativo in stile Netflix utilizzando **Vite** e **VueJS**

## Inizializzazione

Installare i pacchetti con  -->  npm install

### Pacchetti aggiunti

- Sass
- Axios
- Fontawesome
- flag-icon-css
- @fontsource/bebas-neue
- @fontsource/roboto

# Milestones

## Milestone 1

Digitare sull'input un titolo o parte di un titolo desiderato.  
Al premere del bottone compare una lista di massimo 20 film con titolo, titolo originale, lingua e voto.

Aggiunta una variabile researchActive che si modifica al premere del bottone e al digitare nell'input:
- al premere del bottone la variabile prende valore true. Se la lista di film fosse vuota (nessun film trovato), viene riportato un messaggio che dice che è impossibile trovare risultati.
- al digitare nell'input la variabile prende valore false. Si modifica il messaggio sopra scritto, che viene cambiato con una frase iniziale di cercare un film.

## Milestone 2

Aggiunto un pacchetto per inserire le immagini delle bandiere delle varie nazionalità. Modificato alcuni dati ricevuti dall'Api per farli corrispondere a quelli del pacchetto.

Usando un procedimento uguale a quello della milestone 1, dato un titolo o parte di un titolo in input e premuto il bottone, si stamperà in pagina anche una lista di massimo 20 serie tv, anche queste con titolo, titolo originale, lingua e voto.

## Milestone 3

Aggiunta l'immagine del poster agli elementi stampati in pagina. Se l'immagine non fosse disponibile, visualizzare un messaggio che riporta quanto tale.

Il voto di ogni elemento è stato trasformato in un numero intero compreso tra 1 e 5. Viene rappresentato sotto forma di tot stelle piene in cinque stelle sennò vuote a seconda del punteggio.

## Milestone 4

Aggiunto stile con css e scss per ricreare un applicativo simil Netflix.  
I vari elementi sono rappresentati sotto forma di card. Inizialmente si vedranno solo i poster, ma portando il cursore sopra un elemento al posto del poster comparirà un box con alcune delle informazioni principali dell'elemento.


> ## To-do
> 
> - Aggiungere una modale scatenata dal click su un film/serie. La modale riporterà in maniera più chiara e leggibile le informazioni di ogni elemento.  
>    > Aggiungere alle informazioni anche i nomi degli attori e i generi.
> - Risolvere il problema delle bandiere che non compaiono se la lingua non combacia.  