import axios from 'axios';

// 1

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){
  
  await delay();
  console.log('1s');
  await delay();
  console.log('2s');
  await delay();
  console.log('3s');
}

umPorSegundo();

// 2
async function getUserFromGithub(user){

  try{

    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  }catch(err){

    console.warn('Usuario nao existe');
  }
}

getUserFromGithub('rogerio-stray');
getUserFromGithub('rogerio-stray1234');

// 3
class Github {

  static async getRepositories(repo){

    try{

      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    }
    catch(err){

      console.warn(err);
    }
  }
}

Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv");

// 4
const buscaUsuario = async usuario => {

  try{

    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
    
  }catch(err){

    console.warn('Usuário não existe');
  }
};

buscaUsuario('rogerio-stray');