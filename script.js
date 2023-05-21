/////////////////////loops///////////////////////////

//For Loop

var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
console.log(numbers[i])
}



//For in

const population = {
male: 4,
female: 93,
others: 10
};
for (const key in population) {
if (population.hasOwnProperty(key)) {
console.log(`${key}: ${population[key]}`);
}
}



//For Each

const populations = {
male: 4,
female: 93,
others: 10
};
let totalPopulation = 0;
let genders = Object.keys(populations);
genders.forEach((gender) => {
totalPopulation += populations[gender];
});  
console.log(totalPopulation);



//For of

const populationss = {
male: 4,
female: 93,
others: 10
};
let populationArr = Object.entries(populationss);
for (array of populationArr){
console.log(array);
}  
console.log(populationArr);





////////////////resume using JSON////////////

let myResume={
"basics": {
"name": "GOKUL KARTHICK S",
"email": "gokulkathick4582@gamil.com",
"phone": 7339552770,
"degree": "B.Sc-INFORMATION TECHNOLOGY",
"location": {
"address": "1/54.North Mahakashmi Kovil Street, Pappampatti",
"pinCode": 641016,
"city": "Coimabatore",
"state": "Tamilnadu",
"country": "India"
},
"profiles": [
{
"github":"https://github.com/gokul-devp"
}
]
},
"education": [
{
"college": "sri jayendra saraswathi maha vidhyalaya college of arts and science",
"department": "b.Sc- IT",
"studyType": "fulltime",
"batch start year": 2017,
"batch end year": 2020
}
],
"skills": [
{
"name": "HTML, css, Javascript",
"level": "beginner",
}
],
"languages": [
{
"language": "Tamil, English",
}
],
"interests": [
{
"name": "travelling",
}
]
}
console.log(myResume);