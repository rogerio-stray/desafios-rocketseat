const usuarios = [ 

  {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
  {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
  {nome: 'Lucas', idade: 30, empresa: 'Facebook'}

]
const idades = usuarios.map(usuario => usuario.idade);

const funcionarios = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18
  );

const google = usuarios.find(usuario => usuario.empresa === 'Google');

const multIdades = usuarios
  .map(usuario => ({...usuarios, idade: usuario.idade * 2}))
  .filter(usuario => usuario.idade <= 50);
  