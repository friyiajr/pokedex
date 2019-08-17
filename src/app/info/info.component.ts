import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
            pokemonSubscription.unsubscribe();
            descriptionSubscription.unsubscribe();
          });
      });
    this.scrollToTop();
  }

  // Used for mobile devices so that the scrolling doesn't
  // start at a low point on the screen
  scrollToTop(): void {
    let top = document.getElementById("top");
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
}
