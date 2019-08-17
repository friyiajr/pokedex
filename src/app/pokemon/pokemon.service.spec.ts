import { PokemonService } from "./pokemon.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Pokemon } from "./Pokemon";

describe("PokemonService", () => {
  let pokemonService: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });

    pokemonService = TestBed.get(PokemonService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe("getEnglishFlavorText", () => {
    it("should get the english description of a pokemon", () => {
      const result = PokemonService.getEnglishFlavorText([
        {
          language: {
            name: "en"
          },
          flavor_text: "test text"
        },
        {
          language: {
            name: "fr"
          },
          flavor_text: "le french text"
        }
      ]);
      expect(result).toEqual("test text");
    });
  });

  describe("pokeSort", () => {
    it("should return -1 if the first pokemon id is less then the second", () => {
      const p1 = new Pokemon(
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
      const p2 = new Pokemon(
        "2",
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
      const sortResult = pokemonService.pokeSort(p1, p2);
      expect(sortResult).toEqual(-1);
    });

    it("should return 0 if the first pokemon id is equal to the second", () => {
      const p1 = new Pokemon(
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
      const p2 = new Pokemon(
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
      const sortResult = pokemonService.pokeSort(p1, p2);
      expect(sortResult).toEqual(0);
    });

    it("should return 1 if the first pokemon id is greater then the second", () => {
      const p1 = new Pokemon(
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
      const p2 = new Pokemon(
        "2",
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
      const sortResult = pokemonService.pokeSort(p2, p1);
      expect(sortResult).toEqual(1);
    });
  });

  describe("getPokemonRequest", () => {
    const pokemonResponse = {
      abilities: [
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/"
          },
          is_hidden: true,
          slot: 3
        },
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/"
          },
          is_hidden: false,
          slot: 1
        }
      ],
      height: 7,
      id: 1,
      is_default: true,
      name: "bulbasaur",
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        front_shiny_female: null
      },
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          base_stat: 49,
          effort: 0,
          stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
        },
        {
          base_stat: 49,
          effort: 0,
          stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
        },
        {
          base_stat: 45,
          effort: 0,
          stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
        }
      ],
      types: [
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        },
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
        }
      ],
      weight: 69
    };

    it("should return pokemon object after request", (done: DoneFn) => {
      const expectedPokemon = new Pokemon(
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

      pokemonService.getPokemonRequest("1").subscribe(pokemon => {
        expect(pokemon.name.toLowerCase()).toEqual(
          expectedPokemon.name.toLowerCase()
        );
        done();
      });

      httpMock.match(`${PokemonService.BASE_URL}/1`)[1].flush(pokemonResponse);
    });
  });

  describe("getPokemonDescriptionById", () => {
    it("should get the proper pokemon description", (done: DoneFn) => {
      const expectedPokemon = new Pokemon(
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
      pokemonService
        .getPokemonDescriptionById("1", expectedPokemon)
        .subscribe(pokemon => {
          expect(pokemon.description).toEqual("test text");
          done();
        });

      httpMock.match(`${PokemonService.CHARACTARISTIC_URL}/1`)[0].flush({
        flavor_text_entries: [
          {
            language: {
              name: "en"
            },
            flavor_text: "test text"
          },
          {
            language: {
              name: "fr"
            },
            flavor_text: "le french text"
          }
        ]
      });
    });
  });
});
