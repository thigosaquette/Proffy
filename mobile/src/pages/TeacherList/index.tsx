import React from 'react';
import { Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"/>
        </View>
    );
}

export default TeacherList;