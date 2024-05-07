//FOR LOOP:-

//   using for loop in names

let names=['hania','maham','hiba','hadi','mahnoor','zuni']

for(let i = 0 ; i < names.length ; i++){
    console.log('my friend is '+ names [i] +  (i+1));
}

 //using for loop in multiplication


 for(let i = 1 ; i <= 10 ; i++){

     console.log(`outer loog value is: + ${i}` );

     for(let k = 1 ; k <= 5 ; k++){

         console.log(i + '*' + k + '=' + i * k)

    }

 }

//  using for loog in divid and the result is in decimal

for(let i = 1 ; i <= 10 ; i++){

    console.log(`outer loog value is: + ${i}` );

    for(let k = 1 ; k <= 5 ; k++){

        console.log(i + '/' + k + '=' + i / k)

   }

}

// using for loop with break

for (let i = 1 ; i <= 20 ; i ++){
    if ( i == 7){
    console.log(`7 is the lucky number`)
    break
    }
    console.log(`your printed value is ${i}`)
}

//using for loop with continue

for (let i = 1 ; i <= 20 ; i ++){
    if ( i == 7){
    console.log(`7 is the lucky number`)
    continue
    }
    console.log(`your printed value is ${i}`)
}
