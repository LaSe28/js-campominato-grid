let easyGrill = document.querySelector('.griglia-easy')
let mediumGrill = document.querySelector('.griglia-medium')
let hardGrill = document.querySelector('.griglia-hard')
let btnPlay = document.querySelector('#play')
let sum = 0;
let square;

let difficulty = document.querySelector('#difficulty');


difficulty.addEventListener('change' , function(){

    btnPlay.addEventListener('click', function(){
        if (difficulty.value == 'easy'){
            easyGrill.classList.add('show')
            mediumGrill.classList.remove('show')
            hardGrill.classList.remove('show')
            for ( e = 1; e <= 49; e++){
                sum += e
                square = document.createElement(`div`);
                square.classList.add('box')
                square.innerHTML= e
                easyGrill.append(square)
            }
        }
        if (difficulty.value == 'medium'){
            easyGrill.classList.remove('show')
            mediumGrill.classList.add('show')
            hardGrill.classList.remove('show')

            for ( m = 1; m <= 81; m++){
                sum += m
                square = document.createElement(`div`);
                square.classList.add('box')
                square.innerHTML= m
                mediumGrill.append(square)
            }
        }
        if (difficulty.value == 'hard'){
            easyGrill.classList.remove('show')
            mediumGrill.classList.remove('show')
            hardGrill.classList.add('show')
    
            for ( h = 1; h <= 100; h++){
                sum += h
                square = document.createElement(`div`);
                square.classList.add('box')
                square.innerHTML= h
                hardGrill.append(square)
            }
        }
    })
})














