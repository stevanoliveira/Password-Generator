
let myImpAll = document.getElementById('allCharacters')
let btnCopyAll = document.getElementById('btn-all-characters')

const myImpLetters = document.getElementById('onlyLetters')
const btnCopyLetters = document.getElementById('btn-letters-only')

const myImpNumb = document.getElementById('onlyNumbers')
const btnCopyNumb = document.getElementById('btn-numbers-only')

const myImpLetAndNumb = document.getElementById('lettersAndNumbers')
const btnCopyLetAndNumb = document.getElementById('btn-letters-and-numbers')




function getResultAll() {
  if (myImpAll === "none") {
    alert('Please, generate the passwords first!');
  } else {
    myImpAll.select()  
    document.execCommand('Copy')
    btnCopyAll.textContent = 'Password copied! 👍'
  }
}

btnCopyLetters.onclick = function () {    
  myImpLetters.select()  
  document.execCommand('Copy')
  btnCopyLetters.textContent = 'Password copied! 👍'
}

btnCopyNumb.onclick = function () {    
  myImpNumb.select()  
  document.execCommand('Copy')
  btnCopyNumb.textContent = 'Password copied! 👍'
}

btnCopyLetAndNumb.onclick = function () {    
  myImpLetAndNumb.select()  
  document.execCommand('Copy')
  btnCopyLetAndNumb.textContent = 'Password copied! 👍'
}

