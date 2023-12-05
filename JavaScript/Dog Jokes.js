var facts = [
    'Q: What kind of dog chases anything red?      A: A Bulldog.', 'Q: What do you call a frozen dog?      A: A pupsicle.', 'Q: What kind of dog does Dracula have?      A: A bloodhound!', 'Q: Why did the dog cross the road?      A: To get to the "barking" lot!', 'Q: What do you call a dog magician?      A: A labracadabrador.', 'Q: What do you call a large dog that meditates?      A: Aware wolf.', 'Q: Why do dogs like conjunctions?      A: They just love buts!'
]

function newFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('bottom').innerHTML = facts[randomNumber];

}