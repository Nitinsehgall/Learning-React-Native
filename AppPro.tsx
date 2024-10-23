import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'


const AppPro = () => {
    return (
        <SafeAreaView >
            <ScrollView>
                <FlatCards />
                <ElevatedCards/>
                <FancyCards/>
                <ContactList/>
                <ActionCard/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: 'blue'
    }
})
export default AppPro

