import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity,Linking } from 'react-native';
import { aardbevingen } from './Ardbevingen';

export default function Bekijken({ route,navigation }) {
    const { id } = route.params;
    const aardbeving = aardbevingen.find(item => item.id === id);

    return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Ard')}>
                    <Image
                        source={require('../../assets/detie.png')}
                        style={styles.navImg}
                    />
                </TouchableOpacity>
                </View>
            <Image
                source={require('../../assets/ardbeedl.jpg')}
                style={styles.imgard}
             />
            </View>
            <Text style={styles.title}>{aardbeving.naam}</Text>
            <Text style={styles.date}>Datum: {aardbeving.datum}</Text>
            <Text style={styles.text}>{aardbeving.tekst}</Text>
            <TouchableOpacity
                style={styles.leesmeer}
                onPress={() => Linking.openURL(aardbeving.link)}
            >
                <View style={styles.leesmeerlink}>
                <Text style={styles.leeslink}>Lees meer</Text>
                <Image source={require('../../assets/detie.png')} style={styles.leesicon}/>
                </View>
                
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop:10,
    },
    date: {
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
    imgcontainer:{
      width:'100%',
      height:350,

    },
    imgard:{
      height:'100%',
      width:'100%'
    },
    leesmeer:{
    marginTop:40,
    width:'100%',

    },
    leeslink:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom: 2,
    },
    leesmeerlink:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems : "fles-start",
        flexDirection: "row",
        height:40,
        gap: 4,
    },
    navImg:{
     marginBottom:10,
     transform: [{ rotate: '180deg' }],
    },
   
});
