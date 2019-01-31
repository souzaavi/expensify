// const person = {
//     name: 'Kelvin',
//     age: 26,
//     location: {
//         city: 'Malavalli',
//         temp: 92
//     }
// };

// const {name: fname = 'Ananymous',age} = person;
// console.log(`${fname} is ${age}.`);

// const {city,temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); //Self-Published def
// const address = ['1229 S Juniper Street','Philadelphia','Pennylvania','19147'];

// const [,,state='Karnataka'] = address;

// console.log(state);

const item = ['Coffee (hot)', '$2.00' , '$2.50','$2.75'];
const [itemType,,mcost] = item
console.log(`A medium ${itemType} costs ${mcost}`)
