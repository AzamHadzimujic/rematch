export type Difficulty = 'easy' | 'medium' | 'hard';
export type Match = {
id: string;
result: boolean;
gameduration: number; // in seconds
date: string; // '2026-10-12'
difficulty: Difficulty;
notes : string;
};