import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonService } from "../pokemon/pokemon.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getPokemon().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit() {}

  public executeSelectedChange = event => {
    console.log(event);
  };
}
