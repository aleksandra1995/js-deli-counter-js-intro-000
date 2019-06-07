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
      var newLine = []
      for (var i = 0; i < line.length; i++);
    {if (line.length - 1)
     { newLine.push(`The line is currently: ${i + 1}. ${line.length[i]}`)
       return newLine
     } 
      else { newLine.push(`The line is currently: ${i + 1}. ${line.length[i]},`)
        retuen newLine
      } }}
      /* did not work. .toSlice did not work either. 
      
    
    
  
  