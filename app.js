const screenWidth = window.innerWidth;
const svgWidth = document.getElementById('reindeer').offsetWidth;
const distance = screenWidth - svgWidth

// MOVING FORWARDS
gsap.set('svg', { x: 0 })

function movingForward() {
  var tl = gsap.timeline({
    repeat: 0,
    defaults: { duration: 15, ease: 'none' },
  });
  tl.to("svg", {x: distance});
}

// BOUNCING CYCLE
gsap.set('svg', {
  y: -2
})

function bounce() {
  //Anything in the defaults object of a timeline gets inherited by its child animations when they get created, so if you find yourself setting the same ease or duration (or any value) over and over again, this can help make your code more concise
  var tl = gsap.timeline({
    repeat: 21,
    defaults: { duration: 0.36 },
  });
  //child tweens will inherit the repeat and the duration from the parent timeline!
  tl.to('svg', {
      y: 2,
    })
    .to('svg', {
      y: -2,
    })
}

// ENTLERS CYCLE
gsap.set('#LEntler', {
  transformOrigin: "50% 100%",
  rotation: 5
})

gsap.set('#REntler', {
  transformOrigin: "50% 100%",
  rotation: -5
})

function rotateEntlers() {
  var tl = gsap.timeline({
    repeat: 4,
    defaults: {  duration: 1.87 }
  })
  tl.add('entlers')
    .to('#LEntler', { rotation: -5})
    .to('#REntler', { rotation: 5}, 'entlers') // make sure both entlers start at the same time
    .to('#LEntler', { rotation: 5}, 'entlers+=1.87')
    .to('#REntler', { rotation: -5}, 'entlers+=1.87')
}

// WALKING CYCLE
gsap.set('#LFLeg', {
  transformOrigin: "50% 0%",
  rotation: 10
})

gsap.set('#RFLeg', {
  transformOrigin: "50% 0%",
  rotation: 10
})

gsap.set('#LBLeg', {
  transformOrigin: "50% 0%",
  rotation: -10
})

gsap.set('#RBLeg', {
  transformOrigin: "50% 0%",
  rotation: -10
})

function walking() {
  var tl = gsap.timeline({
    repeat: 11,
    defaults: { duration: 0.68 }
  })
  tl.add('legs')
    .to('#LFLeg', {rotation: -10})
    .to('#RFLeg', {rotation: -10}, 'legs')
    .to('#LBLeg', {rotation: 10}, 'legs')
    .to('#RBLeg', {rotation: 10}, 'legs')
    .to('#LFLeg', {rotation: 10}, 'legs+=0.68')
    .to('#RFLeg', {rotation: 10}, 'legs+=0.68')
    .to('#LBLeg', {rotation: -10}, 'legs+=0.68')
    .to('#RBLeg', {rotation: -10}, 'legs+=0.68')
}

// WINK
gsap.set('#REye', {
  transformOrigin: "50% 50%",
  scaleY: 1
})

function winking() {
  var tl = gsap.timeline({
    repeat: 1,
    repeatDelay: 2,
    defaults: { duration: 0.7 }
  })
  tl.to('#REye', { scaleY : 0}, 3)
    .to('#REye', { scaleY : 1})
}

// TAIL MOVES
gsap.set('#Tail', {
  transformOrigin: "100% 20%",
  rotation: 0,
})

function moveTail() {
  var tl = gsap.timeline({
    repeat: 1,
    repeatDelay: 2,
    defaults: { duration: 0.7 }
  })
  tl.to('#Tail', { rotation: 40 }, 3)
    .to('#Tail', { rotation: 0 })
}



// PLAY ANIMATION ON LOAD
window.onload = () => {
  movingForward();
  bounce();
  rotateEntlers();
  walking();
  winking();
  moveTail();
};