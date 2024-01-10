import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, FlatList, Modal, Share, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Card, ListItem, Text, SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../../components/styles';

import Header from '../../components/header';

import jsonData from './datas/data.json';
import bairrosData from './datas/bairros.json';
import { filterResults } from './functions/filter';

const News = () => {
  const navigation = useNavigation();
  const [tag, setTag] = useState('prevencao');
  const [selectedCase, setSelectedCase] = useState(null);
  const { articles, educationalVideos, aggravatedCases } = jsonData;

  const [visibleResults, setVisibleResults] = useState(bairrosData.slice(0, 3));
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const newVisibleResults = filterResults(bairrosData, selectedCategory, searchText);
    setVisibleResults(newVisibleResults);
  }, [searchText, selectedCategory]);

  
  const [videoLoading, setVideoLoading] = useState(false);

  const handleVideoError = async () => {
    try {
      setVideoLoading(true);

      await new Promise(resolve => setTimeout(resolve, 3000));

      Alert.alert('Video Indisponível', 'Desculpe, o vídeo não está disponível no momento. Conexão instável');
    } finally {
      setVideoLoading(false);
    }
  };

  const showMoreResults = () => {
    setVisibleResults(bairrosData);
    setModalVisible(true);
  };

  const openModal = (caseName) => {
    setSelectedCase(caseName);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
          <Icon name="newspaper" size={20} color="#257157" /> Artigos
        </Card.Title>
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={stylesp.listItemTitle}>{item.title}</ListItem.Title>
                <ListItem.Subtitle style={stylesp.listItemSubtitle}>
                  {item.content}
                </ListItem.Subtitle>
                <View style={stylesp.subtitleContainer}>
                  <View style={stylesp.authorContainer}>
                    <Icon name="user" size={15} color="#333" style={styles.icon} />
                    <ListItem.Subtitle style={stylesp.listItemSubtitle}>
                      Autor: {item.author}
                    </ListItem.Subtitle>
                  </View>
                  <View style={stylesp.dateContainer}>
                    <Icon name="calendar" size={15} color="#333" style={styles.icon} />
                    <ListItem.Subtitle style={stylesp.listItemSubtitle}>
                      Data: {item.date}
                    </ListItem.Subtitle>
                  </View>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
        />
      </Card>

      {/* TODO: dois videos eram para ser apresentados, porém react video retorna 'Cannot read property 'Constants' of null" */}
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
          <Icon name="video" size={20} color="#257157" /> Vídeos educativos
        </Card.Title>
        <FlatList
          data={educationalVideos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={handleVideoError} disabled={videoLoading}>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={stylesp.listItemTitle}>{item.title}</ListItem.Title>
                  <ListItem.Subtitle style={stylesp.listItemSubtitle}>
                    Duração: {item.duration}
                  </ListItem.Subtitle>
                </ListItem.Content>
                {videoLoading && (
                  <ActivityIndicator
                    size="small"
                    color="#257157"
                    style={{ marginRight: 10 }}
                  />
                )}
              </ListItem>
            </TouchableOpacity>
          )}
        />
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
          <Icon name="chart-pie" size={20} color="#257157" /> Agravos
        </Card.Title>
        <ListItem.Subtitle style={stylesp.listItemSubtitle}>
          Casos suspeitos das doenças transmitidas pelo Aedes Aedypti em 2022.
        </ListItem.Subtitle>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <PieChart
            data={Object.entries(aggravatedCases).map((item, index) => ({
              name: item[0],
              population: item[1].discarded,
              color: `rgba(6, 130, 107, 0.${index + 2})`,
              legendFontColor: '#757575',
              legendFontSize: 14,
              percent: ((item[1].discarded / item[1].total) * 100).toFixed(2),
            }))}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#FFF',
              backgroundGradientFrom: '#FFF',
              backgroundGradientTo: '#FFF',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(6, 152, 107, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(117, 117, 117, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </ScrollView>

        <FlatList
          data={Object.entries(aggravatedCases)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openModal(item[0])}>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={stylesp.listItemTitle}>{item[0]}</ListItem.Title>
                  <ListItem.Subtitle style={stylesp.listItemSubtitle}>
                    Confirmado: {item[1].confirmed} | Descartado: {item[1].discarded}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          )}
        />
      </Card>

      {/* -- modal -- */}
      <Modal visible={selectedCase !== null} animationType="slide">
        <View style={stylesp.modalContainer}>
          {selectedCase && aggravatedCases[selectedCase] ? (
            <>
              <View style={stylesp.modalHeader}>
                <Text style={stylesp.modalTitle}>Detalhes para {selectedCase}</Text>
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text style={stylesp.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
              <Card.Divider />

              <Text style={stylesp.listItemSubtitle}>
                Neste cenário específico de {selectedCase} em Ouricuri-Pe, temos o seguinte panorama:
              </Text>

              <View style={stylesp.tableContainer}>
                <View style={stylesp.tableRow}>
                  <Text style={stylesp.tableHeader}>Casos Confirmados</Text>
                  <Text style={stylesp.tableHeader}>Casos Descartados</Text>
                </View>
                <View style={stylesp.tableRow}>
                  <Text style={stylesp.tableCell}>{aggravatedCases[selectedCase].confirmed}</Text>
                  <Text style={stylesp.tableCell}>{aggravatedCases[selectedCase].discarded}</Text>
                </View>
              </View>
              <Text style={stylesp.listItemSubtitle}>
                Esses números refletem a situação atual de {selectedCase}. O total de casos confirmados é {aggravatedCases[selectedCase].confirmed}, e {aggravatedCases[selectedCase].discarded} casos foram descartados após avaliação detalhada.
              </Text>
            </>
          ) : (
            <Text style={stylesp.modalTitle}>Caso não encontrado</Text>
          )}
        </View>
      </Modal>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
          <Icon name="table" size={20} color="#257157" /> Resultados por bairros
        </Card.Title>
        <FlatList
          data={visibleResults.slice(0, 3)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={stylesp.listItemTitle}>{item.bairro}</ListItem.Title>
                <ListItem.Subtitle style={stylesp.listItemSubtitle}>
                  Casos Notificados: {item.casosNotificados}
                </ListItem.Subtitle>
              </ListItem.Content>
              <TouchableOpacity
                onPress={() => {
                  const message = `Dados importantes: ${item.casosNotificados} casos do Aedes aegypti em ${item.bairro}, Ouricuri. Cuide-se!`;
                  Share.share({
                    message,
                  });
                }}
              >
                <Icon name="share" size={20} color="#257157" />
              </TouchableOpacity>
            </ListItem>
          )}
        />
        {bairrosData.length > 3 && (
          <TouchableOpacity onPress={showMoreResults}>
            <Text style={styles.showMoreText}>Mostrar Mais</Text>
          </TouchableOpacity>
        )}
      </Card>

      {/* --modal-- */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={stylesp.modalContainer}>
          <View style={stylesp.modalHeader}>
            <Text style={stylesp.modalTitle}>Todos os Resultados de Bairros</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={stylesp.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
          <Card containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>
              <Icon name="search" size={20} color="#257157" /> Pesquisar seu bairro
            </Card.Title>
            <SearchBar
              placeholder="Digite o nome do bairro..."
              onChangeText={text => setSearchText(text)}
              value={searchText}
              platform="default"
              inputContainerStyle={stylesp.searchInputContainer}
              containerStyle={stylesp.searchContainer}
            />
          </Card>
          <FlatList
            data={visibleResults}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={stylesp.listItemTitle}>{item.bairro}</ListItem.Title>
                  <ListItem.Subtitle style={stylesp.listItemSubtitle}>
                    Casos Notificados: {item.casosNotificados}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <TouchableOpacity
                  onPress={() => {
                    const message = `Dados importantes: ${item.casosNotificados} casos do Aedes aegypti em ${item.bairro}, Ouricuri. Cuide-se!`;
                    Share.share({
                      message,
                    });
                  }}
                >
                  <Icon name="share" size={20} color="#257157" />
                </TouchableOpacity>
              </ListItem>
            )}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

const stylesp = StyleSheet.create({
  listItemTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  listItemSubtitle: {
    fontSize: 16,
    color: '#757575',
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 60,
  },
  // Modal
  modalContainer: {
    padding: 10,
    backgroundColor: '#FFF',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#06986B',
    fontWeight: 'bold',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginBottom: 10,
  },
  searchInputContainer: {
    backgroundColor: '#e0e0e0',
  },
  tableContainer: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#F2F2F2F',
  },
  tableHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});

export default News;
