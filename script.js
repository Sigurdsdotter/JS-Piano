const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

/*
// Smiley button that change backgroundcolor
var count = 1;
const smileyButton = document.querySelector(".smiley-button");
smileyButton.addEventListener("click", function () { 
  count++;
  if (count%2==0){
    document.body.style.backgroundColor = "#b80d0d";
    smileyButton onclick=this.smileyButton () {
      this.smileyButton = style.backgroundColor "#143F6B";
    }
  }
  else { 
    document.body.style.backgroundColor = "#143F6B";
  }
  
  
  /*
  if (smileyButton) {
    face.style.backgroundColor = "#143F6B";
  }
  */

  //if (smileyButton.repeat) return
  
  /*alert("Smiley-knappen klickades!");*/
});*/

var count = 1;
const smileyButton = document.querySelector(".smiley-button");
smileyButton.addEventListener("click", function () {
  count++;
  if (count % 2 == 0) {
    document.body.style.backgroundColor = "#b80d0d"; // Ändra bakgrundsfärgen på hela sidan till röd
    smileyButton.style.backgroundColor = "#143F6B";   // Ändra knappens bakgrundsfärg till blå
  } else {
    document.body.style.backgroundColor = "#143F6B";  // Återställ bakgrundsfärgen på hela sidan till blå
    smileyButton.style.backgroundColor = "";           // Återställ knappens bakgrundsfärg
  }
});
