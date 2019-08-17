import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon/pokemon.service";
import { Pokemon } from "../pokemon/Pokemon";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {
    this.pokemon = pokemonService.pokemon;
  }

  onPokemonSelected(pokemonId: number) {
    this.router.navigate(["info", pokemonId]);
  }

  ngOnInit() {}
}
