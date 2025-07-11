import MoveList from '@/app/components/MoveList';
import { Pokemon } from '@/app/types/interface';
import { notFound } from 'next/navigation';

interface Props {
    params: { id: string };
}

export default async function PokemonDetailPage({ params }: Props) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

    if (!res.ok) return notFound();

    const pokemon: Pokemon = await res.json();

    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-200 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
                <div className="flex text-center">
                    <a
                        href="/"
                        className="text-black hover:text-indigo-600 transition-colors duration-200 text-sm font-medium mb-4"
                    >
                        ← Back to Home
                    </a>
                </div>
                <h1 className="text-5xl font-bold capitalize text-center text-gray-800 mb-6 drop-shadow-sm">
                    {pokemon.name}
                </h1>

                <div className="flex justify-center mb-8">
                    <img
                        src={
                            pokemon.sprites.other?.official_artwork?.front_default ??
                            pokemon.sprites.front_default ??
                            ''
                        }
                        alt={pokemon.name}
                        className="w-56 h-56 object-contain drop-shadow-xl"
                    />
                </div>

                <div className="grid sm:grid-cols-2 gap-8 text-gray-700 text-base">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {pokemon.abilities.map((a) => (
                                <li key={a.ability.name} className="capitalize">
                                    {a.ability.name}
                                    {a.is_hidden && <span className="ml-2 text-sm text-gray-400">(Hidden)</span>}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Type(s)</h2>
                        <div className="flex flex-wrap gap-2">
                            {pokemon.types.map((t) => (
                                <span
                                    key={t.type.name}
                                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium capitalize"
                                >
                                    {t.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <h2 className="text-xl font-semibold mb-2">Stats</h2>
                        <div className="space-y-2">
                            {pokemon.stats.map((s) => (
                                <div key={s.stat.name} className="flex items-center justify-between">
                                    <span className="capitalize w-32">{s.stat.name}</span>
                                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                                        <div
                                            className="h-3 bg-green-400 rounded-full"
                                            style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                                        />
                                    </div>
                                    <span className="w-10 text-right">{s.base_stat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <MoveList moves={pokemon.moves} />
                </div>
            </div>
        </main>
    );
}
