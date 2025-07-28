// enum ka full form hai enumeration, aur iska use hota hai named constants banane ke liye.
//Jab tumhare paas kuch fixed values hoti hain, jaise status, roles, days, etc., tab enum use hota hai taake unhe asaani se manage kar sako.

/* BASIC SYNTAX
enum EnumName {
  VALUE1,
  VALUE2,
  VALUE3,
}

*/

enum weatherConditions {
  Sunny = "Sunny",
  Rainy = "Rainy",
  Cloudy = "Cloudy",
}
console.log(weatherConditions.Sunny); // Output: Sunny

const currentWeather = weatherConditions.Rainy;
console.log(`The current weaather is ${currentWeather}`); // Output: The current weaather is Rainy