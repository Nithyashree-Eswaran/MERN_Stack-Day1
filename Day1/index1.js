var data = "value";
data =1;
data = [1,2,3,4,5,6,7];

console.log(data);
console.log(typeof data);


//Strings

var ab= "             Bangtan Boys            ";
console.log(ab.length);
console.log(ab.toUpperCase);
console.log(ab.split(" "));

var cd = ab.trim();
console.log(cd);
console.log(cd.length);
console.log(cd.indexOf('n'));
console.log(cd.lastIndexOf('n'));



//math

var mat = 357.3;
mat=Math.ceil(mat);
console.log(mat);


//typecast

var newVar = 379;
console.log(typeof ""+newVar );    //type cast//
console.log(typeof '${newVar}' ); 

//literals

let af ="jhgdjhgufh";
var b= "sdgdsfgdfdf  ${newVar}";
console.log(b);


//boolean

var i = true;
console.log(i);


//undefined

var u ;
console.log(u);


//array
var arr = [7,"BTS" ,{"Vocal":4}];
console.log(arr);
console.log(arr.push({"Rapper":3}));
console.log(arr);

arr.push(25);
arr.pop();
console.log(arr);

arr.unshift(5,3);
console.log(arr);

arr.shift();
console.log(arr);


//Reversing string

var str ="Hello";
var sp = str.split("");
console.log(sp);
sp.reverse();
console.log(sp);
var rev= sp.join("");
console.log(rev);


//iteration


//for(declaration,condition,inc/dec)
console.log("-----FOR------");
for(var i = 1;i<=7;i++)
{
    console.log(i);
    
}



//while
console.log("-----WHILE------");
var i =0;
while(i<=7)
{
    console.log(i);
    i++;
}




//do while
console.log("-----DO WHILE------");
var i=1;
do
{
    console.log(i);
    i++;
}
while(i<=7);



//Higher Order Functions

/* syntax

array.forEach(function(element, index, array) {
    // code to execute

*/

["KIM NAMJOON","KIM SEOKJIN","MIN YOONGI","JUNG HOSEOK","PARK JIMIN","KIM TAEHYUNG","JEON JUNGKOOK"].forEach
((i,k)=>{
    console.log(k,i);
});



//conditional statement

if(1)
{
    console.log("BTS");
}
else{
    console.log("ARMY");
}


//Vowel or Consonant

//Using if Else ladder...

var chr= 'V';
if(chr == 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U')
{
    console.log(chr +' is a Vowel');
}
else
{
    console.log(chr +' is a Consonant');
}


               //or//

        
//Using Switch Case....

var chr1= prompt("Enter Charracter:");
chr1 = chr1 ?? "A";
chr1 = chr1.toUpperCase();

switch(chr1)
{
    case 'A':
    case 'E':
    case 'I': 
    case 'O':
    case 'U':
        console.log(chr1 +' is a Vowel');  
        break;
    default:
        console.log(chr1 +' is a Consonant');          
}



                         //or//


//using Ternary Operator....

/* syntax 

       var chr2 = cond ? true : false;

*/

var chr2 = prompt("Enter Charracter:");
var res = chr2=='A' ? true : chr2=='E' ? true : chr2=='I' ? true : chr2=='O' ? true : chr2=='U' ? true : false;
if(res)
{
    console.log(chr2 + " is a Vowel");
}
else{
    console.log(chr2 + " is a Consosnant");
}


// eval()

console.log(eval(1+2-3+54/7*3+"7"));

var expression = "var a = 7; var b = 6; a + b;";
var sum = eval(expression);
console.log(sum); 



//Function

//syntax----->  function fun_name(){}

function hello()
{
    console.log("Bangtan World");
}
hello();


function fun1(val1,val2)
{
    console.log(val1*val2);
}
fun1(5,5);



//Method Overloading

function fun2(val1,val2)
{
    return val1+val2;
}


function fun2(val1,val2,val3)
{
    return val1*val2+val3;
}

console.log(fun2(7,3,4));



//ECMAScript 

//let

let c=3;
console.log(c);

//const

const d=3;
console.log(d);


//Arrow Function

const fun_add=(a,b) =>{
    return a+b;
}
console.log(fun_add(3,4));



//Add elements in Array

const add=(arr1) =>
{
    let sum =0;
    arr1.forEach(i =>{
        sum+=i;
    });
        return sum;
    
}
console.log(add([3,5,7,9]));



//Map

let arr3=[1,2,3,4,5]
let comp= arr3.map(num => num+3)
console.log(comp);



//Filter

let arr4=[1,2,3,4,5,6,7,8,9];
let compu = arr4.filter(num => num%2 == 0)
console.log(compu);


//Every

let a4=[1,2,3,4,5,6,7,8,9];
let c1 = arr4.every(num => num%2 == 0)
console.log(c1);


//Some

let ar4=[1,2,3,4,5,6,7,8,9];
let c2 = arr4.some(num => num%2 == 0)
console.log(c2);








//---------------------------------------------------------DAY - 2------------------------------------------------------------------------------//















