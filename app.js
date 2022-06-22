// Chapter 21

// // Question 1
// var a  = prompt("Enter your first Name");
// var b = prompt("Enter your last Name");

// document.write(a + " "+ b)

// Question 2

// var a = prompt("Enter your Favourite mobile model")
// var b = a.length;

// document.write("My favorite phone is: "+ a + "<br>");
// document.write(b);

// Question 3

// var a = "Pakistan";

// document.write("Index Of \'n'\ : "+a.indexOf("n"))


// Question 4

// var a = "Hello World";

// var b = a.lastIndexOf("l");
// document.write("String: "+a+"<br>")
// document.write("Last index of \'n'\: " +b)


// Question 5

// var a = "Pakistani"

// var b = a[3]

// document.write("String: "+ a+"<br>");
// document.write("Character at index 3: " +b)


// // Question 6

// var a  = prompt("Enter your first Name");
// var b = prompt("Enter your last Name");

// document.write(a.concat(" ",b))

// Question 7

// var a = "Hyderabad";

// var b = a.replace(/hyder/i,"Islam");

// document.write("City: "+ a + "<br>");

// document.write("After replacement: "+ b)


// Question 8

// var a = "Ali and Sami are the best friends. They play cricket and football together.";

// var b = a.replace(/and/g,"&")

// document.write("Before Replacement: "+a +"<br>")
// document.write("After Replacment: "+b)


// Question 9

// var a = "472"
// document.write("Value: "+ a+"<br>")
// document.write("Type: "+typeof(a)+"<br>")
// var b = parseInt(a)

// document.write("Value: "+ b+"<br>")
// document.write("Type: "+typeof(b)+"<br>")


// Question 10

// var a = prompt("Please enter value");
// document.write("User input: "+ a +"<br>")
// var b = a.toUpperCase();
// document.write("Upper Case: "+b)

// Question 11

// var a = prompt("Enter Value");

// document.write("User input: "+ a+"<br>")

// var b = a[0].toUpperCase()+a.substr(1).toLowerCase();

// document.write("Title Case: "+ b)


// Question 12

// var num = 35.36;
// var a = num.toString().replace(".","");
// console.log(a)
// document.write("Number: "+num+"<br>")
// document.write("Result: "+a)


// Question 13

// var userName = prompt("Please Your Name")

// for (i = 0; i <= userName.length; i++) {
//     if (userName.charCodeAt(i) !== 33 && userName.charCodeAt(i) !== 44 && 
//         userName.charCodeAt(i) !== 46 && userName.charCodeAt(i) !== 64) {
//             document.write(userName);
//     }   
//     else{
//         alert("Invalid name")
//         break
//     }
     
// }

// Question 14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]

// var b = prompt("Please enter Desert")
// var c = b.toLowerCase()
// for(i=0; i <= a.length ; i++){

//     if(a[i] === c) {
//         document.write(a[i]+" is available at index "+ i +" in our bakery")
//         break
//     }
//     else{
//         alert("Not Found")
//         break
//     }
// }


// Question 15

// var pass = prompt("Password should be contain 6 letter, 1 small, 1 capital and special character")

//     if(pass.length === 6){
//         if(pass.charCodeAt(0) !== 48 && pass.charCodeAt(0) != 49 && pass.charCodeAt(0) != 50 && pass.charCodeAt(0) !=
//             51 && pass.charCodeAt(0) != 52 && pass.charCodeAt(0) != 53 && pass.charCodeAt(0) !=
//              54 && pass.charCodeAt(0) != 55 && pass.charCodeAt(0) != 56 && pass.charCodeAt(0) != 57 ){
//                 for(var i = 0 ; i <= pass.length ; i++){
//                     if(pass.charCodeAt(i) >= 65 &&  pass.charCodeAt(i) <= 90){
//                         if(pass.charCodeAt(i)>=97 && pass.charCodeAt(i)>=122){

//                         }
//                         else{
//                             alert("Password must contain one small character")
//                             break
//                         }
                        
//                     }
//                     else{
//                         alert("Password Should contain one uppercase Letter")
//                         break
//                     }
//                 }
//         }
//         else{
//             alert("First letter should not be Number")
//         }
//     }
//     else{
//         alert("Password should be six character")
//     }

// Question 16

// var university = "University of Karachi";
// var a =  university.split("")

// for(var i = 0 ; i <= university.length; i++){
//     document.write(a[i]+"<br>")
    
// }


// Question 17

// var user = prompt("Please enter value");
// document.write("User Value: "+ user +"<br>")
// var a = user[user.length -1]
// document.write("Last Character of input: "+ a)

// Question 18

var a = "The quick brown fox jumps over the lazy dog"

for