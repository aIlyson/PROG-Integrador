import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  Card,
  Text as RNText,
  Tile,
  ListItem,
  Icon as RNEIcon,
} from "react-native-elements";
import Svg, { Rect } from "react-native-svg";
import { LineChart } from "react-native-chart-kit";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as Animatable from "react-native-animatable";

import styles from "../../components/styles";

import Header from "../../components/header";

import { formatChartData, getHealthServices } from "./functions/functions";

const Home = ({ navigation }) => {
  const chartData = formatChartData();
  const healthServices = getHealthServices();
  const AnimatedLineChart = Animatable.createAnimatableComponent(LineChart);

  const [carouselItems, setCarouselItems] = useState([
    {
<<<<<<< HEAD:src/(tabs)/home/home.js
      title: "Enfrentando e combatendo o Aedes aegypti!",
      image: require("../../assets/locations/cathedral.jpeg"),
    },
    {
      title: "Nosso Compromisso: Defendendo a cidade contra o Aedes aegypti",
      image: require("../../assets/locations/focus.png"),
=======
      title: "Enfrentando e Combatendo o Aedes aegypti!",
      image: require("../../assets/locais/catedral_pe.jpeg"),
    },
    {
      title: "Nosso Compromisso: Defendendo a Cidade Contra o Aedes aegypti",
      image: require("../../assets/locais/foco.png"),
>>>>>>> 76caa676dc76647e6fd1efca7e0da2e17e04fd81:src/screens/home/home.js
    },
    {
      title:
        "Nossos Monumentos, Nossa Responsabilidade: Prevenção ao Aedes aegypti",
<<<<<<< HEAD:src/(tabs)/home/home.js
      image: require("../../assets/locations/statue_image.jpeg"),
    },
    {
      title: "Ameaça Invisível, Ação Visível: A Cidade Contra o Aedes aegypti",
      image: require("../../assets/locations/combating_aedes.jpg"),
=======
      image: require("../../assets/locais/frei_damiao_ouricuri_pe.jpeg"),
    },
    {
      title: "Ameaça Invisível, Ação Visível: A Cidade Contra o Aedes aegypti",
      image: require("../../assets/locais/combate.jpg"),
>>>>>>> 76caa676dc76647e6fd1efca7e0da2e17e04fd81:src/screens/home/home.js
    },
  ]);

  const renderItem = ({ item }) => {
    return (
      <Tile
        imageSrc={item.image}
        title={item.title}
        featured
        caption="Estatísticas recentes sobre a situação na cidade"
        containerStyle={stylesp.carouselItem}
      />
    );
  };

  const newsData = [
    {
      title: "Vírus Zika e Medidas Preventivas",
      text: "O vírus Zika, transmitido principalmente pela picada de mosquitos do gênero Aedes, destaca-se como uma preocupação de saúde global. O vetor mais comum, o Aedes aegypti, é conhecido por ser o responsável por disseminar essa doença, que pode resultar em sintomas leves, mas também apresenta riscos consideráveis.",
      updateDate: "11/12/2023",
    },
    {
      title: "Desvendando a Chikungunya: Uma Ameaça Transmitida por Mosquitos",
      text: "A febre chikungunya é uma doença viral que tem despertado preocupações globais devido à sua propagação por mosquitos, especialmente o Aedes aegypti e o Aedes albopictus. Esses insetos são conhecidos por serem vetores eficazes na transmissão do vírus, colocando comunidades em alerta.",
      updateDate: "09/12/2023",
    },
    {
      title: "Combate ao Aedes aegypti: Medidas Preventivas na Comunidade",
      text: "Em um esforço contínuo para combater a propagação do Aedes aegypti, a comunidade de Ouricuri intensifica as ações preventivas. Diversas iniciativas estão sendo implementadas, incluindo a realização de mutirões de limpeza, distribuição de materiais informativos e a promoção de palestras educativas.",
      updateDate: "07/12/2023",
    },
  ];

  const handlePostPress = () => {
    navigation.navigate("Locais");
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />

      <Svg style={stylesp.svg}>
        <Rect
          x="0%"
          y="4%"
          width="100%"
          height="25%"
          rx="10"
          ry="10"
          fill="#18604A"
        />
      </Svg>

      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={390}
        itemWidth={370}
        layout={"default"}
        loop
      />

      <Card containerStyle={{ ...styles.cardContainer, marginTop: 0 }}>
        <Card.Title style={styles.cardTitle}>
          Evolução dos casos de{" "}
          <RNText style={{ ...styles.cardTitle, fontStyle: "italic" }}>
            Aedes
          </RNText>{" "}
          Aegypti
        </Card.Title>
        <Card.Divider />
        <Animatable.View animation="fadeIn" duration={1500} delay={500}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <AnimatedLineChart
              data={chartData}
              width={chartData.labels.length * 80}
              height={200}
              yAxisSuffix=""
              yAxisInterval={1}
              chartConfig={{
                backgroundGradientFrom: "#F5F5F5",
                backgroundGradientTo: "#F5F5F5",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(6, 152, 107, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#06986B",
                },
              }}
              bezier
            />
          </ScrollView>
          <View style={{ ...stylesp.rightIndicador, top: "30%" }}>
            <Icon name="chevron-right" size={24} color="#06986B" />
          </View>
          <View style={stylesp.legendContainer}>
            <RNText style={{ ...stylesp.detailText, marginTop: 10 }}>
              Casos registrados em 2022 em Ouricuri
            </RNText>
          </View>
        </Animatable.View>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
          Conheça os sintomas mais comuns
        </Card.Title>
        <Card.Divider />
        <View style={styles.iconContainer}>
          <Icon name="medkit" color="#18604A" size={32} />
        </View>
        <RNText style={styles.cardText}>
          Sintomas das doenças transmitidas pelo{" "}
          <RNText style={{ fontStyle: "italic" }}>Aedes</RNText> aegypti:
        </RNText>
        <View>
          <RNText>- Febre</RNText>
          <RNText>- Falta de Apetite</RNText>
          <RNText>- Mal-Estar</RNText>
          <RNText>- Erupções cutâneas</RNText>
          <RNText>- Dor de cabeça e Dor ao movimentar os Olhos</RNText>
          <RNText>- Dores Musculares</RNText>
          <RNText>- Manchas Vermelhas no Corpo</RNText>
          <RNText>- Erupções cutâneas</RNText>
        </View>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={[styles.cardTitle]}>Alerta</Card.Title>
        <Card.Divider />
        <View style={styles.iconContainer}>
          <Icon name="bell" color="#18604A" size={32} />
        </View>
        <RNText
          style={[
            stylesp.detailText,
            { margin: 5, fontSize: 17, color: "#000" },
          ]}
        >
          Prezado morador
        </RNText>
        <RNText style={[stylesp.detailText, { marginVertical: 5 }]}>
          Gostaríamos de informar que a cidade de Ouricuri está atualmente em
          estado de alerta devido a um aumento significativo nos casos de
          dengue. Esta condição exige uma atenção especial por parte de todos os
          cidadãos para prevenir a propagação da doença. A colaboração de todos
          é crucial para conter a propagação da dengue e proteger nossa
          comunidade.
        </RNText>
      </Card>

      <Card containerStyle={{ ...styles.cardContainer, marginBottom: 5 }}>
        <Card.Title style={styles.cardTitle}>Notícias de saúde</Card.Title>
        <Card.Divider />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {newsData.map((news, index) => (
            <Card
              key={index}
              containerStyle={{ width: 300, borderWidth: 0, marginTop: 0 }}
            >
              <Card.Title style={{ ...styles.cardTitle, color: "#000" }}>
                {news.title}
              </Card.Title>
              <Card.Divider />
              <View style={stylesp.detailContainer}>
                <RNText style={stylesp.detailText}>{news.text}</RNText>
              </View>
              <View style={stylesp.detailContainer}>
                <Icon name="calendar" size={20} color="#06986B" />
                <RNText style={{ ...stylesp.detailText, marginLeft: 8 }}>
                  Última atualização: {news.updateDate}
                </RNText>
              </View>
            </Card>
          ))}
        </ScrollView>
        <View style={stylesp.rightIndicador}>
          <Icon name="chevron-right" size={24} color="#06986B" />
        </View>
      </Card>

      <Card containerStyle={{ ...styles.cardContainer, marginBottom: 0 }}>
        <Card.Title style={[styles.cardTitle]}>Serviços de Saúde</Card.Title>
        <Card.Divider />
        <View style={styles.iconContainer}>
          <Icon name="hospital" color="#18604A" size={32} />
        </View>
        {healthServices.map((service, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{service.name}</ListItem.Title>
              <ListItem.Subtitle>{service.address}</ListItem.Subtitle>
              <ListItem.Subtitle>{service.phone}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
        <TouchableOpacity>
          <RNText onPress={handlePostPress} style={styles.showMoreText}>
            Mostrar Mais
          </RNText>
        </TouchableOpacity>
      </Card>

      <Image
        source={require("../../assets/resources/if_logo.jpg")}
        style={{ ...styles.logo, height: 100 }}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

const stylesp = StyleSheet.create({
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  detailText: {
    marginLeft: 5,
  },
  carouselContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  carouselItem: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  rightIndicador: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: [{ translateY: -12 }],
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    zIndex: 1,
  },
});

export default Home;
