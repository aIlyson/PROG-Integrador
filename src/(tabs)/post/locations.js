import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Linking, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';

import styles from '../../components/styles';

import Header from '../../components/header';

import locationsData from './datas/locations.json';
import hospitalImage from '../../assets/locations/hospital_reginal_fb_ouricuri_pe.jpg';
import ubsImage from '../../assets/locations/ubs_jose_pimentel.jpg';
import upaeImage from '../../assets/locations/upae_ouricuri_pe.jpg';

const renderImg = {
  '../../assets/locations/hospital_reginal_fb_ouricuri_pe.jpg': hospitalImage,
  '../../assets/locations/ubs_jose_pimentel.jpg': ubsImage,
  '../../assets/locations/upae_ouricuri_pe.jpg': upaeImage,
};

const Locations = ({ navigation }) => {

  const handleAlert = (locationName) => {
    Alert.alert(
      'Opção Indisponível',
      'Desculpe, a opção não disponível no momento.',
    );
  };

  const handleMaps = (address) => {
    const formattedAddress = address.replace(/\s/g, '+');
    const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

    Linking.openURL(url).catch((err) => console.error('Error opening Google Maps:', err));
  };


  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />

      {locationsData.map((location, index) => {
        const imageSource = renderImg[location.image];
        return (
          <Card key={index} containerStyle={styles.cardContainer}>
            <Card.Title style={[styles.cardTitle, { color: '#111', }]}>
              {location.name} - {location.rating} Estrelas
            </Card.Title>
            <Image source={imageSource} style={stylesp.locationImage} resizeMode="cover" />

            <View style={stylesp.detailsContainer}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={location.rating}
                starSize={15}
                fullStarColor={'#FFD700'}
              />
              <Text style={stylesp.locationText}>Avaliação: {location.rating}/5</Text>
            </View>

            <View style={stylesp.detailsContainer}>
              <Icon name="map-marker-alt" size={18} color={'#333'} />
              <Text style={stylesp.locationText}>Localização: {location.address}</Text>
            </View>
            <View style={stylesp.detailsContainer}>
              <Icon name="clock" size={18} color={'#333'} />
              <Text style={stylesp.locationText}>Horário de funcionamento: {location.openingHours}</Text>
            </View>
            <View style={stylesp.detailsContainer}>
              <Icon name="heartbeat" size={18} color={'#333'} />
              <Text style={stylesp.locationText}>Serviços oferecidos: {location.services}</Text>
            </View>
            <View style={stylesp.detailsContainer}>
              <Icon name="phone" size={18} color={'#333'} />
              <Text style={stylesp.locationText}>Contato: {location.contact}</Text>
            </View>

            <View style={stylesp.ButtonsContainer}>
              <Button
                title="Agendar Consulta"
                onPress={() => handleAlert(location.name)}
                buttonStyle={styles.showMoreText}
              // TODO: O botão encontra-se inoperante, uma vez que os estabelecimentos não dispõem desse tipo de consulta.
              />
              <Button
                title="Obter Direções"
                onPress={() => handleMaps(location.address)}
                buttonStyle={styles.showMoreText}
              />
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
};


const stylesp = StyleSheet.create({
  locationImage: {
    height: 250,
    marginVertical: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 10,
    color: '#666',
  },
  ButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
});

export default Locations;

