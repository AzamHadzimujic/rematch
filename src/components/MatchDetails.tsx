import {ScrollView, Text, View} from 'react-native';
import type {Match} from '@/types';

type Props = {
    match: Match;
};

export default function MatchDetails({match}: Props) {
    return (
        <ScrollView>
             <View style={{ padding: 16, gap: 8 }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>{match.id}</Text>
        <Text style={{ fontSize: 16 }}>Area: {match.result}</Text>
        <Text style={{ fontSize: 16 }}>Distance: {match.duration} seconds</Text>
        <Text style={{ fontSize: 16 }}>Difficulty: {match.difficulty}</Text>
        {match.notes ? (
          <Text style={{ fontSize: 16, lineHeight: 22 }}>{match.notes}</Text>
        ) : null}
      </View>
    </ScrollView>
    );
}