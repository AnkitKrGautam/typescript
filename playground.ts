// type aliases
// to describe function types
// type Person = { //both custom types and interface are same only a little difference
//     name: string,
//     age: number
// }

// TS recommend to use Interface over Types when possible


//Describe data stucture in more natural way 
//Describe objects
//Shipment, Orders

type Data = string;

interface Person {   
    name: Data,
    age: number
}

export default function play() {
  var name = "Ankit";
  var age = 25;

  const person: Person = {
    name: "Lakshman",
    age: 38
  }

  function logPersonInfo(personName: String, personAge: number) {
    const info = `person name ${personName} and age is ${personAge}`;
    console.log(info);
    return info;
  }
  logPersonInfo(name, age);
  
  function logPersonInfo2(person: Person) {
    const info = `person name ${person.name} and age is ${person.age}`;
    console.log(info);
    return info;
  }
  logPersonInfo2(person)
}
