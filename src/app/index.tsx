// src/app/index.tsx
import { ScrollView, Text } from 'react-native';
import MatchCard from '@/components/MatchCard';
import {matches} from '@/data/matches';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: '600' }}>
        {matches.length} matches
      </Text>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </ScrollView>
  );
}