function Student(studentNummer, klas){
    let id = studentNummer;
    let klasnaam = klas;
}

let alleStudenten = [];

let Mike = new Student(30079, 'MD2Aa');
let Bob = new Student(29198, 'MD2Aa');
let Firas = new Student(29003, 'Md2Aa');
let Justin = new Student(28454, 'MD2Aa');
let Ruben = new Student(28644, 'MD2Aa');
let Fabian = new Student(19959, 'MD2Ab');

let studentenCompleet = alleStudenten.push(Mike, Bob, Firas, Justin, Ruben, Fabian );

localStorage.setItem('studentenCompleet', studentenCompleet);
const studenten = localStorage.getItem(studentenCompleet);

console.log(studenten);


/*
Mike Yang

Bob van Berckel

Firas Soekhai

Justin Rodriquez Montoya

Ruben Vuurman
 */