//Map - Convert 3 Cart Items into HTML Elements

var cartItems = [
  {
    id: 'p001',
    name: 'Scwhinn Mark V Bike',
    qty: 1
  },
  {
    id: 'p002',
    name: 'Sandisk 32GB USB Drive',
    qty: 2
  },
  {
    id: 'p003',
    name: 'Honda Civic',
    qty: 10
  }
]

cartItems
  .map(function cartElement(cartItem) {
    var theCartItem = document.createElement('div')
    theCartItem.textContent = cartItem.id + ' ' + cartItem.name + ' ' + cartItem.qty
    return theCartItem
  })
  .forEach(function appendCartItem(theCartItem) {
    document.body.appendChild(theCartItem)
  })

//Filter - List only users with more than 2 followers.

var users = [
  { id: 1, followers: [2]},
  { id: 2, followers: [1,5]},
  { id: 3, followers: [1,2,4]},
  {id: 4, followers: [1,2]},
  {id: 5, followers: [1,2,3,4]},
]

var popular = users.filter(function moreThan2(user) {
    return user.followers.length >= 2
  })

  popular

//Reduce - Get the combined years of JavaScript experience of a team

var members = [
  { name: 'Homer', language: 'BASIC', experience: 30 },
  { name: 'Marge', language: 'JavaScript', experience: 20 },
  { name: 'Bart', language: 'C', experience: 10},
  { name: 'Lisa', language: 'JavaScript', experience: 8},
  { name: 'Maggie', language: 'JavaScript', experience: 0.5}
]

var javaScriptUser = members.filter(function js(member) {
  return member.language = 'JavaScript'
})

var jSExperience = javaScriptUser.reduce(function experience(total, member) {
  return total + member.experience
}, 0)

jSExperience
