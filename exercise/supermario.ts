enum ESize {
  small = 'Pequeno',
  big = 'Grande'
}

interface IMario {
  size: ESize;
  lifes: number;
}

type TItem = 'pena' | 'capa' | 'flor';

abstract class Moves {
  private item: TItem;

  constructor(item: TItem) {
    this.item = item;
  }

  abstract jump(): void;
  abstract down(): void;
  abstract right(): void;
  abstract left(): void;

  public fly() {
    if (this.item !== 'pena') {
      console.error('Você precisa de uma pena para voar');
    } else {
      console.log('Estou voando! 🪁');
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

  public jump() {
    console.log('Pulei');
  }
  public down() {
    console.log('Abaixei');
  }
  public right() {
    console.log('Andei');
  }
  public left() {
    console.log('Voltei');
  }
  public fly() {
    super.fly();
  }
}
