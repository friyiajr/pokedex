import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonService } from "../pokemon/pokemon.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  nothing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getPokemon().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {}
}
