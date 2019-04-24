//je tire mon nombre au hasard (entre 0 et 100)
var targetNumber=Math.round( Math.random()*100 + 1 );
alert(targetNumber);
var count=0;
//lorsque ma page est chargée complètement
$(document).ready(function(){
    // lorsque je clique sur Vérifier
    $('#verify').click(function(){
        //on récupère la valeur de l'input
        var inputNumber=$('#input').val();
        if (inputNumber) {
            //si le nombre est trop grand
            if ( inputNumber > targetNumber ){
                //j'affiche dans le paragraphe que c'est trop grand
                count++;
                $('#result').css('color','red');
                $('#result').text(inputNumber + " est trop grand, réessayez.");
            }
            //si le nombre est trop petit
            if ( inputNumber < targetNumber ){
                //j'affiche dans le paragraphe que c'est trop petit
                count ++;
                $('#result').css('color','red');
                $('#result').text(inputNumber + " est trop petit, réessayez.");
            }
            // si le nombre est le bon
            if ( inputNumber == targetNumber){
                // j'affiche dans le paragraphe que c'est gagné
                count ++;
                $('#result, #countResult').css('color','green');
                $('#result').text(inputNumber + ' est le bon nombre. Félicitations.');
                $('#countResult').text('Vous avez essayé ' + count +' fois.');
                count = 0;
                targetNumber=Math.round( Math.random()*100 + 1 );
            }
        } else {
            return 'HEY';
        };
    });
});