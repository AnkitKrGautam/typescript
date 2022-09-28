export default function play() {
  var name = "Ankit";
  var age = 25;

  function logPersonInfo(personName: String, personAge: number) {
    const info = `person name ${personName} and age is ${personAge}`;
    console.log(info);
    return info;
  }
  logPersonInfo(name, age);
  logPersonInfo("ankit", 15);
}
