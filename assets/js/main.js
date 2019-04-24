//je tire mon nombre au hasard (entre 0 et 100)
var targetNumber = Math.round(Math.random() * 100 + 1);
alert('The target number is ' + targetNumber);
// on fixe le compteur a 0
var count = 0;
// Quand le document est ready
$(function () {
    $('#verify').click(function () {
        // on recupere la value introduite
        var inputNumber = $('#input').val();
        // on verifie si le nombre étais saissit, sinon il peut pas continuer 
        if (inputNumber > 0 && inputNumber < 100) {
            // si le nombre est trop grand
            if (inputNumber > targetNumber) {
                // on ajoute encore un 1 au compteur
                count++
                // on set en rouge la couleur de mon message <p> 'result' 
                $('#result').css('color', 'red');
                // j'affiche le resultat dans le mesage <p>
                $('#result').text(inputNumber + ' est trop grand. Saisir en nombre MOINS grand')
            }
            // si le nombre est trop petit
            if (inputNumber < targetNumber) {
                // on ajoute encore un 1 au compteur
                count++
                // on set en rouge la couleur de mon message <p> 'result' 
                $('#result').css('color', 'red');
                // j'affiche le resultat dans le mesage <p>
                $('#result').text(inputNumber + ' est trop petit. Saisir en nombre PLUS grand')
            }
            // si le nombre est egal au nombre attendu
            if (inputNumber == targetNumber) {
                // on ajoute encore un 1 au compteur
                count++
                // on set en vert la couleur de mon message <p> 'result' 
                $('#result, #countResult').css('color', 'green');
                // j'affiche le resultat dans le mesage <p>
                $('#result').text(inputNumber + ' est la bonne valeur. Le nombre saissit est CORRECT')
                // je mets me compteur
                $('#countResult').text('Vous avez essaié ' + count + ' fois');
            }
        // si la saissit n'est pas bien faite, on reçoit le message qu'il faut saisir un nombre entre 0 et 100
        } else {
            alert('Saisir un nombre entre 0 et 100');
        }
    })
})
