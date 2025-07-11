export interface Pokemon {
    abilities: AbilityWrapper[];
    base_experience: number;
    cries: Cries;
    forms: NamedAPIResource[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: PastAbility[];
    past_types: any[];
    species: NamedAPIResource;
    sprites: Sprites;
    stats: Stat[];
    types: TypeSlot[];
    weight: number;
}

export interface AbilityWrapper {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}

export interface Cries {
    latest: string;
    legacy: string;
}

export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
}

export interface HeldItem {
    item: NamedAPIResource;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    rarity: number;
    version: NamedAPIResource;
}

export interface Move {
    move: NamedAPIResource;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    order: number | null;
    version_group: NamedAPIResource;
}

export interface PastAbility {
    abilities: AbilityWrapper[];
    generation: NamedAPIResource;
}

export interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: SpriteResource;
        home: SpriteResource & ShinySprites;
        official_artwork: ShinySprites;
        showdown: SpriteResource & ShinySprites;
    };
    versions: {
        [generation: string]: {
            [game: string]: Partial<Sprites> & {
                animated?: Partial<Sprites>;
            };
        };
    };
}

export interface SpriteResource {
    front_default: string | null;
    front_female: string | null;
}

export interface ShinySprites {
    [x: string]: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}

export interface TypeSlot {
    slot: number;
    type: NamedAPIResource;
}


export interface PokemonCardProps {
    name: string;
    id: number;
}

export interface MoveListProps {
    moves: Move[];
}

export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}