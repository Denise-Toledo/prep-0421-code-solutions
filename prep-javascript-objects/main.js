var person = {
  firstName: 'Denise',
  lastName: 'Toledo',
  hobby: 'playing board games'
};
console.log(person);

var fullName = 'Denise Toledo';
console.log('The person\'s name is:', fullName);

person.job = 'Unemployed';
console.log('The person \'s current job is:', person.job);

person.previousJob = 'Scheduler';
console.log('The person\'s previoous job was:', person.previousJob);

console.log('The complete person object:', person);

var myCar = {
  make: 'Mazda',
  model: 'Mazda 3',
  year: '2010'
};
console.log('Car information:', myCar);

myCar['owner'] = 'Denise Toledo';

myCar['complete'] = 'My name is Denise Toledo and I drive a 2010 Mazda Mazda 3';
console.log(myCar['complete']);

myCar['color'] = 'silver';
console.log('My full car info:', myCar);
