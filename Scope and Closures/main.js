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
