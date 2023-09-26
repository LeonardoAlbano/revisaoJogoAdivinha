const randomnumber = Math.round(Math.random() * 10)
let xAttempts = 1



function quandoClicar(event) {
    event.preventDefault() //não faça o padrão desse evento

    const inputNumber = document.querySelector("#inputNumber")
   
    if(Number(inputNumber.value) == randomnumber){
        document.querySelector(".screenOne").classList.add("hidden")
        document.querySelector(".screenTwo").classList.remove("hidden")
    
        document.querySelector(".screenTwo h2").innerText = `acertou em ${xAttempts} tentativas`
           
    }

    inputNumber.value = "" //apagar o numero e digitar de novo
    xAttempts++
}

//variaveis
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")



// Eventos 
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


// cara que vai reagir ao evento (função callback)
btnTry.addEventListener('click', quandoClicar)
btnReset.addEventListener('click', function () {
    screenOne.classList.remove("hidden")
    screenTwo.classList.add("hidden")
    xAttempts = 1
})