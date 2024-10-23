import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contact = [
        {
            "id": 1,
            "name": "Raman sethi",
            "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
            "status": "active"
        },
        {
            "id": 2,
            "name": "Aryan Sharma",
            "avatar": "https://randomuser.me/api/portraits/men/2.jpg",
            "status": "inactive"
        },
        {
            "id": 3,
            "name": "Anjali Verma",
            "avatar": "https://randomuser.me/api/portraits/women/3.jpg",
            "status": "active"
        },
        {
            "id": 4,
            "name": "Rohit Kumar",
            "avatar": "https://randomuser.me/api/portraits/men/4.jpg",
            "status": "away"
        },
        {
            "id": 5,
            "name": "Sneha Singh",
            "avatar": "https://randomuser.me/api/portraits/women/5.jpg",
            "status": "active"
        }
    ]
 
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false} >
                {contact.map(({ id, name, avatar, status }) => (
                    <View key={id} style={styles.userCard}>
                        <Image style={styles.img} source={
                            {
                                uri: avatar
                            }
                        } />
                        <View>

                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4

    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:4,
        backgroundColor:'black',
        padding:9,
        borderRadius:14
    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 60,
        marginRight: 14
    }
    ,
    userName: {
        fontSize:16,
        fontWeight:'600'

    },
    userStatus: {
            fontSize:12
    }

})
export default ContactList
