import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button,Image } from 'react-native';

export default function Home({ navigation }) {
    // Functie om de dag van de week in het Nederlands terug te geven
    const getDag = () => {
        const dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
        const vandaag = new Date().getDay();
        return dagen[vandaag];
    };

    // State voor de inputwaarde
    const [inputValue, setInputValue] = useState('');

    return (
        
        <View style={styles.hero}>
            {/* Inputveld */}
            <View>
                <TextInput
                    style={styles.inputstyle}
                    onChangeText={text => setInputValue(text)}
                    value={inputValue}
                    placeholder="zoeken"
                />
            </View>
            <Text style={styles.dag}>{getDag()}</Text>
            <Text style={styles.stad}>Nijmegen</Text>
            <View style={styles.tempWrapper}>
                {/* Temperatuur */}
                
                <Text style={styles.temp}>20</Text>
                {/* Cles */}
                <Text style={styles.cles}>o</Text>
            </View>
            <View>
            
             <Image
            source={require('../../assets/zoeken.png')}
            width={40}
            height={40}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Ard')}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hero: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#fff',
    },
    inputstyle: {
        width: '100%',
        height: 40,
        backgroundColor: '#F2F1F1',
        borderRadius: 5,
        padding: 5,
    },
    dag: {
        fontSize: 36,
        marginTop: 30,
        fontWeight: 'bold',
    },
    stag: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
    },
    tempWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    temp: {
        fontSize: 96,
    },
    cles: {
        fontSize: 20,
        position: 'absolute',
        top: 10,
        right: 100,
    },
    stad:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:40,

    },
});
