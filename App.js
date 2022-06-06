// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TouchableOpacity
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/HomeScreen';
// import AuthStack from './src/navigation/AuthStack';

// const Stack = createNativeStackNavigator();

// const App = () => {

//   return (
//     <NavigationContainer>
//       <Authstack />
//     </NavigationContainer>
//   );
// };

// const Main = ({navigation}) => {

//   return (
//     <SafeAreaView style={{
//       flex:1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#fff',
//     }}>
//         <View
//           style={{
//           }}>
//             <Text style={{fontSize: 30, fontWeight: 'bold', color:'#20315f'}}>GAMEON</Text>

//         </View>

//         <TouchableOpacity
//         onPress={() => navigation.navigate('Home')} style={{
//           backgroundColor: '#AD40AF',
//           padding: 20, flexDirection: 'row',
//           justifyContent: 'space-between',
//           color: '#fff',
//           width: '90%',
//            justifyContent:'space-between',
//            marginBottom: 50}}>
//           <Text style={{

//           color: '#fff',
//           fontWeight: 'bold',
//           }}>Let's Begin</Text>
//         </TouchableOpacity>

//         </SafeAreaView>

//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

////////////////////////////////////////////////////////

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
import Autocomplete from 'react-native-autocomplete-input';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import type { Node } from 'react';
import { useRef } from 'react';
//import {Button} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import ModalDropdown from 'react-native-modal-dropdown';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const data = ['dropdown1', 'drop down 2', 'a drop down'];

const AuthStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main2" component={Main} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
        >
          {
            () => (<AuthStack />)
          }

        </Stack.Screen>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
        <Stack.Screen name="HomeScreen7" component={HomeScreen7} />
        <Stack.Screen name="HomeScreen8" component={HomeScreen8} />
        {/* <AuthStack /> */}
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
      </Stack.Navigator>

    </NavigationContainer>
  );
};

const Main = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f' }}>
          GAMEON
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#fff',
          width: '90%',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Let's Begin
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen2')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#fff',
          width: '90%',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Let's Begin
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen7')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#fff',
          width: '90%',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Let's Begin
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen8')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#fff',
          width: '90%',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Let's Begin
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f' }}>
        Home
      </Text>
    </View>
  );
};

const HomeScreen2 = () => {
  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE}
        // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>

      {/* <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex: 1, padding: 0}}
        />
      </View> */}

      <View style={styles.searchBox}>
        <Autocomplete

        //onChangeText={}
        />
      </View>
      {/* 
      <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}    
>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
      </View> */}
    </View>
  );
};

const HomeScreen = () => {



  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 18 }}>Hello John Doe</Text>
          {/* <ImageBackground source={require()}></ImageBackground> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          {/* <TextInput placeholder="Search" /> */}

          <Autocomplete
            data={data} />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 18 }}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};

const HomeScreen8 = () => {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      {/* <MapView
        // provider={PROVIDER_GOOGLE}
        // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView> */}

      <MapView initialRegion={INITIAL_REGION} style={styles.map} provider={PROVIDER_GOOGLE}>
        <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />
        <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />
        <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
        <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
        <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
        <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
        <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
        <Marker coordinate={{ latitude: 52.4, longitude: 21 }} />
        <Marker coordinate={{ latitude: 51.8, longitude: 20 }} />
      </MapView>

      <View style={styles.searchBox}>
        <Autocomplete

        //onChangeText={}
        />

        {/* <ModalDropdown options={['option 1', 'option 2']}/> */}




      </View>
      <Provider>
        <View
          style={{
            //paddingTop: 40,
            flexDirection: 'row',
            // backgroundColor:'red'

            //justifyContent: 'center',
          }}>
          <Menu

            style={{
              flexDirection: 'row',
              backgroundColor: 'black',
              position: 'absolute',
              top: 20
              //justifyContent: 'center',
            }}
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button style={{
              flexDirection: 'row',
              backgroundColor: 'green',
              top: 12
              //justifyContent: 'center',
            }} onPress={openMenu}>Show menu</Button>}>
            <Menu.Item onPress={() => { }} title="Item 1" />
            <Menu.Item onPress={() => { }} title="Item 2" />

          </Menu>
        </View>
      </Provider>

    </View>
  );
};

const HomeScreen7 = () => {
  const mapRef = useRef();

  const animateToRegion = () => {
    let region = {
      latitude: 42.5,
      longitude: 15.2,
      latitudeDelta: 7.5,
      longitudeDelta: 7.5,
    };

    mapRef.current.animateToRegion(region, 2000);
  };

  return (
    <>
      <MapView ref={mapRef} initialRegion={INITIAL_REGION} style={{ flex: 1 }} />
      <Button onPress={animateToRegion} title="Animate" />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    //  ...StyleSheet.absoluteFillObject,

    //  justifyContent: 'flex-end',
    //  alignItems: 'center',
    flex: 1,
  },

  searchBox: {
    position: 'absolute',
    left: 150,
    marginTop: Platform.OS === 'ios' ? 8 : 4,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 5,
    //padding: 5,
    //shadowColor: '#ccc',
    height: '4%',
    // marginLeft: 249,
    shadowOffset: { width: 0, height: 3 },
    //shadowOpacity: 0.5,
    // shadowRadius: 5,
    //elevation: 10,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
