function todaysDate(){
    const currentDate = new Date(); 
    const formattedDate = currentDate.toLocaleDateString(undefined, {
        weekday: 'long', 
        month: 'long',   
        day: 'numeric',   
        year: 'numeric'  
      });
    const formattedTime = currentDate.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true     
      });

      return `Todays date is ${formattedDate} ${formattedTime} `; 
}

function welcomePerson(name,mood){
    return `Hello ${name} the Mystic Ant welcomes you. We're glad you are doing ${mood}!`;
}

function getShape(num){
    const shapes = ['circle', 'square', 'triangle', 'rectangle', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'];
    return shapes[num];
}
function antFunFacts() {
    const facts = [
        "Ants can lift 20 times their own body weight.",
        "There are over 12,000 species of ants worldwide.",
        "Ants have two stomachs, one for their own food and one for food to be shared with others."
    ];
    return facts[Math.floor(Math.random() * facts.length)];
}

function typesOfAnts() {
    const antTypes = [
        "Carpenter Ant",
        "Fire Ant",
        "Leafcutter Ant",
        "Army Ant",
        "Bullet Ant"
    ];
    return antTypes[Math.floor(Math.random() * antTypes.length)];
}

function similarityToAnts() {
    const similarity = [
        "Just like ant you are strong",
         "Keep building what you want just like an ant", 
         "You may be small but you are strong like an ant",
         "Sometimes all we need are people around us like an ant colony.",
         "Don't piss off the queen in your life"
    ];
    return similarity[Math.floor(Math.random() * similarity.length)];
}

function howToFindAnts() {
const waysToFindAnts = [
    "look for them in places where food is available", "look in kitchens or picnic areas.",
    "go looking near their nests, which are often located in soil" , "go look under wood, or under rocks."
];

return `To find ants ${waysToFindAnts[Math.floor(Math.random() * waysToFindAnts.length)]}`;
}