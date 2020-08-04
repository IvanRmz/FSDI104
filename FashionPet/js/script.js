console.log("Executed!...");

// object literal for the salon

const salon = {
    name: "The Fashion Pet",
    phone: "555-555-555",
    address:{
        city:"Tijuana",
        av:"Lago",
        number:"1234"
    },
    pets:[]
}

console.log(salon);
let {name,phone,address:{city,av,number},pets} = salon;
console.log(city);

document.getElementById("info").innerHTML = `
<p>
    ${name}, 
    <b>${city}, ${av} ${number}</b>
    <br>
    ${phone}
</p>
`;



// object constructor for the pets

class Pet {
    constructor(name,age,type,breed,gender,service,ownwesName,contactPhone){
        this.name = name;
        this.age = age;
        this.type = type;
        this.brees = breed;
        this.gender = gender;
        this.service = service;
        this.ownwesName = ownwesName;
        this.contactPhone = contactPhone;
    }
}

const scooby = new Pet("Scooby",30,"Dog","Dane","Male","Full Service","Shaggy","555-555-556");
console.log(scooby);
const scrapy = new Pet("Scrapy",20,"Dog","Dane","Male","Nails cut","Shaggy","555-555-556");
const beethoven = new Pet("Beethoven",40,"Dog","St. Bernard","Male","Shower","Newton","555-555-557");
const slinky = new Pet("Slinky ",80,"Dog","Dachshund","Male","Shower","Andy","555-555-558");

//add pets to the array

salon.pets.push(scooby);
salon.pets.push(scrapy);
salon.pets.push(beethoven);
salon.pets.push(slinky);

console.log(`Total of pets ${pets.length}`)
console.log("Pets:")
pets.forEach(pet=>console.log(`> ${pet.name}`));