console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

var me = {
  name: { first: 'naaman', last: 'omaima' }, age: 25, dob: 23051993,
  favoriteFood: ["mansaf", "ma8loba", "batata"],
  favoriteMovie: { mov1: "hassj", mov2: "dsadad", mov3: "dsadasd", mov4: "dasdasda", mov5: "dsadasd" }
}
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(obj) {
  var t = ""
  for (let i = 0; i < obj.length; i++) {
    t += (obj[i].name.first) + ", "

  }
  t = t.slice(0, -2)
  return t
}


/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

function averageAge(obj) {
  var t = 0
  for (let i = 0; i < obj.length; i++) {
    t += (obj[i].age)
  }

  return t / obj.length - 1
}

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(obj) {
  var t = obj[0].age
  var out = ""
  for (let i = 0; i < obj.length; i++) {
    if ((obj[i].age) >= t) {
      out = (obj[i].name.first) + " " + (obj[i].name.last)
    }

  }

  return out
}

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(obj) {
  var t = (obj[0].name.first) + "" + (obj[0].name.last)
  var z = ""
  for (let i = 0; i < obj.length; i++) {
    z = (obj[i].name.first) + " " + (obj[i].name.last)
    if (z.length >= t.length) {
      t = z
    }
  }

  return t
}

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
function repeatWord(st) {
  st = st.toLowerCase()
  st = st.split(" ")
  var obj = {};
  for (let i = 0; i < st.length; i++) {
    var t = 0
    for (let j = 0; j < st.length; j++) {
      if (st[j] == st[i]) {
        t++
      }
      obj[st[i]] = t
    }

  }
  return obj

}

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(st) {
  st = st.toLowerCase()
  st = st.split("")
  var obj = {};
  for (let i = 0; i < st.length; i++) {
    var t = 0
    for (let j = 0; j < st.length; j++) {
      if (st[j] == st[i]) {
        t++
      }
      obj[st[i]] = t
    }

  }
  return obj

}


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(obj, arr) {
  var out = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      out[arr[i]] = obj[arr[i]]
    }
  }
  return out
}

// function selectFromObject(obj, arr) {
//   var out = {}
//   for (let i = 0; i < arr.length; i++) {
//     for (var p in obj) {
//       if (p == arr[i]) {
//         out[p] = obj[p]
//       }
//     }
//   }
//   return out
// }

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/


function objectToArray(obj) {
  var arr = []
  for (var p in obj) {
    arr.push(p)
    arr.push(obj[p])
  }
  return arr
}




/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/


function arrayToObject(arr) {
  var out = {}
  for (let i = 0; i < arr.length; i++) {
    out[arr[i]] = arr[(++i)]

  }
  return out
}


/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(obj) {
  var out = {}
  for (var p in obj) {
    if ((typeof obj[p]) === "number") {
      out[p] = obj[p]
    }
  }
  return out
}


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(obj) {
  var out = {}
  for (var p in obj) {
    if ((typeof obj[p]) === "string") {
      out[p] = obj[p]
    }
  }
  return out
}


/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj) {
  var out = {}
  for (var p in obj) {
    if ((typeof obj[p]) === "object") {
      out[p] = obj[p]
    }
  }
  return out
}

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/

function keysArray(obj) {
  var arr = []
  for (var p in obj) {
    arr.push(p)

  }
  return arr
}


/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/

function valuesArray(obj) {
  var arr = []
  for (var p in obj) {

    arr.push(obj[p])
  }
  return arr
}

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var objX = { a: 1, b: 3, c: 4 }
objX.a = 4;
objX.c = 66;
delete objX.b
console.log(objX)


/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: objectLength({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(obj) {
  var t = 0
  for (var p in obj) {
    t++
  }
  return t
}

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(obj) {
  var out = {}
  for (var p in obj) {
    if ((obj[p]) % 2 === 0) {
      out[p] = obj[p]
    }
  }
  return out
}

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: longestKey({car:1, school:2, monster:3, alexMercer:4})=> 4
*/


function longestKey(obj) {

  var t = 0
  var out;
  for (var p in obj) {

    if ((p.length) >= t) {
      t = p.length
      out = obj[p]
    }

  }

  return out
}