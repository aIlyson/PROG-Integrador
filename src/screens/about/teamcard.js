import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TeamCard = ({ user }) => {
  const openInstagramProfile = () => {
    const instagramUrl = `https://www.instagram.com/${user.instagramUsername}/`;
    Linking.openURL(instagramUrl);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openInstagramProfile}>
      <View style={styles.memberCard}>
        <Icon name={user.icon} size={30} color="#FFF" />
        <Text style={styles.memberName}>{user.name}</Text>
        <Text style={styles.memberRole}>{user.role}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  memberCard: {
    backgroundColor: '#18604A', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5.55,
    shadowRadius: 3.84,
    elevation: 25,
    borderWidth: 1,
    borderColor: 'rgb(37,113,87)',
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#FFF',
  },
  memberRole: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default TeamCard;
