let grill = document.querySelector('.griglia')
let btnPlay = document.querySelector('#play')

let sum = 0;
let square = document.createElement(`div`);
let difficulty = document.querySelector('#difficulty');


difficulty.addEventListener('change' , function(){
    btnPlay.addEventListener('click', function(){
        
        if (difficulty.value == 'easy'){
            grill.classList.remove('hidden')
            
            for ( e = 1; e <= 49; e++){
                sum += e
                square = document.createElement(`div`);
                square.classList.add('box-easy')
                square.classList.add('box')
                square.innerHTML= e
                grill.append(square)
            }
        }
    })
    
})

difficulty.addEventListener('change' , function(){
    btnPlay.addEventListener('click', function(){

        if (difficulty.value == 'medium'){
            grill.classList.remove('hidden')    
            for ( m = 1; m <= 81; m++){
                sum += m
                square = document.createElement(`div`);
                square.classList.add('box-medium')
                square.classList.add('box')
                square.innerHTML= m
                grill.append(square)
            }
        }
    })
    
})

difficulty.addEventListener('change' , function(){
    btnPlay.addEventListener('click', function(){

        if (difficulty.value == 'hard'){
            grill.classList.remove('hidden')   
            for ( h = 1; h <= 100; h++){
                sum += h
                square = document.createElement(`div`);
                square.classList.add('box-hard')
                square.classList.add('box')
                square.innerHTML= h
                grill.append(square)
            }
        }
    })

})

































































