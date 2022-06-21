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

var userName = prompt("Please Your Name")

for (i = 0; i <= userName.length; i++) {
    if (userName.charCodeAt(i) !== 33 && userName.charCodeAt(i) !== 44 && 
        userName.charCodeAt(i) !== 46 && userName.charCodeAt(i) !== 64) {
            document.write(userName);
    }   
    else{
        alert("Invalid name")
        break
    }
     
}

