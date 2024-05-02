if ("0") {
    alert( 'Hello' );
  }


  let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
//   or
let results = (a + b < 4) ? 'Below' : 'Over';



let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
//   or
let messages = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';