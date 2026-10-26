function filter_list(l) {
  let int = []
  // inisialisasi variable untuk menampung array
  for (let x of l) {
  // iterasi array l, current item disimpan pada variabel x
    if (typeof x === "number") {
      // jika tipe data variabel x adalah number
      int.push(x)
      // push value x ke array int
    }
  }
  return int;
}