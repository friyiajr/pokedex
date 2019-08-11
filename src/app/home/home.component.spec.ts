import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { MaterialModule } from "../material/material.module";
import { Pokemon } from "../pokemon/Pokemon";
import { PokemonTileComponent } from "../pokemon-tile/pokemon-tile.component";
import { PokemonService } from "../pokemon/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {Observable} from 'rxjs';

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, PokemonTileComponent],
      imports: [MaterialModule, HttpClientTestingModule],
      providers: [PokemonService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("pokeSort", () => {
    it("should return 1 if the first pokemon id is greater then the second", () => {
      const p1 = new Pokemon("2", "Ivysaur", "image.com");
      const p2 = new Pokemon("1", "Bulbasaur", "image.com");
      fixture = TestBed.createComponent(HomeComponent);
      const sortResult: number = fixture.componentInstance.pokeSort(p1, p2);
      expect(sortResult).toEqual(1);
    });
    it("should return 0 if the first pokemon id equal to the second", () => {
      const p1 = new Pokemon("1", "Bulbasaur", "image.com");
      const p2 = new Pokemon("1", "Bulbasaur", "image.com");
      fixture = TestBed.createComponent(HomeComponent);
      const sortResult: number = fixture.componentInstance.pokeSort(p1, p2);
      expect(sortResult).toEqual(0);
    });
    it("should return -1 if the second pokemon id is greater then the first", () => {
      const p1 = new Pokemon("2", "Ivysaur", "image.com");
      const p2 = new Pokemon("1", "Bulbasaur", "image.com");
      fixture = TestBed.createComponent(HomeComponent);
      const sortResult: number = fixture.componentInstance.pokeSort(p2, p1);
      expect(sortResult).toEqual(-1);
    });
  });
});
