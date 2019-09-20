let yummyThings = ['pizza', 'gelato', 'sushi', 'cheeseburger'];

let greatThings = ['swimming', 'sunsets', ...yummyThings, 'New Orleans'];

let copyOfGreatThings = [...greatThings];
copyOfGreatThings.push('foo');

console.log(greatThings);
console.log(copyOfGreatThings);


let person = {
    name: 'Trung Ta',
    age: 24,
    job: 'Dev'
};

for (let [prop, value] of Object.entries(person)) {
    console.log(prop, value);
}
