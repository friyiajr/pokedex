import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Pokemon } from "./Pokemon";

export class PokemonService {
  constructor(private http: HttpClient) {
    this.initPokemon();
  }

  static BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  static CHARACTARISTIC_URL = "https://pokeapi.co/api/v2/pokemon-species";

  pokemon: Pokemon[] = [];

  static getEnglishFlavorText(charactaristicData: any): string {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < charactaristicData.length; i++) {
      if (charactaristicData[i].language.name === "en") {
        return charactaristicData[i].flavor_text;
      }
    }

    return "";
  }

  initPokemon(): void {
    this.getAllPokemon();
  }

  /*
   * Sorts pokemon in order by id
   */
  pokeSort(p1: Pokemon, p2: Pokemon): number {
    if (p1.id > p2.id) {
      return 1;
    } else if (p1.id < p2.id) {
      return -1;
    } else {
      return 0;
    }
  }

  /*
   * Retrieves 151 Pokemon from the Pokemon API
   */
  getAllPokemon(): void {
    for (let i = 1; i <= 151; i++) {
      const statsSubscription = this.getPokemonRequest(i.toString()).subscribe(
        (result: Pokemon) => {
          this.pokemon.push(result);
          this.pokemon.sort(this.pokeSort);
          statsSubscription.unsubscribe();
        }
      );
    }
  }

  getPokemonDescriptionById(id: string, pokemon: Pokemon) {
    return this.http.get(`${PokemonService.CHARACTARISTIC_URL}/${id}`).pipe(
      map((characteristics: any) => {
        pokemon.description = PokemonService.getEnglishFlavorText(
          characteristics.flavor_text_entries
        );
        return pokemon;
      })
    );
  }

  getPokemonRequest(pokemonToLoad: string): Observable<Pokemon> {
    return this.http.get(`${PokemonService.BASE_URL}/${pokemonToLoad}`).pipe(
      map(response => {
        return new Pokemon(
          response["id"],
          response["name"],
          response["sprites"]["front_default"],
          response["weight"],
          response["height"],
          response["types"],
          response["abilities"],
          response["stats"]
        );
      })
    );
  }
}
