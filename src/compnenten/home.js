import React, { useState,useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    // Functie om de dag van de week in het Nederlands terug te geven
    const getDag = () => {
        const dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
        const vandaag = new Date().getDay();
        return dagen[vandaag];
    };
    useEffect(() => {
        const fetchWeatherData = async () => {
            const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'b3b320cdf5mshbd6303ec40b5389p15f1e4jsn9739d2b3b3b2',
                    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json(); // Gebruik `json()` in plaats van `text()` als je JSON-data verwacht
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeatherData();
    }, []); // Lege afhankelijkheden-array zorgt ervoor dat de useEffect slechts één keer wordt uitgevoerd bij het laden van de component



    // State voor de inputwaarde
    const [inputValue, setInputValue] = useState('');
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        const fetchWeatherData = async () => {
            const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'b3b320cdf5mshbd6303ec40b5389p15f1e4jsn9739d2b3b3b2',
                    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json(); // Verwacht JSON-data
                setWeather(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeatherData();
    }, []);
    const fahrenheitToCelsius = (tempF) => {
        return ((tempF - 32) * 5 / 9).toFixed(2);
    };
    return (
        <View style={styles.hero}>
            {/* Inputveld */}
            <View style={styles.zoekenform}>
                <TextInput
                    style={styles.inputstyle}
                    onChangeText={text => setInputValue(text)}
                    value={inputValue}
                    placeholder="zoeken"
                />
                <TouchableOpacity style={styles.zoekenicon}>
                    <Image
                        source={require('../../assets/zoeken.png')}
                        style={styles.zoekenicon}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.dag}>{getDag()}</Text>
            <Text style={styles.stad}>{weather?.name || 'Laden...'}</Text>
            <View style={styles.tempWrapper}>
                {/* Temperatuur */}
                <Text style={styles.temp}>{weather ? fahrenheitToCelsius(weather.main.temp) : 'Laden...'}°C</Text>
                {/* Cles */}
               
            </View>
            <View style={styles.weerimg}>
                <Image
                    source={require('../../assets/weerimg.png')}
                    width={30}
                    height={30}
                />
            </View>

            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.navigate('Ard')}>
                    <Image
                        source={require('../../assets/ardbeving.png')}
                        style={styles.navImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../../assets/weer.png')}
                        style={styles.navImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../../assets/nav.png')}
                        style={styles.navImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.weerinfo}>
                <View  style={styles.infoicon}>
                <Image
                        source={require('../../assets/windicon.png')}
                        style={styles.navImage}
                    />
                    <Image
                        source={require('../../assets/nat.png')}
                        style={styles.navImage}
                    />
                    <Image
                        source={require('../../assets/snel.png')}
                        style={styles.navImage}
                    />
                </View>
                <View style={styles.infocijfers}>
                     <Text style={styles.infonum}>9km/h</Text>
                     <Text style={styles.infonum}>25%</Text>
                     <Text style={styles.infonum}>1,7km</Text>
                </View>

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
        position: "relative",
        height: '100%',
    },
    inputstyle: {
        width: '100%',
        height: 40,
        backgroundColor: '#F2F1F1',
        borderRadius: 5,
        padding: 5,
    },
    dag: {
        fontSize: 30,
        marginTop: 30,
        fontWeight: 'bold',
    },
    stag: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    tempWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    temp: {
        fontSize: 80,
    },
    cles: {
        fontSize: 20,
        position: 'absolute',
        top: 10,
        right: 130,
    },
    stad: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
    },
    nav: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: "#F2F1F1",
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row', 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    navImage: {
        width: 40,
        height: 40,
    },
    weerimg:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    weerinfo:{
        marginTop:25,

    },
    infoicon:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      padding:5,
    },
    infocijfers:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:5,
    },
    infonum:{
        fontWeight:'bold',
        fontSize:20,

    },
    zoekenform:{
     position:"relative"
    },
    zoekenicon:{
      position:'absolute',
      top:4,
      right:5,
      width:25,
      height:25,
    },
});