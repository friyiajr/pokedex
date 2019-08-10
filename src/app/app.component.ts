import { Component } from "@angular/core";
import { PokemonService } from "./pokemon/pokemon.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getPokemon().subscribe(result => {
      console.log(result);
    });
  }
}
