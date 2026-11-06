import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import type { Match } from '@/types';
import { useTheme } from '@/hooks/use-theme';
import { FontSize, Radius, Spacing } from '@/constants/theme';
import { formatDuration } from '@/utils/format';

type Props = {
  match: Match;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export default function MatchCard({ match, style, onPress }: Props) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.border },
        pressed && styles.pressed,
        style, // last, so the screen can set the width
      ]}
    >
      <View style={[styles.photo, { backgroundColor: theme.border }]}>
        <Text style={{ color: theme.muted, fontSize: FontSize.small }}>Screenshot</Text>
        <Text style={[styles.badge, { backgroundColor: theme.primary, color: theme.onPrimary }]}>
          {match.difficulty}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={[styles.title, { color: match.result ? theme.win : theme.loss }]}>
          {match.result ? 'Win' : 'Loss'}
        </Text>
        <Text style={[styles.meta, { color: theme.muted }]}>
          {match.date} · {formatDuration(match.duration)}
        </Text>
        <Text style={{ color: theme.text, fontSize: FontSize.body }} numberOfLines={1}>
          {match.notes}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderRadius: Radius.md, overflow: 'hidden' },
  pressed: { opacity: 0.8 },
  photo: { width: '100%', aspectRatio: 16 / 9, alignItems: 'center', justifyContent: 'center' },
  badge: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
    fontSize: FontSize.small,
    fontWeight: '700',
    overflow: 'hidden',
  },
  info: { padding: Spacing.md, gap: Spacing.xs },
  title: { fontSize: FontSize.title, fontWeight: '700' },
  meta: { fontSize: FontSize.small },
});