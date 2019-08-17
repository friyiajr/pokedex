export class Pokemon {

  id: string;
  name: string;
  imageUrl: string;
  weight: number;
  height: number;
  types: string[];
  abilities: string[];
  description: string;
  stats: {};

  constructor(
    id: string,
    name: string,
    imageUrl: string,
    weight: number,
    height: number,
    types: any[],
    abilities: any[],
    stats: object
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.weight = weight;
    this.height = height;
    this.types = this.getTypes(types);
    this.abilities = this.getAbilities(abilities);
    this.stats = this.getStats(stats);
  }

  getTypes(types: any[]): string[] {
    const convertedTypes: string[] = [];
    types.forEach((data: any) => {
      convertedTypes.push(data.type.name);
    });
    return convertedTypes;
  }

  getAbilities(abilities: any[]): string[] {
    const convertedAbilities: string[] = [];
    abilities.forEach((data: any) => {
      convertedAbilities.push(data.ability.name);
    });
    return convertedAbilities;
  }

  getStats(stats: any): object {
    return {
      speed: stats[0].base_stat,
      special_defence: stats[1].base_stat,
      special_attack: stats[2].base_stat,
      defense: stats[3].base_stat,
      attack: stats[4].base_stat,
      hp: stats[5].base_stat,
    };
  }
}
