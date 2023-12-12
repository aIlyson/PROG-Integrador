import React from 'react';
import { Text, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  HomeIndex,
  NewsIndex,
  PreventionIndex,
  PostIndex,
  AboutIndex,
  SettingsScreen,
} from './src/screens';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#FFF"
  }
}

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeIndex}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Config"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={screenOptions}>
        <BottomTab.Screen
          name="Inicio"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Icon name="home" size={24} color={focused ? "#257157" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#424b5a" }}>INICIO</Text>
                </View>
              )
            }
          }} />
        <BottomTab.Screen
          name="Pesquisa"
          component={NewsIndex}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Icon name="search" size={24} color={focused ? "#257157" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#424b5a" }}>DADOS</Text>
                </View>
              )
            }
          }}
        />
        <BottomTab.Screen
          name="Prevenção"
          component={PreventionIndex}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#257157",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                    ...Platform.select({
                      ios: {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                      },
                      android: {
                        elevation: 25,
                      },
                    }),
                  }}
                >
                  <Icon name="calendar-check" size={27} color="#FFF" />
                </View>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="LocaisdeSaúde"
          component={PostIndex}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Icon name="hospital" size={24} color={focused ? "#257157" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#424b5a" }}>LOCAIS</Text>
                </View>
              )
            }
          }}
        />
        <BottomTab.Screen
          name="Sobre"
          component={AboutIndex}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Icon name="info-circle" size={24} color={focused ? "#257157" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#424b5a" }}>SOBRE</Text>
                </View>
              )
            }
          }}
        />
      </BottomTab.Navigator>
      <Stack.Screen
        name="Config"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </NavigationContainer>
  );
};

export default App;