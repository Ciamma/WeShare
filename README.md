# WeShare

## Comandi importanti
### Per prendere la prima volta il codice:

    - aprire visual studio
    - installare le estensioni GitHub e Gitlens
    - digitare ctrl + maiusc + P e scrivere nella barra git clone
    - incollare il seguente link "https://github.com/Ciamma/WeShare.git" (senza apici)
    - da terminale di visual studio scrivere: npm install
    
### Usare Branch
Errare è umano... ma almeno non facciamolo sul Master
Dato che master è il codice base, se dovesse capitare un errore che nessuno di noi riesce a risolvere, potrebbe essere controproducente buttare tutto il codice e ricominciare da capo!!! Ogni volta che Facciamo qualcosa di nuovo, procediamo così:

    - da controllo codice sorgente, nella sezione branches, premere sul bottone +
    - dare un nome sensato al branch
    - pubblicarlo (nella sezione branches, cercare il tasto pubblica)

### Committare nuove modifiche
Quando avete fatto cambiamenti al codice(nel branch):

    - da controllo del codice cercare il tasto commit
    - commenta con quello che hai fatto (non troppo dettagliato ma deve far capire)
    - sincronizza i cambiamenti
 

## Per buildare l'apk:

    - da terminale esegui "npm install -g eas-cli"
    - crea un account su expo(https://expo.dev/signup)
    - da terminale digita eas build -p android --profile HCI
