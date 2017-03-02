import Bounce from 'bounce.js'

let foldUnfold = new Bounce();

foldUnfold.title = 'Fold & Unfold';

foldUnfold.scale({
  from: { x: 1, y: 1 },
  to: { x: 0.2, y: 1 },
  easing: 'bounce',
  duration: 1000,
  bounces: 4,
  stiffness: 3
}).scale({
  from: { x: 1, y: 1 },
  to: { x: 1, y: 0.2 },
  easing: 'bounce',
  duration: 1000,
  delay: 500,
  bounces: 4,
  stiffness: 3
}).scale({
  from: { x: 1, y: 1 },
  to: { x: 5, y: 1 },
  easing: 'bounce',
  duration: 1000,
  delay: 1000,
  bounces: 4,
  stiffness: 3
}).scale({
  from: { x: 1, y: 1 },
  to: { x: 1, y: 5 },
  easing: 'bounce',
  duration: 500,
  delay: 1500,
  bounces: 4,
  stiffness: 3
});

let jelly = new Bounce();

jelly.title = "Jelly";

jelly.scale({
  from: { x: 1, y: 1 },
  to: { x: 2, y: 1 },
  easing: 'bounce',
  duration: 1000,
  delay: 0,
  bounces: 4,
  stiffness: 1
}).scale({
  from: { x: 1, y: 1 },
  to: { x: 1, y: 2 },
  easing: 'bounce',
  duration: 1000,
  delay: 0,
  bounces: 6,
  stiffness: 1
});

let smack = new Bounce();

smack.title = "Smack";

smack.skew({
  from: { x: 0, y: 0 },
  to: { x: 40, y: 60 },
  easing: 'sway',
  duration: 750,
  delay: 0,
  bounces: 4,
  stiffness: 3
}).scale({
  from: { x: 1, y: 1 },
  to: { x: 2, y: 2 },
  easing: 'bounce',
  duration: 750,
  delay: 0,
  bounces: 4,
  stiffness: 2
});

export default {
  foldUnfold,
  jelly,
  smack
};
