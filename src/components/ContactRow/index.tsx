import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton, Swipeable } from 'react-native-gesture-handler';
import moment from 'moment-timezone';

import { formatGmt } from '../../utils';
import { Contact } from '../../models/contact';
import { Timezone } from '../../models/timezone';

import styles from './styles';

interface Props {
    contact: Contact;
    onPressRow: (contact: Contact) => void;
    onDeleteRow: (contact: Contact) => void;
}

export default function ContactRow(props: Props) {
    const { contact, onPressRow, onDeleteRow } = props;

    function DeleteButton() {
        return (
            <View style={styles.deleteContainer}>
                <BorderlessButton onPress={() => onDeleteRow(contact)}>
                    <Ionicons name="trash" size={20} color='white' />
                </BorderlessButton>
            </View>
        );
    }

    function formatTime(timezone: Timezone) {
        const dateMoment = moment(new Date());
        const time = dateMoment.tz(timezone.zoneName);
        return time.format('HH[h]mm');
    }

    return (
        <Swipeable renderRightActions={DeleteButton}>
            <View style={styles.container} onTouchEnd={() => onPressRow(contact)} >
                <Text style={styles.text}>{contact.name}</Text>
                <Text style={styles.text}>{formatTime(contact.timezone)}</Text>
            </View>
        </Swipeable>
    );

}