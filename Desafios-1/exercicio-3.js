
const arr = [1, 2, 3, 4, 5];

arr.map(function(item){
  
  return item + 10;
});

arr.map(item => item + 10);


const usuario = { nome: 'Diego', idade = 23 };

function mostraIdade(usuario){

  return usuario.idade;
}

mostraIdade(usuario);

const mostraIdade1 = usuario => usuario.idade;

console.log(mostraIdade1);

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18){

  return {nome, idade};
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const mostraUsuario1 = (nome = 'Diego', idade = 18) => ({
    nome,
    idade
  });

console.log(mostraUsuario1);

const promise = function() {
  return new Promise(function(resolve, reject){
    return resolve();
  })
}

const promise1 = () => new Promise((resolve, reject) => resolve());

