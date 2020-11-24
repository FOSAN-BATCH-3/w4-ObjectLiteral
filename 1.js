//  <!-- 1. Logic Challenge - Change Me!

//  Problem

// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

// 1. Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// 2. John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }



// ```javascript
// function changeMe(arr) {
//     for(i=0;i < arr.length; i++)

//  let firstName= 'firstName :'
//  let lastName= 'lastName :'
//  let gender='gender :'
//  let age='age :'

//  firstName +=(arr[i] [0])
//  lastName +=(arr[i] [1])
//  gender +=(arr[i] [2])
//  age +=(arr[i] [3])
 
//  console.log(changeMe)
// }
function changeMe(arr) {
    let profil = [];
    let nomor= 1;
    for (let i = 0; i < arr.length; i++) {
        let isi = {};
        for (let j = 0; j < arr[0].length; j++) {
            if (j==0) {
                isi.firstName = arr[i][j];
            }
            else if (j==1) {
                isi.lastName = arr[i][j];
            }
            else if (j==2) {
                isi.gender = arr[i][j]
            }
            else if (j==3) {
                isi.age = 2020-arr[i][j]
                if (arr[i][j]===undefined) {
                    isi.age = "Invalid Birth Year";
                }
            }
        }
        profil.push(nomor,isi);
        nomor++;
    }
    console.log(profil);
  }


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); 



