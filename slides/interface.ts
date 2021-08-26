export type TGender = 'Female' | 'Male';
export type TCategory = 'Fire' | 'Water' | 'Grass' | 'Poison' | 'Flying' | 'Rock';

export interface IStats {
  HP: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface IPokemon {
  name: string;
  image?: string;
  height: number;
  weight: number;
  shiny: boolean;
  gender: TGender;
  category: TCategory;
  weaknesses: TCategory[];
  stats: IStats;
}

export interface IAttack {
  physical: () => void;
  special: () => void;
}