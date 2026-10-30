import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Match} from '@/types';

type MatchCardProps = {
    match: Match;
};

export default function MatchCard({match}: MatchCardProps) {
    return (
        <Pressable
            onPress={() => console.log('Open', match.id)}
        style={({pressed}) => [styles.card, pressed && styles.pressed]}
        >{/*Title and details*/}
        </Pressable>
    );
}

const styles = StyleSheet.create({
card: { borderRadius: 12, overflow: 'hidden', backgroundColor: '#E6EEF7' },
pressed: { opacity: 0.6 },
});
