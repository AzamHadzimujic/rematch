import { StyleSheet, Text, View } from 'react-native';
import type { Match } from '@/types';
import { useTheme } from '@/hooks/use-theme';
import { FontSize, Radius, Spacing } from '@/constants/theme';
import { formatDuration } from '@/utils/format';

function Row({ label, value }: { label: string; value: string }) {
  const theme = useTheme();
  return (
    <View style={[styles.row, { borderBottomColor: theme.border }]}>
      <Text style={[styles.label, { color: theme.muted }]}>{label}</Text>
      <Text style={[styles.value, { color: theme.text }]}>{value}</Text>
    </View>
  );
}

export default function MatchDetails({ match }: { match: Match }) {
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.photo, { backgroundColor: theme.border }]}>
        <Text style={{ color: theme.muted, fontSize: FontSize.small }}>Screenshot</Text>
      </View>
      <Text style={[styles.title, { color: match.result ? theme.win : theme.loss }]}>
        {match.result ? 'Win' : 'Loss'}
      </Text>
      <Row label="Date" value={match.date} />
      <Row label="Duration" value={formatDuration(match.duration)} />
      <Row label="Difficulty" value={match.difficulty} />
      <Row label="Notes" value={match.notes} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%', maxWidth: 600, alignSelf: 'center', gap: Spacing.md },
  photo: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: FontSize.hero, fontWeight: '700' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.md,
    paddingBottom: Spacing.sm,
    borderBottomWidth: 1,
  },
  label: { fontSize: FontSize.body },
  value: { fontSize: FontSize.body, flexShrink: 1, textAlign: 'right' },
});