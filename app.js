const favMovie = (name, movie) =>
  console.log(`my name is ${name} and my favorite movie is ${movie}`);
favMovie("hojo", "squeakers");

const getFirstName = (name) => {
  const words = name.split(" ");
  console.log(words[0]);
};
getFirstName("PJ Jones");

const getFirstNameConcise = (name) => name.split(" ")[0];
getFirstNameConcise("PJ Jones");

const doMath = (x, y) => {
  console.log(`x^y = ${Math.pow(x, y)}`);
  console.log(`x*y = ${x * y}`);
};
doMath(4, 2);

let arr = ["PJ", "Bham", "Falafel Cafe"];

const logParam = (name, location, favFood) => {
  console.log(`${name} ${location} ${favFood}`);
};
logParam(...arr);

const name = "PJ Jones";

const func = (string) => {
  [...spread] = string.split(', ');
  for (let i = 0; i < spread.length; i++) {
    console.log(...spread[i]);
  }
};
func(name);