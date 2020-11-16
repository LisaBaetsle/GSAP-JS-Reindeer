// MOVING FORWARDS
gsap.set('svg', { x: 0 })

function movingForward() {
  gsap.to("svg", {duration: 20, x: 1000});
}

// BOUNCING CYCLE
gsap.set('svg', {
  y: -2
})

function bounce() {
  //Anything in the defaults object of a timeline gets inherited by its child animations when they get created, so if you find yourself setting the same ease or duration (or any value) over and over again, this can help make your code more concise
  var tl = gsap.timeline({
    repeat: -1,
    defaults: { duration: 0.35 }
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
    repeat: -1,
    defaults: {  duration: 2 }
  })
  tl.add('entlers')
    .to('#LEntler', { rotation: -5})
    .to('#REntler', { rotation: 5}, 'entlers') // make sure both entlers start at the same time
    .to('#LEntler', { rotation: 5}, 'entlers+=2')
    .to('#REntler', { rotation: -5}, 'entlers+=2')
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
    repeat: -1,
    defaults: { duration: 0.7 }
  })
  tl.add('legs')
    .to('#LFLeg', {rotation: -10})
    .to('#RFLeg', {rotation: -10}, 'legs')
    .to('#LBLeg', {rotation: 10}, 'legs')
    .to('#RBLeg', {rotation: 10}, 'legs')
    .to('#LFLeg', {rotation: 10}, 'legs+=0.7')
    .to('#RFLeg', {rotation: 10}, 'legs+=0.7')
    .to('#LBLeg', {rotation: -10}, 'legs+=0.7')
    .to('#RBLeg', {rotation: -10}, 'legs+=0.7')
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