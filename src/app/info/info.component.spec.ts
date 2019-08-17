import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InfoComponent } from "./info.component";
import { PokemonService } from "../pokemon/pokemon.service";
import { Pokemon } from "../pokemon/Pokemon";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("InfoComponent", () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PokemonService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
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
