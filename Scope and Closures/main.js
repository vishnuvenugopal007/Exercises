//TypeWriter

function typeWriter() {
  var begin = ''
  function type(string) {
    begin += string
    return begin
  }
  return type
}

const type = typeWriter()

type()

//MakeCounter

function makeCounter(number) {

  return{
    current: function() {
      return number
    },
    increment: function() {
      //return ++number
      number += 1
      return number
    },
    decrement: function() {
    //  return --number
      number -= 1
      return number
    }
  }
}

var counter = makeCounter(0)
console.log(counter.current())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.current())
