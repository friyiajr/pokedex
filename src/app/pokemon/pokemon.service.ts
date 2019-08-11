import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Pokemon } from "./Pokemon";

export class PokemonService {
  static BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) {}

  getPokemon(pokemonToLoad: number): Observable<Pokemon> {
    return this.http.get(`${PokemonService.BASE_URL}/${pokemonToLoad}`).pipe(
      map(response => {
        return new Pokemon(
          response["id"],
          response["name"],
          response["sprites"]["front_default"]
        );
      })
    );
  }
}
