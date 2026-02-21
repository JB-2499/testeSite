const person = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    hobbies: ['futebol', 'desenhar', 'dirigir'],
};

const {name, lastName, age, hobbies } = person;

console.log(hobbies);

hobbies[1] = 'pintar';

console.log(`O hobbie \"desenhar\" foi substituído por ${hobbies[1]}.`);
console.log(`Atributos ${name}, ${lastName}, ${age}, ${hobbies}`);