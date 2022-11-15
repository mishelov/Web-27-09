

function sayHello(name, age) {
    
    let userName = name;
    if (!userName) {
        userName = prompt('What is your name?');
    }
    if (userName === 'Angel' || userName === 'Hoi') {
        alert('Happy Name Day!');
    } else if (userName === 'Pesho') {
        alert('Hey Boss');
    } else {
        alert('Hi, ' + userName + '' + age + ' y.o.');
    }

}

sayHello();
