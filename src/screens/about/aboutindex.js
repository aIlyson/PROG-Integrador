import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

import { users } from './datas/data';
import TeamCard from './teamcard';

import Header from '../../header';

const AboutLinks = ({ navigation }) => {
  const abrirLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Card containerStyle={styles.cardContainer}>

        <Text style={styles.cardTitle}>Sobre o App</Text>
        <Card.Divider />

        <Text style={stylesp.headerSubtitle}>
          O aplicativo AedesInfo Ouricuri é uma ferramenta desenvolvida por alunos do Instituto Federal, com o propósito de combater e conscientizar a proliferação do mosquito Aedes aegypti no município de Ouricuri. Este aplicativo busca unir tecnologia e conscientização para criar uma comunidade mais resiliente e saudável.
        </Text>

        <View style={stylesp.section}>
          <Text style={stylesp.subtitle}>
            Documentos Relevantes da Secretaria de Saúde de Ouricuri:
          </Text>
          
          <TouchableOpacity onPress={() => abrirLink('https://acrobat.adobe.com/id/urn:aaid:sc:US:530d4769-7ebd-47e3-ab1e-432b1b8d730d')}>
            <Text style={stylesp.linkspdf}>
              <Icon name="file-pdf-o" size={20} color="#257157" /> Ofício 19/2023/ VS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => abrirLink('https://acrobat.adobe.com/id/urn:aaid:sc:US:e63a9dd1-5e7f-4497-946e-e6d69fdd7f2f')}>
            <Text style={stylesp.linkspdf}>
              <Icon name="file-pdf-o" size={20} color="#257157" /> Nota técnica n.º 04 /2018 - DGCDA/SEVS/SES-PE
            </Text>
          </TouchableOpacity>
        </View>

        <View style={stylesp.section}>
          <Text style={stylesp.subtitle}>Equipe de Desenvolvimento:</Text>
          <View style={stylesp.gridContainer}>
            <View style={stylesp.rowContainer}>
              {users.slice(0, 2).map((user, index) => (
                <TeamCard key={index} user={user} />
              ))}
            </View>
            <View style={stylesp.rowContainer}>
              {users.slice(2, 4).map((user, index) => (
                <TeamCard key={index + 2} user={user} />
              ))}
            </View>
            <View style={stylesp.rowContainer}>
              <TeamCard key={users.length - 1} user={users[users.length - 1]} />
            </View>
          </View>
        </View>

        <Image
          source={require('../../assets/resources/secretaria.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity onPress={() => abrirLink('http://www.ouricuri.pe.gov.br/novosite/secretaria/20/')}>
          <Text style={stylesp.link}>Secretaria de Saúde de Ouricuri</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => abrirLink('http://www.ouricuri.pe.gov.br/novosite/')}>
          <Text style={stylesp.link}>Prefeitura Municipal de Ouricuri - PE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => abrirLink('https://www.who.int/')}>
          <Text style={stylesp.link}>Organização Mundial da Saúde (OMS)</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
};

const stylesp = StyleSheet.create({
  headerSubtitle: {
    fontSize: 17,
    marginBottom: 20,
    textAlign: 'center',
    color: '#424b5a',
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  linkspdf: {
    fontSize: 16,
    color: '#424b5a',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#424b5a',
    marginBottom: 10,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default AboutLinks;
