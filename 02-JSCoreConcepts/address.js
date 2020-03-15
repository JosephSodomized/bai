title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

let first = title + ' ' + name + ' ' + surname + '\n' + 'ul. ' + street + '\n' + zip + ' ' + city + '\n' + country.toUpperCase();
let second = `${title} ${name} ${surname}\nul. ${street}\n${zip} ${city}\n${country.toUpperCase()}`;
console.log(first);
console.log(second);
// console.log('dr Mateusz Kubicki \nul. Długa 15\n30-781 Kraków\nPOLAND'); --> nie wiem, czy również o taki zapis chodziło

/*
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
