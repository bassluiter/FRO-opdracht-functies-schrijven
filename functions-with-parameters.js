/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

// function add(a, b) {
//   return a + b;
// }
//
// const result = add(1, 4);
// console.log(result);

const add = (a, b)=> a + b;

result_1 = add(1, 4);
result_2 = add(2, 5);
console.log(result_1)
console.log(result_2)
/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter(name) {
    return `hoi ${name}!`;
}
answer_1 = greeter("Jan");
answer_2 = greeter("Kees");
console.log(answer_1);
console.log(answer_2);

/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds(minutes) {
    return minutes * 60;
}
console.log(minutesToSeconds(2));
console.log(minutesToSeconds(3));
console.log(minutesToSeconds(23));

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge(string1, string2) {
    return (string1.trim() + string2.trim()).toString().toLowerCase();
}
console.log (merge("Abra", " Cadabra"));
console.log (merge("zoet", " sappig"));


/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(age) {
    return `Jouw hond is ${age * 7} jaar oud in mensenjaren.`;
}
console.log(calculateDogYears(6));
console.log(calculateDogYears(2));

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper(word, character) {
    word = word.trim()
    character = character.trim()
    return character + word + character
}
output_1 = wrapper("bril", "*");
output_2 = wrapper("beep", "_");
output_3 = wrapper("kaas", "Q");

console.log(output_1);
console.log(output_2);
console.log(output_3);

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."

const personalInformation = [
    { firstName: 'Jan', lastName: 'Jansen', profession: 'docent'},
    { firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}
]
function createDetailString(firstName, lastName, profession) {
    return `Het beroep van ${firstName} ${lastName} is ${profession}.`;
}
for (let i = 0; i < personalInformation.length; i++) {

    const firstName = personalInformation[i].firstName;
    const lastName = personalInformation[i].lastName;
    const profession = personalInformation[i].profession;

    console.log(createDetailString(firstName, lastName, profession));
}