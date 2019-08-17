import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonTileComponent } from "./pokemon-tile.component";
import { Pokemon } from "../pokemon/Pokemon";

describe("PokemonTileComponent", () => {
  let component: PokemonTileComponent;
  let fixture: ComponentFixture<PokemonTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonTileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTileComponent);
    fixture.componentInstance.pokemon = new Pokemon(
      "1",
      "Bulbasaur",
      "image.com",
      111,
      111,
      [
        {
          type: "poisin"
        }
      ],
      [
        {
          ability: "one"
        },
        {
          ability: "two"
        }
      ],
      [
        {
          base_stat: 100
        },
        {
          base_stat: 100
        },
        {
          base_stat: 100
        },
        {
          base_stat: 100
        },
        {
          base_stat: 100
        },
        {
          base_stat: 100
        }
      ]
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
