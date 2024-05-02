let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);



let result = condition ? value1 : value2;
alert(result)


let accessAlloweds = (age > 18) ? true : false;
alert(accessAlloweds)

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllow = age > 18 ? true : false;
alert(accessAllow)