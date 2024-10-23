import { Button, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ActionCard = () => {

    function openWebsite(website: string) {

        Linking.openURL(website)

    }
    return (
        <View >
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text style={styles.headerContainer}>Header container</Text>
                <Image source={
                    {
                        uri: 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'
                    }} style={styles.img}></Image>
                <Text style={styles.text}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.

                </Text>
                <TouchableOpacity onPress={() => openWebsite('https://en.wikipedia.org/wiki/Hawa_Mahal')}>
                    <Text style={styles.link}>Read more</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        color: 'black'

    },
    card: {
        marginHorizontal: 16,
        backgroundColor: '#fef5e7',
        marginVertical: 10
        ,
    },
    headingText: {


        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,



    },
    text: {
        color: 'black'
    },
    link: {
        fontWeight: 'bold',
        color: 'red'
    },
    elevatedCard: {
        elevation: 13,
    },
    img: {
        height: 230
    }
})
export default ActionCard
