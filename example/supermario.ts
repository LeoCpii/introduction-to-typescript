enum ESize {
  small = 'Pequeno',
  big = 'Grande'
}

interface IMario {
  size: ESize;
  lifes: number;
}

type TItem = 'pena' | 'capa';

abstract class Moves {
  private item: TItem;

  constructor(item: TItem) {
    this.item = item;
  }

  public jump(): void {
    console.log('Pulei');
  }
  public down(): void {
    console.log('Abaixei');
  }
  public right(): void {
    console.log('Andei');
  }
  public left(): void {
    console.log('Voltei');
  }

  public fly(): void {
    if (!['pena', 'capa'].includes(this.item)) {
      console.error('Você precisa de uma pena ou uma capa para voar');
    } else {
      console.log(`Estou voando com uma ${this.item}!`);
    }
  }
}

export class SuperMario extends Moves implements IMario {
  private _size: ESize;
  private _lifes: number;

  constructor(lifes: number, item?: TItem, size: ESize = ESize.small) {
    super(item);
    this._lifes = lifes;
    this._size = size;
  }

  get size(): ESize {
    return this._size;
  }
  set size(value: ESize) {
    this._size = value;
  }

  get lifes(): number {
    return this._lifes;
  }
  set lifes(value: number) {
    this._lifes = value;
  }
}
