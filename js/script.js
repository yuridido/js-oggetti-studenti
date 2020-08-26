// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
// e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log e poi provare a stampare con jQuery:
// BONUS: Provate ad utilizzare Handlebars.

$(document).ready(function(){
    // creo l'oggetto studente
    var studente = {
        nome : 'tizio',
        cognome : 'rossi',
        eta : '23'
    };

    // lo scrivo nel dom
    var datiStudente = '';
    for (var key in studente) {
        datiStudente += (" " + studente[key]);
    };

    $('#stud').append(datiStudente);

    // creo array di oggetti
    var elencoStudenti = [
        {
            nome : 'caio',
            cognome : 'bianchi',
            eta : '23'
        },
        {
            nome : 'sempronio',
            cognome : 'verdi',
            eta : '25'
        },
        {
            nome : 'marco',
            cognome : 'giallini',
            eta : '57'
        }
    ];

    // stampo nome e cognome di tutti con ciclo
    $('#studenti').html(stampa());

    // aggiungo possibilità di inserire i prompt
    var studenteInserito = {}
    $('#bottone').click(function(){
        var nome = prompt('inserisci il nome');
        var cognome = prompt('inserisci il cognome');
        var eta = prompt('inserisci l/età');
        var studenteInserito = {
            nome : nome,
            cognome : cognome,
            eta : eta
        };
        elencoStudenti.push(studenteInserito);
        $('#studenti').html(stampa());
        // console.log(elencoStudenti);
    });





    // FUNZIONI
    function stampa(){
        var testo = '';
        for (var i = 0; i < elencoStudenti.length; i++) {
            var nome = elencoStudenti[i].nome;
            var cognome = elencoStudenti[i].cognome;
            testo += ('nome: ' + nome + ', ' + 'cognome: ' + cognome + '<br>')
        };
        return testo;
    };

});
