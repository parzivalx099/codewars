function filter_list(l) {
  
  // 1. init variabel penampung
  
  let int = []
  
  // 2. iterasi array dari argumen
  
  for (let i of l) {
    
  // 3. filter array agar bertipe "number" only
    
    if (typeof i === "number") {
      
  // 4. masukkan item yang sudah difilter ke array penampung "int"
      int.push(i)
    }
  }
  return int;
}