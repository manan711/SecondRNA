/* eslint-disable prettier/prettier */
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21 - ES12
            </Text>
        </View>
        <Image
            source={{
                uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            }}
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias maxime necessitatibus totam saepe molestias soluta doloribus ducimus illum dolore? Aliquid repellat dicta blanditiis eveniet consequuntur aspernatur voluptatibus, fugiat sed?
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://twitter.com/Manan711')}
            >
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#8D3DAF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
            },
        shadowColor: 'black',
        shadowOpacity: 0.5,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 190,
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 0.5,
    },
});
