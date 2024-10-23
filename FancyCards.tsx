import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = ({ name = "Hawa Mahal" }) => {
    return (
        <View>
            <Text style={styles.headingText}>FancyCards</Text>
            <View style={[styles.card, styles.CardElevated]}>
                <Image source={{
                    uri: 'https://media.istockphoto.com/id/510978989/photo/hawa-mahal-palace-in-jaipur-rajasthan.jpg?s=612x612&w=0&k=20&c=-2ijZ9kpofMH1jJhaxFF1hJ5oqjdXfOtIu0BlwXwdls='

                }} style={styles.img}></Image>

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>
                        {name}
                    </Text>
                    <Text style={styles.cardLabel}>
                        Pink City,Jaipur
                    </Text>
                    <Text style={styles.cardDesc}>
                        Mahal is a place in the city of jaipur ,India Built from red and pinnk sandstone ,it is on the edge of the City palace.
                    </Text>
                    <Text style={styles.cardFooter}>
                        12 mins away
                    </Text>

                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        // display:'flex',

    },
    CardElevated: {
        backgroundColor: 'white',

        elevation: 2,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    img: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 16,


    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        color: 'black',
        marginHorizontal: 16
    },
    cardDesc: {
        color: 'black',
        marginBottom: 6

    },
    cardLabel: {
        color: 'black',
        fontSize: 16,
        marginBottom: 6

    },
    cardFooter: {
        color: 'black'

    },
    cardTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 6
    }
})
export default FancyCards;
