
// object destructuring
const objectPerson = {
    name: 'Ernesto',
    address: {
        street: 'Lorenzana',
        state: 'jalisco'
    },
    lastname: 'Martinez',
    age: 35
};

console.log(objectPerson.name);
console.log(objectPerson.address.street);

// destructuring

const { address } = objectPerson;

console.log(address.street);
console.log(address.state);


// array destructuring

const arrNames = [
    'Ernesto',
    'Eliezer',
    'William',
    'Martin',
    'Fernando',
    'Carlos',
    'Angel'
  ];

const [ firstName, secondName, ...rest ]  = arrNames;

console.log(firstName);
console.log(secondName);
console.log(rest);

console.log(arrNames[0]);
console.log(arrNames[1]);