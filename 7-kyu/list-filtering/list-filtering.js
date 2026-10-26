function filter_list(l) {
  // Return a new array with the strings filtered out
  let int = []
  for (let i of l) {
    if (typeof i == "number") {
      int.push(i)
    }
  }
  return int;
}