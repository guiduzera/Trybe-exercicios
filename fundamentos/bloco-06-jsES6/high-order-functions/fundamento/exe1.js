const geradordeEmail = (nome) => {
    return {
        nomeCompleto: nome,
        email: `${nome}@trybe.com`,
    };
};

const newEmployees = (myFunc) => {
    const employees = {
      id1: myFunc('pedro'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: myFunc('carla'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: myFunc('luiza'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
console.log(newEmployees(geradordeEmail));