import ArrayType from './array';
import EnumType from './enum';
import TypeType from './type';
import { NewClass, ClassType } from './class';
import { Pokemon } from './../example/pokemon';
import { IPokemon } from './interface';
import { SuperMario } from '../example/supermario';

class Run {
  constructor() {
    /*********/
    /* ARRAY */
    /*********/
    // console.log(ArrayType.arr1);
    // console.log(ArrayType.arr2);
    /*********/
    /* ENUM */
    /*********/
    // console.log(EnumType.getIngredient('Elemento_X'));
    // console.log(EnumType.getIngredient1('Elemento_X'));
    // console.log(EnumType.getIngredient2('Elemento_X'));
    /*********/
    /* TYPE */
    /*********/
    // TypeType.hakunamatata('Simba');
    /*********/
    /* CLASS */
    /*********/
    // GETTER AND SETTER
    // const intance = new ClassType();
    // console.log('GETTER', intance.getter);
    // intance.setter = 'sou uma prop privada - EDITADA';
    // console.log('SETTER', intance.getter);
    // PUBLIC METHOD - STRING
    // console.log(new ClassType().methodWithReturn());
    // PUBLIC METHOD - VOID
    // new ClassType().log();
    // INHERITANCE
    // new NewClass().log();
    /************/
    /* EXERCISE */
    /************/
    // const mario = new SuperMario(3, 'capa');
    // const luigi = new SuperMario(1, 'pena');
    // console.log('mario', mario.fly());
    // console.log('Luigi', luigi.fly());
  }
}

export default new Run();
