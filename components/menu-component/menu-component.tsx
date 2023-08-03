import React from 'react';
import MenuButton from '../menu-button-component/menu-button-component';
import {View, StyleSheet} from 'react-native';
//import Contact from '../contact/contact';

interface MenuProps {
  onMenuButtonPress: (data: string) => void;
}


const styles = StyleSheet.create({
  mainContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: "lightblue",
    borderBottomWidth: 1, 
    borderBottomColor: 'black',
  },
  containerRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginRight: 100,
    flexDirection: 'row',
  },
  containerLeft: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 38,
    fontFamily: "Times New Roman",
    marginTop: 30,
    marginLeft: 150,
    flexDirection: 'row',
  },
});

const Menu: React.FC <MenuProps>= ({onMenuButtonPress}) => {
  const handleButtonPress = (section: string) => {
    onMenuButtonPress(section);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerLeft}>
      <text>Nipun</text>
      </View>
      <View style={styles.containerRight}>
        <MenuButton text="Home" scrollToSection='home'  onMenuButtonPress={handleButtonPress}></MenuButton>
        <MenuButton text="About" scrollToSection='about'  onMenuButtonPress={handleButtonPress}></MenuButton>
        <MenuButton text="Skill" scrollToSection='skill'  onMenuButtonPress={handleButtonPress}></MenuButton>
        <MenuButton text="Project" scrollToSection='project'  onMenuButtonPress={handleButtonPress}></MenuButton>
        <MenuButton text="Contact" scrollToSection='contact'  onMenuButtonPress={handleButtonPress}></MenuButton>
      </View>
    </View>
  )
};

export default Menu;
