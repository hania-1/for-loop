//FOR LOOP:-
//   using for loop in names
var names = ['hania', 'maham', 'hiba', 'hadi', 'mahnoor', 'zuni'];
for (var i = 0; i < names.length; i++) {
    console.log('my friend is ' + names[i] + (i + 1));
}
//using for loop in multiplication
for (var i = 1; i <= 10; i++) {
    console.log("outer loog value is: + ".concat(i));
    for (var k = 1; k <= 5; k++) {
        console.log(i + '*' + k + '=' + i * k);
    }
}
//  using for loog in divid and the result is in decimal
for (var i = 1; i <= 10; i++) {
    console.log("outer loog value is: + ".concat(i));
    for (var k = 1; k <= 5; k++) {
        console.log(i + '/' + k + '=' + i / k);
    }
}
// using for loop with break
for (var i = 1; i <= 20; i++) {
    if (i == 7) {
        console.log("7 is the lucky number");
        break;
    }
    console.log("your printed value is ".concat(i));
}
//using for loop with continue
for (var i = 1; i <= 20; i++) {
    if (i == 7) {
        console.log("7 is the lucky number");
        continue;
    }
    console.log("your printed value is ".concat(i));
}
