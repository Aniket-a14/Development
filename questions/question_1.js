// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let names = [
    "Alice Johnson",
    "Michael Smith",
    "Sophia Williams",
    "James Brown",
    "Olivia Davis",
    "Liam Miller",
    "Emma Wilson",
    "Noah Anderson",
    "Ava Thomas",
    "Ethan Moore"
];
   
let houses=[]

for (const element of names) {
    if(element.length < 6){
        houses.push("Gryffindor")
    }else if(element.length < 8){
        houses.push("Hufflepuff")
    }else if(element.length < 12){
        houses.push("Ravenclaw")
    }else{
        houses.push("Slytherin")
    }
}

console.log(houses)