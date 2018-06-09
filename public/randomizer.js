var text_c = [
  'Buy pizza for your friend',
  'Talk to a stranger',
  'Spend an hour with your pet',
  'Hug the person next to you',
  'Text song lyrics to your crush',
  'Go out and sing any Ed Sheeran\'s song',
  'Draw a portrait of yourself',
  'Don\'t eat any sugar for 6 hours',
  'HARRY POTTER MARATHON!!!!!',
  'Imitiate any youtube video',
  'Imitiate Trump *hands gestures*',
  'Sing Star Wars parody',
  'Define your name on urban dict',
  'Write a song about Danial Radcliff'
];

function getcard() {
  var random = Math.floor(Math.random()*(text_c.length));
  document.getElementById('hl').style.display = 'none';
  document.getElementById('card').style.display = 'block';
  document.getElementById('cardText').innerHTML = text_c[random] + '.';
};
