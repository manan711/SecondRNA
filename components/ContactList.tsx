/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Manan Patel',
            status: 'single',
            imageUrl: 'https://pbs.twimg.com/profile_images/1279333636618063872/xECfaGGH_400x400.jpg',
        },
        {
            uid: 2,
            name: 'Chirag Panchal',
            status: 'single',
            imageUrl: 'https://instagram.fykz1-1.fna.fbcdn.net/v/t51.2885-19/336322468_748759560297086_4757161065488444278_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fykz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=KEkyz5kO468AX8Md1sd&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBf5l8HoYKhqE8RiJ34deO2Ihqx-X9V89hDzwL0sHvM1w&oe=646AB048&_nc_sid=f70a57',
        },
        {
            uid: 3,
            name: 'Soham Munjapara',
            status: 'complicated',
            imageUrl: 'https://instagram.fykz1-2.fna.fbcdn.net/v/t51.2885-19/190512873_859888064907826_2468637731152658769_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fykz1-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QVC6DsRj9IQAX_YJ-MU&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCOjNYb4nOTiNpxSHYtH3E_PAlvJxp3K5VrX5qkD-FSyA&oe=646ABEBC&_nc_sid=f70a57',
        },
        {
            uid: 4,
            name: 'Shubham Trivedi',
            status: 'commited',
            imageUrl: 'https://media.licdn.com/dms/image/C4D03AQFU6pqKNTovEQ/profile-displayphoto-shrink_200_200/0/1643614065608?e=1689811200&v=beta&t=IJBWhpGjyGkblA6UK4lCjlFKDVEmVgbnqiisOUOHFHY',
        },
        {
            uid: 5,
            name: 'Parth Brahmbhatt',
            status: 'playboy',
            imageUrl: 'https://instagram.fykz1-1.fna.fbcdn.net/v/t51.2885-19/96936603_553286135381297_8874009892235509760_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fykz1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=waKbLmSBBKIAX9txrov&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBSbNP6CWu5EcgeI4vqOTaFqZIH1impnS0aprAlhTRWEA&oe=646AE21B&_nc_sid=f70a57',
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl,
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#03C6C7',
        padding: 8,
        borderRadius: 20,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
    },
    userStatus: {
        fontSize: 12,
    },
});
