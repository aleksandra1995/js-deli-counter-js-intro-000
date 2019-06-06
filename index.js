function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else { return `Currently serving ${line.shift()}.` } }
  // else was not working because i wasnt using return with it. 
  
  function currentLine(line) {
    if (line.length === 0) {
      return "The line is currently empty."}
    var i = 0
    else if (line.length - 1)
   { return `The line is currently ${i + 1}. ${line.length[i]}`}
  else { return 