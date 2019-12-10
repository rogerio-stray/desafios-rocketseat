// 5.1 Rest

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(x, ...y){

  return x + y.reduce((total, next) => total + next);
}

// 5.2 Spread

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };
 
 const usuario2 = {...usuario, nome: 'Gabriel'};
 const usuario3 = {...usuario, endereco: {nome: 'Lontras'}};