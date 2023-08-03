import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import About from './components/about/about';
import Home from './components/home/home';
import Skill from './components/skill/skill';
import Project from './components/project/project';
import Contact from './components/contact/contact';
import Menu from './components/menu-component/menu-component';


const { height } = Dimensions.get('screen');

const App = () => {
  //const scrollViewRef = useRef<ScrollView | null>(null);
  //const menuRef = useRef<any>(null);

  const setScroll = (section: string) => {
    console.log(section)

    //if (scrollViewRef.current) {

    if (section == 'home') {
      scrollTo(0, 0)
    }

      if (section == 'about') {
        scrollTo(0, 900)
      }

      if (section == 'skill') {
        scrollTo(0, 1700)
      }

      if (section == 'project') {
        scrollTo(0, 2500)
      }

      if (section == 'contact') {
        scrollTo(0, 3000)
      }
   // }



  };



  return (
    <View>
      <Menu onMenuButtonPress={setScroll} ></Menu>

      <View style={styles.container}>
        <View style={styles.center}>
          <Home></Home>
          <About></About>
          <View style={{ height: '20%' }}></View>
          <Skill></Skill>
          <View style={{ height: '40%' }}></View>
          <Project></Project>
          <View style={{ height: '50%' }}></View>
          <Contact></Contact>
          
        </View>
      </View>
    </View> 
  )
  };

const styles = StyleSheet.create({
  container: {
    height,
    fontFamily: 'NotoSans-Regular',
  },
  center: {
    flex: 1,
    textAlign: 'center',
  },
});

export default App;
