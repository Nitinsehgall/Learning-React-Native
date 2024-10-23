import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Orange</Text>
                </View>
             
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        // padding:8
        width:'100%'
    },
    card: {
        flex:1,
        width: 100,
        height: 100,
        display: 'flex',
        margin: 8,
        borderRadius: 4,
        justifyContent:'center',
        alignItems:'center'

    },
    cardOne: {
        backgroundColor: 'red'
    },
    cardTwo: {
        backgroundColor: 'green'
    },
    cardThree: {
        backgroundColor: 'blue'
    },
    cardFour:{
        backgroundColor:'orange'
    }
})
export default FlatCards