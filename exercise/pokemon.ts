import { IAttack, IPokemon, IStats, TCategory, TGender } from '../slides/interface';

abstract class Attack implements IAttack {
  private _data: IPokemon;
  
  constructor(data: IPokemon) {
    this.data = data;
  }

  get data(): IPokemon {
    return this._data;
  }

  set data(pokemon: IPokemon) {
    this._data = pokemon;
  }

  abstract physical(): void;
  abstract special(): void;

  public _physical() {
    return 
  };
  
  public _special() {

  };
}

export class Pokemon extends Attack implements IPokemon {
  public name: string;
  public height: number;
  public weight: number;
  public shiny: boolean;
  public gender: TGender;
  public category: TCategory;
  public weaknesses: TCategory[];
  public stats: IStats;

  constructor(data: IPokemon) {
    super(data);
    this.name = data.name;
    this.height = data.height;
    this.height = data.weight;
    this.shiny = data.shiny;
    this.gender = data.gender;
    this.category = data.category;
    this.weaknesses = data.weaknesses;
    this.stats = data.stats;
  }

  public physical() {
    return super._physical();
  }

  public special() {
    return super._special();
  }
}
