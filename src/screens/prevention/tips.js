import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../../components/styles';

import Header from '../../components/header';

const Preventions = ({ navigation }) => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>Dicas de saúde</Card.Title>
        <Card.Divider />
        <View style={styles.iconContainer}>
          <Icon name="heartbeat" color="#18604A" size={32} />
        </View>
        <Text style={styles.cardText}>
          Para evitar a proliferação do Aedes aegypti, é essencial eliminar água parada em objetos, manter caixas d'água tampadas, descartar lixo corretamente, usar telas em janelas, aplicar repelentes e vestir roupas adequadas.        </Text>
        <Button
          icon={<Icon name="external-link-alt" size={15} color="#FFF" />}
          title=" Saiba mais"
          buttonStyle={styles.showMoreText}
          onPress={() => openLink('https://www.saude.ba.gov.br/temasdesaude/arboviroses/combateaedes/#:~:text=1%20–%20Mantenha%20bem%20tampados%3A%20caixas,com%20a%20boca%20para%20baixo.')}
        />
        <Text style={{ color: '#CCC', textAlign: 'center', marginTop: 10 }}>
          Você será redirecionado para o site do Saúde.gov
        </Text>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>Checklist de prevenção</Card.Title>
        <Card.Divider />
        <View style={styles.iconContainer}>
          <Icon name="check-square" color="#18604A" size={32} />
        </View>
        <Text style={styles.cardText}>
          - Elimine recipientes que possam acumular água parada, como vasos, pneus e garrafas.
          {"\n"}
          - Aplique repelente nas áreas expostas da pele para evitar picadas do mosquito.
          {"\n"}
          - Utilize telas em janelas e portas para impedir a entrada do mosquito.
          {"\n"}
          - Mantenha piscinas e caixas d'água limpas e bem vedadas.
          {"\n"}
          - Evite acúmulo de lixo e entulho, pois podem se tornar criadouros do mosquito.
          {"\n"}
          - Colabore com a limpeza de terrenos baldios próximos à sua residência.
        </Text>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>Combate ao mosquito</Card.Title>
        <Card.Divider />
        <View style={styles.iconContainer}>
          <Icon name="fire" type="font-awesome" color="#18604A" size={32} />
        </View>
        <Text style={styles.cardText}>
          O Aedes aegypti é um vetor de diversas doenças graves, incluindo dengue, zika e chikungunya.
          Proteja-se adotando as seguintes medidas:
        </Text>
        <Text style={styles.cardText}>
          - Utilize mosquiteiros e repelentes para evitar picadas do mosquito.
        </Text>
        <Text style={styles.cardText}>
          - Mantenha-se informado sobre áreas com surtos e tome precauções extras se estiver nessas regiões.
        </Text>
        <Text style={styles.cardText}>
          - Elimine locais propícios para a reprodução do mosquito, como água parada em recipientes abertos.
        </Text>
      </Card>
    </ScrollView>
  );
};

export default Preventions;