import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.text}>Swipe</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.text}>To</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.text}>Right</Text>
          
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.text}>❤️</Text>
           
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.text}>💘</Text>
          
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.text}>😉</Text>
            
        </View>
            </ScrollView>
        </View>

    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
       flex:1,
        padding:8,
    },
    card:{

        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        borderRadius:4,
        color:'black'
        
    },
    cardElevated:{
        backgroundColor:'white',
        color:'black',
        elevation:10,
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowColor:'red'
    },
    text:{
        color:"black"
    }

})