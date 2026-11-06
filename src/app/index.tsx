// src/app/index.tsx
import { ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MatchCard from '@/components/MatchCard';
import { matches } from '@/data/matches';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

export default function Home() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        padding: Spacing.md,
        gap: Spacing.md,
        paddingBottom: Spacing.md + insets.bottom,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '600', color: theme.text }}>
        {matches.length} matches
      </Text>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </ScrollView>
  );
}