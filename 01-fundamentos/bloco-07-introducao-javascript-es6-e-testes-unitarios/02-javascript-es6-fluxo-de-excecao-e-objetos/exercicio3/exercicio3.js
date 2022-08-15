const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
/*1---------------------------------------------------------------------------------------------------*/
  const adicionaTurno = (lesson2,key,value) => {
    lesson2[key] = value;
  }
  adicionaTurno(lesson2,'turno','noite')

/*2---------------------------------------------------------------------------------------------------*/
  const listKeys = (object) => {
    console.log(Object.keys(object));
  }
  listKeys(lesson2);

/*3---------------------------------------------------------------------------------------------------*/
  const objectSize = (object) => {
    console.log(`Objeto de tamanho: ${Object.keys(object).length}`)
  }
  objectSize(lesson2);

/*4---------------------------------------------------------------------------------------------------*/
  const listObjectValues = (object) => {
    console.log(Object.values(object));
  }
  listObjectValues(lesson2);

/*5---------------------------------------------------------------------------------------------------*/
  const allLessons = Object.assign({},{lesson1 , lesson2 , lesson3});
  console.log(allLessons);

/*6---------------------------------------------------------------------------------------------------*/
  const numeroTotalEstudantes = () => {
    return console.log(`O numero total de estudantes é: ${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}`)
  }
  numeroTotalEstudantes();

/*7---------------------------------------------------------------------------------------------------*/
  const verifyPair = (object,key,value) => (object.hasOwnProperty(key) && object[key] === value) ? true : false 
  console.log(verifyPair(lesson3, 'turno', 'noite'));

