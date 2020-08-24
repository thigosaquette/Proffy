import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import nofavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri : 'http://github.com/thigosaquette.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Thiago Saquette</Text>
                    <Text style={styles.subject}>Física</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Bio personalizada para satizfazer o teste, satisfez ?
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutlineIcon}/>*/}
                        <Image source={nofavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}> Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;