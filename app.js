//object literal
var salon={
    name:"The Fashion Pet",
    address:{
        street:"123 Main Street",
        city:"San Diego",
        state:"California",
        zip:"90216"
    },
    hours:{
        opening:"9:00 am",
        closing:"9:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"male",
            breed:"Great Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:10,
            gender:"male",
            breed:"Great Dane",
            service:"Nails cut",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Archie",
            age:1,
            gender:"male",
            breed:"Goldendoodle",
            service:"Grooming",
            owner:"Jake",
            phone:"330-703-7899"
        }
    ]
}

// name, age, gender, breed, service, owner, phone
function displayInfo(){
    document.getElementById("info").innerHTML=`
    <h3> Welcome to ${salon.name}</h3>
    <p>${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip}</p>
    `;
}
displayInfo();

function displayPetInfo(){
    document.getElementById("petsInfo").innerHTML=`
    <p> There are currently ${salon.pets.length} pets registered with us.</p>
    `
}
displayPetInfo();

function displayPetName(){
    document.getElementById("petName").innerHTML+=``;
    for (let i=0; i < salon.pets.length; i++){
    // console.log(salon.pets[i].name);
    document.getElementById("petName").innerHTML+=`
    <p>${salon.pets[i].name}</p>
    `;
    }
    
}
displayPetName();