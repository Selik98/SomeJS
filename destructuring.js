let array = [10,20,5,50,100,1000,25]

let [decena,,mediaDecena, ...otros] = array

console.log(decena) // Devuelve el primer indice
console.log(mediaDecena) // Devuelve el 3er indice ya que el 2do esta entre ",,"
console.log(otros) // Devuelve el array de los numeros que quedan
console.log(...otros) // Devuelve los numeros que quedan


