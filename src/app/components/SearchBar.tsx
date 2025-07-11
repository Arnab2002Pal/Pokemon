'use client';

import { SearchBarProps } from "../types/interface";

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="mb-8 flex justify-center">
            <input
                type="text"
                placeholder="Search Pokémon"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full sm:w-96 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            />
        </div>
    );
}
