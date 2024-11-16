function getWords(type) {
  let words = [
    {type: 'ADJECTIVE', value: 'big'},
    {type: 'ADJECTIVE', value: 'purple'},
    {type: 'ADJECTIVE', value: 'new'},
    {type: 'ADJECTIVE', value: 'interesting'},
    {type: 'ADJECTIVE', value: 'curious'},
    {type: 'ADJECTIVE', value: 'happy'},
    {type: 'ADJECTIVE', value: 'busy'},
    {type: 'ADJECTIVE', value: 'tiny'},
    {type: 'NOUN', value: 'umbrella'},
    {type: 'NOUN', value: 'knee'},
    {type: 'NOUN', value: 'banana'},
    {type: 'NOUN', value: 'platypus'},
    {type: 'NOUN', value: 'cat'},
    {type: 'NOUN', value: 'mouse'},
    {type: 'NOUN', value: 'house'},
    {type: 'VERB', value: 'impressed'},
    {type: 'VERB', value: 'honoured'},
    {type: 'VERB', value: 'saw'},
    {type: 'VERB', value: 'ate'},
    {type: 'VERB', value: 'surprised'},
    {type: 'VERB', value: 'annoyed'},
    {type: 'VERB', value: 'touched'},
    {type: 'VERB', value: 'understood'},
    {type: 'VERB', value: 'taught'},
  ];
  return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
}

function randomInt(n) {
  return Math.floor(Math.random() * n);
}

function randomMember(arr) {
  return arr[randomInt(arr.length)];
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('adjective00').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('ADJECTIVE'));
  });

  document.getElementById('noun0').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('NOUN'));
  });

  document.getElementById('noun1').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('NOUN'));
  });

  document.getElementById('verb').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('VERB'));
  });

  document.getElementById('adjective').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('ADJECTIVE'));
  });

  document.getElementById('noun2').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('NOUN'));
  });
});
