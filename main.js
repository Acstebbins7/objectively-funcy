function getFirstName(persons){
  return persons.firstName
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function getLastName(persons){
  return persons.lastName
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function getFullName(persons){
  return  getFirstName(persons) + ' ' + getLastName(persons)
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function setFirstName(persons, name){
  persons.firstName = name
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function setAge (persons, age){
  persons.age = age
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function giveBirthday(persons){
  if (persons.age !== undefined){
    persons.age++
  } else {
    persons.age = 1
  }
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function marry(personA, personB){
  personA.married = true
  personB.married = true
  personA.spouseName = getFullName(personB)
  personB.spouseName = getFullName(personA)
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function divorce(personA, personB){
  personA.married = false
  personB.married = false
  delete personA.spouseName
  delete personB.spouseName
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
