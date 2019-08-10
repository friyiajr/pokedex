import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonService } from "../pokemon/pokemon.service";
import { Pokemon } from "../pokemon/Pokemon";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
    this.getPokemon();
  }

  getPokemon(): void {
    for (let i = 1; i <= 151; i++) {
      const subscription = this.pokemonService
        .getPokemon(i)
        .subscribe((result: Pokemon) => {
          this.pokemon.push(result);
          this.pokemon.sort((p1: Pokemon, p2: Pokemon) => {
            if (p1.id > p2.id) {
              return 1;
            } else if (p1.id < p2.id) {
              return -1;
            } else {
              return 0;
            }
          });
          subscription.unsubscribe();
        });
    }
  }

  ngOnInit() {}
}
