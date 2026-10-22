function mostFrequentItemCount(collection) {
  // inisialisasi variabel penampung
  let counts = {}
  // penyortiran angka dan jumlah angka
  for (let x of collection) {
    // counts[x] ditulis untuk add property pada variabel counts
    if (counts[x] === undefined) {
      // inisialisasi value
      counts[x] = 1
    } else {
      // jika value sudah ada, dilakukan increment
      counts[x] = counts[x] + 1
    }
  }
  
  let maxCount = 0
  for (let count of Object.values(counts)) {
    if (count > maxCount) {
      maxCount = count
    }
  }
  return maxCount;
}