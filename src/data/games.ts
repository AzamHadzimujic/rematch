import type {Match} from '@/types';

export const games: Match[] = [
    {id: '1', result: true, gameduration: 120, date: '2026-10-12', difficulty: 'easy', notes: 'First match'},
    {id: '2', result: false, gameduration: 300, date: '2026-10-13', difficulty: 'medium', notes: 'Second match'},
    {id: '3', result: true, gameduration: 180, date: '2026-10-14', difficulty: 'hard', notes: 'Third match'},
    {id: '4', result: false, gameduration: 240, date: '2026-10-15', difficulty: 'easy', notes: 'Fourth match'},
    {id: '5', result: true, gameduration: 150, date: '2026-10-16', difficulty: 'medium', notes: 'Fifth match'},
];