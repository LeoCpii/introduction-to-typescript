enum EIngredientes {
  Acucar,
  Tempero,
  Tudo_que_ha_de_bom,
  Elemento_X
}

enum EIngredientes1 {
  Acucar = 23,
  Tempero = 34,
  Tudo_que_ha_de_bom = 155,
  Elemento_X = 12
}

enum EIngredientes2 {
  Acucar = 'Açúcar',
  Tempero = 'Tempero',
  Tudo_que_ha_de_bom = 'Tudo que há de bom',
  Elemento_X = 'Elemento X'
}

type TIngredient = 'Acucar' | 'Tempero' | 'Tudo_que_ha_de_bom' | 'Elemento_X';

// Utilização
EIngredientes.Acucar;

class EnumType {
  public getIngredient(type: TIngredient) {
    return EIngredientes[type];
  }

  public getIngredient1(type: TIngredient) {
    return EIngredientes1[type];
  }

  public getIngredient2(type: TIngredient) {
    return EIngredientes2[type];
  }
}

export default new EnumType();
