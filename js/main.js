// 1. Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin


// let userNumber = prompt("Iltimos sonni kiriting");
// let sum = 0;
// const numberTotal = (userNumber, sum) => {

//     let splNum = userNumber.toString().split("")
//     for(let i = 0; i < splNum.length; i++){
//         sum += +splNum[i]
//     }

//     console.log(sum)
// }

// numberTotal(userNumber, sum)





// 2. Ixtiyoriy arrow function yarating va uning parametriga bir nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang: masalan: [1, 22, 3] yigindisi: 26 result=> [2,6] 


// const totalArrElement = () => {
//     let arr = [2, 4, 2, 3, 8, 89, 65, 44, 32]
//     let sum = arr.reduce((a , b) => a + b , 0)
//     console.log("Array ichidagi sonlar yig'indisi " + sum)
//     let newArr = Array.from(String(sum), Number)
//     console.log(newArr)
// }

// totalArrElement()






// 3.Promt yordamida ixtiyoriy son kiritilsin va o'sha sonning lvadradi palindrome yoki palindrome emasligi topilsin algorithm function ichida bo'lsin


// let userNumber = prompt("Iltimos raqamni kiriting")

// const toPalindrome = () => {

//     let userNumberKv = Math.pow(userNumber, 2);
//     let reverseNum = Array.from(String(userNumberKv), Number)
//     let arrReverse = reverseNum.reverse().join('')

//     if(userNumberKv == arrReverse){
//         alert("Bu son palendrom son")
//     }else{
//         alert("Bu son palendrom emas")
//     }
// }

// toPalindrome()

// 4.Ixtiyoriy 2 ta funciton yaratilsin 1-function ichida random sonning raqamlari yig'indisi topilsin va mana shu 1-function 2-funciton ni ichida ishlasin masala callback function yordamida bajarilsin 







// 5.Promt va funciton yarating promt ichida yozilgan so'zning palindome yoki palindrome emasligi topilsin


// let userWord = prompt("so'zni kiriting")


// const toPalindrome = () => {

//     let reverseWord = Array.from((userWord))
//     let arrReverse = reverseWord.reverse().join('')

//     if(arrReverse == userWord){
//         alert("Bu so'z palendrom so'z")
//     }else{
//         alert("Bu so'z palendrom emas")
//     }
// }

// toPalindrome()








// 6. Ixtiyoriy object yarating => {a:1,b:22} value larinig yig'indisini toping => 23 value larining yigindising yig'indisini toping => 2 + 3 = 5


// const toObjectSum = () => {

//     let obbject = {
//         a: 7,
//         b: 92
//     }

//     let sum = 0;
//     for (let key in obbject) {
//         sum += obbject[key];
//     }

//     alert(sum)

// }

// toObjectSum()