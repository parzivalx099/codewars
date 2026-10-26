function filter_list(l) {
  let int = []
  // inisialisasi variable untuk menampung array
  for (let x of l) {
    if (typeof x === "number") {
      int.push(x)
    }
  }
  return int;
}