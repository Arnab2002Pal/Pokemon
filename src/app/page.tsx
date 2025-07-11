'use client';

import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';

interface PokemonListResponse {
  results: { name: string; url: string }[];
}

export default function HomePage() {
  const [pokemons, setPokemons] = useState<{ name: string; id: number }[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
      const data: PokemonListResponse = await res.json();

      const parsed = data.results.map((p) => {
        const id = parseInt(p.url.split('/')[6]);
        return { name: p.name, id };
      });

      setPokemons(parsed);
    }

    fetchData();
  }, []);

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Pokémon Explorer</h1>

        <SearchBar value={search} onChange={setSearch} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {filtered.map((pokemon) => (
            <PokemonCard key={pokemon.id} name={pokemon.name} id={pokemon.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
