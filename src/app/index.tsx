import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MatchCard from '@/components/MatchCard';
import { matches } from '@/data/matches';
import { useTheme } from '@/hooks/use-theme';
import { FontSize, Radius, Spacing } from '@/constants/theme';

function SummaryBox({ value, label }: { value: string; label: string }) {
  const theme = useTheme();
  return (
    <View style={[styles.box, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <Text style={[styles.boxValue, { color: theme.text }]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={[styles.boxLabel, { color: theme.muted }]}>{label}</Text>
    </View>
  );
}

export default function Home() {
  const insets = useSafeAreaInsets();

  // calculated during render, not in state
  const total = matches.length;
  const wins = matches.filter((m) => m.result).length;
  const winRate = total ? Math.round((wins / total) * 100) : 0;
  const totalSeconds = matches.reduce((sum, m) => sum + m.duration, 0);
  const minutes = Math.round(totalSeconds / 60);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: Spacing.md,
        gap: Spacing.md,
        paddingBottom: Spacing.md + insets.bottom,
      }}
    >
      <View style={styles.summaryRow}>
        <SummaryBox value={String(total)} label="matches" />
        <SummaryBox value={`${winRate}%`} label="win rate" />
        <SummaryBox value={`${minutes} min`} label="time played" />
      </View>

      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  summaryRow: { flexDirection: 'row', gap: Spacing.sm },
  box: {
    flex: 1,
    borderWidth: 1,
    borderRadius: Radius.md,
    padding: Spacing.md,
    alignItems: 'center',
  },
  boxValue: { fontSize: FontSize.title, fontWeight: '700' },
  boxLabel: { fontSize: FontSize.small },
});