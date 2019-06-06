function takeANumber(line, name) {
   line.push(name)
  return (`Welcome, ${name}. You are number ${line.length} in line.`); 
  }
  //it wasnt an arry so the index number wasnt 0. when tried
  // to put in array i was getting 0 insted of 1 
  function nowServing(line) {
    if (line.length === 0)
    {return "There is nobody waiting to be served!"
    return `Currently serving ${line.shift()`