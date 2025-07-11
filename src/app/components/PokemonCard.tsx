'use client';

import Link from 'next/link';
import { PokemonCardProps } from '../types/interface';

export default function PokemonCard({ name, id }: PokemonCardProps) {
    return (
        <Link href={`/pokemon/${id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 p-4 text-center cursor-pointer hover:scale-105">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={name}
                    className="w-20 h-20 mx-auto"
                />
                <p className="mt-3 text-lg font-semibold capitalize text-gray-700">{name}</p>
            </div>
        </Link>
    );
}
