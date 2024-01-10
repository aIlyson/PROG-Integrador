import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Modal, Alert, Share } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pt'); 

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const navigateToHelp = () => {
    Alert.alert('Ajuda', 'Precisa relatar um problema?\nEntre em contato com o email aluno@ifsertao-pe.edu.br');
  };

    const handleAboutPress = () => {
      Alert.alert('Informações', 'Versão 0.0.3\nDesenvolvido por Alunos de Info 2021.1 IF Campus Ouricuri');
    };

    const handleInvite = async () => {
      try {
        const result = await Share.share({
          message: 'Venha se juntar a mim na luta contra o Aedes Aegypti!',
          // -- colocar link do aplicativo -- //
        });

        (result.action === Share.sharedAction && !result.activityType) ?
          null
          : (result.action === Share.dismissedAction) ?
            null
            : null;
      } catch (error) {
        console.error('Error sharing:', error.message);
      }
    };

    const navigateToLanguage = () => {
      setLanguageModalVisible(true);
    };

    const closeModal = () => {
      setLanguageModalVisible(false);
    };

    const changeLanguage = (language) => {
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
      closeModal();
    };

    return (
      <ScrollView style={styles.container}>
        <View style={stylesp.headerConfig}>
          <TouchableOpacity style={stylesp.backButton} onPress={handleHomePress}>
            <Icon name="arrow-left" size={24} color="#257157" />
          </TouchableOpacity>
          <Card.Title style={styles.cardTitle}>Configurações</Card.Title>
        </View>
        <Card.Divider />

        <TouchableOpacity style={stylesp.cardItem} onPress={navigateToLanguage}>
          <Text style={styles.cardText}>
            <Icon name="globe" size={21} /> Idioma
          </Text>
        </TouchableOpacity>

        {/* -- modal -- */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={languageModalVisible}
          onRequestClose={closeModal}
        >
          <View style={stylesp.modalContainer}>
            <View style={stylesp.modalContent}>
              <Text style={stylesp.modalTitle}>Escolha o idioma:</Text>
              <TouchableOpacity onPress={() => changeLanguage('pt')} style={stylesp.languageButton}>
                <Text style={stylesp.languageButtonText}>Português</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeLanguage('en')} style={stylesp.languageButton}>
                <Text style={stylesp.languageButtonText}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal} style={stylesp.closeButton}>
                <Text style={stylesp.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Card.Divider />

        <TouchableOpacity style={stylesp.cardItem} onPress={navigateToHelp}>
          <Text style={styles.cardText}>
            <Icon name="question-circle" size={21} /> Ajuda
          </Text>
        </TouchableOpacity>
        <Card.Divider />

        <TouchableOpacity style={stylesp.cardItem} onPress={handleAboutPress}>
          <Text style={styles.cardText}>
            <Icon name="info-circle" size={21}/> Informações
          </Text>
        </TouchableOpacity>
        <Card.Divider />

        <TouchableOpacity style={stylesp.cardItem} onPress={handleInvite}>
          <Text style={styles.cardText}>
            <Icon name="user-friends" size={21} /> Convidar amigos
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const stylesp = StyleSheet.create({
    headerConfig: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      resizeMode: 'cover',
      paddingBottom: 22,
      marginTop: 50,
      marginRight: 20,
    },
    backButton: {
      alignSelf: 'flex-start',
      marginLeft: 15,
    },
    cardItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginVertical: 10,
      padding: 25,
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    modalContent: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 20,
      width: '70%',
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    languageButton: {
      width: '80%',
      backgroundColor: '#257157',
      color: '#FFF',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10,
      padding: 12,
      borderRadius: 7,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    languageButtonText: {
      color: '#FFF',
      fontSize: 18,
      textAlign: 'center',
    },
    closeButton: {
      width: '80%',
      backgroundColor: '#FFF',
      padding: 10,
      marginTop: 10,
      borderWidth: 2,
      borderColor: '#06986B',
      borderRadius: 5,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    closeButtonText: {
      fontSize: 18,
      color: '#06986B',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default SettingsScreen;
