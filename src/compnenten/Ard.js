import { Text, View, TextInput, StyleSheet, Image, ScrollView, Button,TouchableOpacity } from 'react-native';
export default function ard({ navigation }){
    return(
        <>
        <View style={styles.hero}>
           <Text style={styles.titel}> 
            Aardbevingen in Nederland
           </Text>


           <ScrollView style={styles.scrollView}>
                <View style={styles.mainard}>
                    {Array.from({ length: 16 }).map((_, index) => (
                        <View key={index} style={styles.aardbevingen}>
                            <View style={styles.ardTitle}>
                            <Text style={styles.itemTitle}>Titel {index + 1}</Text>
                            <Text style={styles.itemDate}>Datum: 2024-05-2{index}</Text>
                            </View>
                            <Text style={styles.ardtekst}>
                            Aardbevingen zijn trillingen in de aardkorst door plotselinge
                            energievrijkomingen, vaak langs breuklijnen. Ze variëren van
                            licht tot verwoestend en komen vooral voor bij tektonische
                            platen. In Nederland zijn lichte bevingen door gaswinning soms voelbaar.
                            </Text>
                            <View style={styles.ardlink}>
                                <TouchableOpacity style={styles.bekijken}>
                                    <Image
                                    source={require('../../assets/detie.png')}
                                    style={styles.zoekenicon}
                                    />
                                    <Text>Bekijken</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

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
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    hero: {
        backgroundColor: '#fff',
        height:'100%'

    },
    titel:{
        fontWeight:'bold',
        marginBottom:10,
    },
    aardbevingen:{
      backgroundColor:'#F2F1F1',
      width:'100%',
      borderRadius:10,
      padding:10,

    },
    nav: {
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
        marginTop:10,
    },
    mainard:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap:20,

    },
    ardTitle:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection:'row',

    },
    itemTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    ardtekst:{
     marginTop:10,
    letterSpacing:0.5,

    },
    ardlink:{
    marginTop:10,

    },
    bekijken:{
        display: 'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
        flexDirection:'row',
        gap:5,
    },

})