let easyGrill = document.querySelector('.griglia-easy')
let mediumGrill = document.querySelector('.griglia-medium')
let hardGrill = document.querySelector('.griglia-hard')
let btnPlay = document.querySelector('#play')
let text = document.querySelector('.text')
let sum = 0;

let difficulty = document.querySelector('#difficulty');



btnPlay.addEventListener('click', function(){
    if (difficulty.value == 'easy'){
        text.classList.add('hidden')
        easyGrill.innerHTML=''
        easyGrill.classList.add('show')
        mediumGrill.classList.remove('show')
        hardGrill.classList.remove('show')
        
        for ( e = 1; e <= 49; e++){
            sum += e
            let square = document.createElement(`div`);
            square.classList.add('box')
            square.innerHTML= e
            square.addEventListener('click', function(){
                square.classList.add('active')
            })
            easyGrill.append(square)
        }
    }
    if (difficulty.value == 'medium'){
        text.classList.add('hidden')
        mediumGrill.innerHTML=''
        easyGrill.classList.remove('show')
        mediumGrill.classList.add('show')
        hardGrill.classList.remove('show')

        for ( m = 1; m <= 81; m++){
            sum += m
            let square = document.createElement(`div`);
            square.classList.add('box')
            square.innerHTML= m
            square.addEventListener('click', function(){
                square.classList.add('active')
            })
            mediumGrill.append(square)
        }
    }
    if (difficulty.value == 'hard'){
        text.classList.add('hidden')
        hardGrill.innerHTML=''
        easyGrill.classList.remove('show')
        mediumGrill.classList.remove('show')
        hardGrill.classList.add('show')

        for ( h = 1; h <= 100; h++){
            sum += h
            let square = document.createElement(`div`);
            square.classList.add('box')
            square.innerHTML= h
            square.addEventListener('click', function(){
                square.classList.add('active')
            })
            hardGrill.append(square)
        }
    }
});














