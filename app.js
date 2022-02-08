const favMovie = (name, movie) => console.log(`my name is ${name} and my favorite movie is ${movie}`);
favMovie('hojo', 'squeakers');

const getFirstName = (name) => {
  const words = name.split(' ');
  console.log(words[0]);
}
getFirstName('PJ Jones');

const getFirstNameConcise = name => name;
getFirstNameConcise();