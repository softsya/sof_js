const myArr = [
  { 
    name: 'Sofia',
    age: 25,
    favBand: 'Radiohead'
  },
  {
    name: 'Nazar',
    age: 48,
    favBand: 'Gipsy Kings'
  },
  {
    name: 'Natalia',
    age: 48,
    favBand: 'Kurbasy'
  }
];

const getNames = () => {
  const ourNames = [];
  for (let i = 0; i < myArr.length; i++) {
    ourNames.push(myArr[i].name);
  }
  return ourNames;
};
// console.log(getNames());

const getBands = () => {
  const ourBands = [];
  for (const el of myArr) {
    ourBands.push(el.favBand);
  }
  return ourBands.sort((a, b) => a.localeCompare(b));
};
// console.log(getBands());

const wasBorn = () => {
  const yearsOfBirth = [];
  const currentYear = new Date().getFullYear();
  for (const el of myArr) {
    yearsOfBirth.push(currentYear - el.age);
  }
  return yearsOfBirth;
};

// console.log(wasBorn());

const averageAge = () => {
  const ourAges = myArr.map(obj => obj.age);
  const middleAge = ourAges.reduce( (prev, cur) => (prev + cur), 0 ) / ourAges.length;
  return middleAge;
};

console.log(averageAge());