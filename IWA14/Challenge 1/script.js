firstName = 'John';
age = 35;
clientHobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

const hobby = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${clientHobby}!`)
}

hobby()