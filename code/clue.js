// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
// const mrGreen = {
//   firstName: "Jacob",
//   lastName: "Green",
//   color: "green",
//   description: "He has a lot of connections",
//   age: 45,
//   image: "assets/green.png",
//   occupation: "Entrepreneur"
// }



 function Suspect(firstName, lastName, color, description, age, occupation, image) {
  this.firstName = firstName;
  this.lastName  = lastName;
  this.color = color;
  this.description = description;
  this.age = age;
  this.occupation = occupation;
  this.image = image;
}

var mrGreen = new Suspect("Jacob", "Green", "green", "He has a lot of connections", 45, "Entrepreneur", "assets/green.png" );
var profPlum = new Suspect("Victor", "Plum", "purple", "He is a quick-witted", 40, "Professor", "assets/plum.png" );
var missScarlet = new Suspect("Cassandra", "Scarlet", "red", "She is young and attractive", 30, "Chef", "assets/scarlet.png"  );
var mrsPeacock = new Suspect("Eleanor", "Peacock", "blue", "She nearly always maintains her dignity ", 55, "Retired", "assets/peacock.png"  );
var mrMustard = new Suspect("Colonel ", "Mustard", "yellow", "He is a dangerous military man", 60, "Military man", "assets/mustard.png"  );
var mrsWhite = new Suspect("Mrs", "White", "white", "He does not have a lot of connections", 35, "Servant", "assets/mustard.png"  );



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.
// //const rope = {
//   name: "rope",
//  weight: 10
// }

function Weapon(name, weight) {
  this.name = name;
  this.weight= weight;
} 

var rope = new Weapon("Rope",0.5);
var knife = new Weapon("Knife",0.3);
var candlestick = new Weapon("Candlestick",0.9);
var dumbbell = new Weapon("Dumbbell",10);
var poison = new Weapon("Poison",0.01);
var axe = new Weapon("Axe",3);
var bat = new Weapon("Bat",1.2);
var trophy = new Weapon("Trophy",3);
var pistol = new Weapon("Pistol",0.8);


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]; 
console.log(suspects)

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison, 
  axe, 
  bat,
  trophy,
  pistol
];
console.log(weapons)

const rooms = [
  "Dinning room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ball room",
  "Hall",
  "Spa",
  "Living room",
  "Observatory",
  "Theatre",
  "Guesthouse",
  "Patio"
];
console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

var suspectCard = randomSelector(suspects)
console.log(suspectCard)

var roomCard = randomSelector(rooms)
console.log(roomCard)

var weaponCard = randomSelector(weapons)
console.log(weaponCard)

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.


// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
//const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
//   mystery.killer = randomSelector(suspects)

//   // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
//   const theKiller = document.getElementById("killer")
//   const theKillerName = document.getElementById("killerName")

//   theKiller.style.background = mystery.killer.color
//   theKillerName.innerHTML =
//     mystery.killer.firstName + " " + mystery.killer.lastName
// }

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
