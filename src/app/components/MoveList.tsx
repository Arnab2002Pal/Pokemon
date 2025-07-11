'use client';
import { useState } from 'react';
import { MoveListProps } from '../types/interface';


export default function MoveList({ moves }: MoveListProps) {
    const [showAll, setShowAll] = useState(false);

    const displayedMoves = showAll ? moves : moves.slice(0, 10);

    return (
        <div className="sm:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Top Moves</h2>
            <div
                className={`flex flex-wrap gap-2 transition-all duration-300 ${!showAll ? 'max-h-[120px] overflow-hidden' : ''
                    }`}
            >
                {displayedMoves.map((m) => (
                    <span
                        key={m.move.name}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm capitalize"
                    >
                        {m.move.name}
                    </span>
                ))}
            </div>

            {moves.length > 10 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-3 text-sm text-indigo-600 hover:underline focus:outline-none"
                >
                    {showAll ? 'Show Less' : 'Show All'}
                </button>
            )}
        </div>
    );
}
