import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { MaterialModule } from "../material/material.module";
import { PokemonTileComponent } from "../pokemon-tile/pokemon-tile.component";
import { PokemonService } from "../pokemon/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Pokemon } from "../pokemon/Pokemon";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, PokemonTileComponent],
      imports: [MaterialModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PokemonService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.pokemon = [
      new Pokemon(
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
      )
    ];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
