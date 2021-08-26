export class ClassType {
  // atributos
  // static
  static static: string = 'sou uma prop statica';
  // private
  private private: string = 'sou uma prop privada';
  // public
  public public: string = 'sou uma prop publica';

  // construtor
  constructor() {}

  // getter e setters
  get getter(): string {
    return this.private;
  }
  set setter(value: string) {
    this.private = value;
  }

  // outros métodos
  private privateMethod(): string {
    return 'Estou retornando algo privado 🤫🙊';
  }
  public methodWithReturn(): string {
    return 'Estou retornando algo publico';
  }
  public log(): void {
    console.log('estou logando...');
  }
}

class BaseClass {
  constructor() {}

  public log(): void {
    console.log('logando na classe base');
  }
}

export class NewClass extends BaseClass {
  constructor() {
    super();
  }

  public log(): void {
    super.log();
  }
}
