// document.addEventListener('keydown', function(event)
// {
//   console.log(`${event.key} was pressed`);
// })

// let lasttime =0;
// document.addEventListener('mousemove', function(event)
// {
//   //console.log("mousemovementfired");
//   const now = Date.now();
//   if(now-lasttime > 100)
//   {
//     console.log(event.clientX, event.clientY);
//     lasttime=now;
//   }
// })

const C4 = document.querySelector('#w1');
const Db4 = document.querySelector('#b1');
const D4 = document.querySelector('#w2');
const Eb4 = document.querySelector('#b2');
const E4 = document.querySelector('#w3');
const F4 = document.querySelector('#w4');
const Gb4 = document.querySelector('#b3');
const G4 = document.querySelector('#w5');
const Ab4 = document.querySelector('#b4');
const A4 = document.querySelector('#w6');
const Bb4 = document.querySelector('#b5');
const B4 = document.querySelector('#w7');
const C5 = document.querySelector('#w8');

let currentCount = -1;

const noteArray = [{
  title: 'Titanic: Every night in my Dream',
  note1: 'G GG G FG G FG H J H',
  note2: 'G GG G FG G S...'
}, 
{
  title: 'Twinkle twinkle little star',
  note1: 'SS HH JJ H GG FF DD S',
  note2: ''

},
{
  title: 'Marry had a little Lamb',
  note1: 'F DSD FFF DDD FHH',
  note2: 'F DSD FFF FDD FDS'
}
]

const len = noteArray.length;

const notename = document.getElementById('note-name')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const prevbtn = document.getElementById('prev-btn')
const nextbtn = document.getElementById('next-btn')

const closeGuide = document.getElementById('close-guide');
const titleNote = document.getElementById('title-note');

C4.addEventListener('click',()=>{
  const audio = new Audio('Notes/C4.mp3');
  audio.play();
  C4.classList.add('white-key-active')
  setTimeout(()=> {
    C4.classList.remove('white-key-active')
  }, 100);
})

Db4.addEventListener('click',()=>{
  const audio = new Audio('Notes/Db4.mp3');
  audio.play();
})

D4.addEventListener('click',()=>{
  const audio = new Audio('Notes/D4.mp3');
  audio.play();
  D4.classList.add('white-key-active')
  setTimeout(()=> {
    D4.classList.remove('white-key-active')
  }, 100);
})

Eb4.addEventListener('click',()=>{
  const audio = new Audio('Notes/Eb4.mp3');
  audio.play();
})

E4.addEventListener('click',()=>{
  const audio = new Audio('Notes/E4.mp3');
  audio.play();
  E4.classList.add('white-key-active')
  setTimeout(()=> {
    E4.classList.remove('white-key-active')
  }, 100);
})

F4.addEventListener('click',()=>{
  const audio = new Audio('Notes/F4.mp3');
  audio.play();
  F4.classList.add('white-key-active')
  setTimeout(()=> {
    F4.classList.remove('white-key-active')
  }, 100);
})

Gb4.addEventListener('click',()=>{
  const audio = new Audio('Notes/Gb4.mp3');
  audio.play();
})

G4.addEventListener('click',()=>{
  const audio = new Audio('Notes/G4.mp3');
  audio.play();
  G4.classList.add('white-key-active')
  setTimeout(()=> {
    G4.classList.remove('white-key-active')
  }, 100);
})

Ab4.addEventListener('click',()=>{
  const audio = new Audio('Notes/Ab4.mp3');
  audio.play();
})

A4.addEventListener('click',()=>{
  const audio = new Audio('Notes/A4.mp3');
  audio.play();
  A4.classList.add('white-key-active')
  setTimeout(()=> {
    A4.classList.remove('white-key-active')
  }, 100);
})

Bb4.addEventListener('click',()=>{
  const audio = new Audio('Notes/Bb4.mp3');
  audio.play();
})

B4.addEventListener('click',()=>{
  const audio = new Audio('Notes/B4.mp3');
  audio.play();
  B4.classList.add('white-key-active')
  setTimeout(()=> {
    B4.classList.remove('white-key-active')
  }, 100);
})

C5.addEventListener('click',()=>{
  const audio = new Audio('Notes/C5.mp3');
  audio.play();
  C5.classList.add('white-key-active')
  setTimeout(()=> {
    C5.classList.remove('white-key-active')
  }, 100);
})

document.addEventListener('keydown',(event)=>{
  const Key = event.key;

  if(Key === 's')
  {
    C4.click();
  }
  else if(Key === 'e')
  {
    Db4.click();
  }
  else if(Key === 'd')
  {
    D4.click();
  }
  else if(Key === 'r')
  {
    Eb4.click();
  }
  else if(Key === 'f')
  {
    E4.click();
  }
  else if(Key === 'g')
  {
    F4.click();
  }
  else if(Key === 'y')
  {
    Gb4.click();
  }
  else if(Key === 'h')
  {
    G4.click();
  }
  else if(Key === 'u')
  {
    Ab4.click();
  }
  else if(Key === 'j')
  {
    A4.click();
  }
  else if(Key === 'i')
  {
    Bb4.click();
  }
  else if(Key === 'k')
  {
    B4.click();
  }
  else if(Key === 'l')
  {
    C5.click();
  }


  if(document.getElementById(`${Key}k`))
  {
    document.getElementById(`${Key}k`).classList.add('green-bg');
    setTimeout(()=>{
    document.getElementById(`${Key}k`).classList.remove('green-bg');
    }, 100)
  }
  
})





