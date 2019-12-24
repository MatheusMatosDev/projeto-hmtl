// (function (){
// var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];




// })();

// app.inicio();
let tempos=[]
function iniciar(){ 
    var inicio = Date.now()
    var contador = 0
    let cardHTML= '';
    const jogo = document.getElementById("jogo")
    const imagens = ['facebook.png','android.png','chrome.png','firefox.png','html5.png','googleplus.png','twitter.png','windows.png',];
    // btn.onclick = () =>{
    
            imagens.forEach(img =>{
            cardHTML +=`<div class="jogoMemoria" data-card="${img}">
            <img class="imagem" src="img/${img}">
            <img class="verso" src="img/cross.png">
            </div>
            `
        });

        jogo.innerHTML = cardHTML +cardHTML;

        // FIM renderizaçao html


        var cards = document.querySelectorAll(".jogoMemoria");
        let lockCard= false
        let primeiraCard, segundaCard;

        function flipCard(){
            if (lockCard) return false;
        this.classList.add("flip");
        if(!primeiraCard){ 
            primeiraCard = this
            return false;
        }
        segundaCard = this;
        checkIgual();
        }

        function checkIgual(){
            let igual = primeiraCard.dataset.card === segundaCard.dataset.card;
            if(!igual ){ 
                desfazCards() }
            else {
                
                resetCards(igual);
                console.log(igual)
                contador++;
                console.log(contador)
                if (contador==8){
                    
                    final=Date.now()
                    tempo = (final-inicio)/1000
                    tempos.push(tempo)
                    console.log(tempos)
                    setTimeout(function(){
                        window.alert("Parabéns, vc terminou o jogo")
                    },1500);
                }
            }
           
            
        }
        

        function desfazCards(){
            lockCard=true;
            setTimeout(()=> {
                primeiraCard.classList.remove("flip");
                segundaCard.classList.remove("flip");
                
                resetCards();
            },1000 );
        }
        (function aleatorio(){
            cards.forEach (card => {
                let rand = Math.floor(Math.random()*16);
                card.style.order=rand;
            })
        })()


        function resetCards(igual = false){
            if(igual){
                primeiraCard.removeEventListener("click",flipCard);
                segundaCard.removeEventListener("click",flipCard);
            }
            [primeiraCard,segundaCard,lockCard]= [null,null, false]
        }


        cards.forEach(card => card.addEventListener("click",flipCard));
        
    }
    function mostrar(){
        var min =  Math.min(...tempos)
        if(tempos.length==0){
            alert("Voce ainda nao terminou")
        }
        else{
        para.innerText += `o menor falor é ${min} `}
    }