import {
  Component,
  OnInit
} from "@angular/core";
import { ActivatedRoute} from "@angular/router";
import { Pokemon } from "../pokemon/Pokemon";
import { PokemonService } from "../pokemon/pokemon.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  id: string;
  pokemon: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    const pokemonSubscription = this.pokemonService
      .getPokemonRequest(this.id)
      .subscribe((pokemon: Pokemon) => {
        const descriptionSubscription = this.pokemonService
          .getPokemonDescriptionById(pokemon.id, pokemon)
          .subscribe((result: Pokemon) => {
            this.pokemon = result;
            console.log(this.pokemon);
            pokemonSubscription.unsubscribe();
            descriptionSubscription.unsubscribe();
          });
      });
  }
}
