const messages = [
  'Hello World!',
  'My Name is Vista',
  'I love Javascript',
]

const featureCards = document.getElementsByClassName('feature-card');

// for (const featureCard of featureCards) {
//   const paragraph = document.createElement('p');

//   const text = document.createTextNode('Hello, my name is Valdryan');
//   paragraph.append(text);

//   featureCard.append(paragraph);
// }

for (let i = 0; i < messages.length; i++) {
  const paragraph = document.createElement('p');

  const text = document.createTextNode(messages[i]);
  paragraph.append(text);

  featureCards[i].append(paragraph);
}