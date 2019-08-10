import {Component, Input, OnInit} from '@angular/core';
import { Pokemon } from "../pokemon/Pokemon";

@Component({
  selector: "app-pokemon-tile",
  templateUrl: "./pokemon-tile.component.html",
  styleUrls: ["./pokemon-tile.component.css"]
})
export class PokemonTileComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() {}

  ngOnInit() {}
}
