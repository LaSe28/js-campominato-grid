let grid = document.querySelector('.griglia')
let btnPlay = document.querySelector('#play')
let text = document.querySelector('.text')
let sum = 0;

let difficulty = document.querySelector('#difficulty');

let boxesNum = [49, 81, 100]


btnPlay.addEventListener('click', function(){
    if (difficulty.value == 'easy'){
        text.classList.add('hidden')
        grid.innerHTML=''
        
        for ( e = 1; e <= 49; e++){
            sum += e
            let square = document.createElement(`div`);
            square.classList.add('box')
            square.style.height = 'calc(100% / 7)'
            square.style.width = 'calc(100% / 7)'

            square.innerHTML= e
            square.addEventListener('click', function(){
                square.classList.add('active')
            })
            grid.append(square)
        }
    }
    if (difficulty.value == 'medium'){
        text.classList.add('hidden')
        grid.innerHTML=''

        for ( m = 1; m <= 81; m++){
            sum += m
            let square = document.createElement(`div`);
            square.classList.add('box')
            square.style.height = 'calc(100% / 9)'
            square.style.width = 'calc(100% / 9)'
            square.innerHTML= m
            square.addEventListener('click', function(){
                square.classList.add('active')
            })
            grid.append(square)
        }
    }
    if (difficulty.value == 'hard'){
        text.classList.add('hidden')

       grid.innerHTML=''
        for ( h = 1; h <= 100; h++){
            sum += h
            let square = document.createElement(`div`);
            square.classList.add('box')
            square.innerHTML= h
            square.addEventListener('click', function(){
                square.classList.add('active')
            })
            grid.append(square)
        }
    }
});












