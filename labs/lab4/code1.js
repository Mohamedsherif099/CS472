let x
var a = 5
var b = 10
var c = function (a, b, c) {
  document.write(x)
  document.write(a)

  var f = function (a, b, c) {
    b = a
    document.write(b)
    b = c
    var x = 5
  }

  f(a, b, c)
  document.write(b)
  var x = 10
}

c(8, 9, 10)
document.write(b)
document.write(x)



/*   
1-Global EC creation:
Outer: null,
LE :{[
a:undefined
b:undefined
c:undefined
]}

TDZ:{x}


2-Global EC execution:
LE:{[
a:5
b:10
c:function
x: undefined,

]}

TDZ:{}


3-Function c EC creation:
Outer: Global,
LE:{[

arguments: object, number of arguments: 3

var f: undefined
var x: undefined
]}
TDZ:{}

4-Function c EC execution:
Outer: Global,
LE:[{
arguments: object, number of arguments: 3
f: function
x:10
}]
TDZ:{}


5-Function f EC creation:
Outer: c

LE:[{
arguments: object, number of arguments: 3
x: undefined
}]
TDZ:{}

6-Function f EC execution:
Outer: c
LE:{[
arguments: object, number of arguments: 3
x: 5
]}


Printed: 
undefined
8
8
9
10
undefined

*/