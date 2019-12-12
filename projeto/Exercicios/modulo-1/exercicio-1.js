class Usuario{

  constructor(email, senha){

    this._email = email;
    this._senha = senha;
    this._admin = false;
  }

  isAdmin(){

    return this._admin;
  }
}

class Admin extends Usuario{

  constructor(email, senha){

    super(email, senha);
    this._admin = true;

  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
