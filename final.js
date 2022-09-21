/* 1)  Crear una función que reciba el array por parametro y retorne un nuevo array con los autos cuyo modelo sea mayor o igual a 2020. 
const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]

function AutoModelo (arrayObjetos){
    let newArray = []
    for(let i=0;i<arrayObjetos.length;i++){
        if ((arrayObjetos[i].modelo >= 2020)){
            newArray.push(arrayObjetos[i])
        }
    }
    return newArray
}
console.log(AutoModelo(autos)); */

/* 2) Dado el siguiente array de objetos ordenarlo de forma descendente en base a la notaPromedio 

let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

function ordernarPromedio(arr) {
    for(let i = 0 ; i < arr.length; i++){
      for(let j = 0; j < arr.length - 1; j++){
        if(arr[j].notaPromedio < arr[j + 1].notaPromedio){
          let aux = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = aux
        }
      }
    }
  }
  ordernarPromedio(estudiantes)
console.log(estudiantes) */
  
/* 3) Dada la siguiente matriz, realizar los siguientes ejercicios. */

let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

/* a) Crear una función que reciba por parámetros la matriz y la posición de una columna determinada.
La función debe retornar un arreglo con todos los elementos de esa columna. 

    function MatrizPrimera (mati,pos){
        let nuevoArray = []
              for (i = 0; i < mati.length; i++) {
                  nuevoArray.push(mati[i][pos-1])
              }
          return nuevoArray
      }
      console.log(MatrizPrimera(matrix,2));


console.log(MatrizPrimera(matrix))  */

 /* b) Crear una función que reciba por parámetro la matriz y cambie todos los elementos impares de la matriz por un número 0 (cero) 

let sumaImparesMatriz = function(myMatriz){
    for (let i=0;i<myMatriz.length;i++){
        for (let j=0;j<myMatriz[i].length;j++){
            if (myMatriz[i][j]%3==0){
                myMatriz[i][j] = 0;
            }
        }
    }
   
}

sumaImparesMatriz(matrix)
console.log(matrix)
*/
