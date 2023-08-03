import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import react_logo from '../../assets/images/react_logo.png';
import java from '../../assets/images/java.png';
import php_logo from '../../assets/images/php_logo.png';
import android from '../../assets/images/android.png';



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 800,
    marginBottom:50,
  },
  logosContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  technologyLogoImage: {
    width: 200,
    height: 100,
  },
});

const Skill: React.FC = () => {
  //For creating the icon background
  
  

  return (
    <View style={{marginTop: 700}}>
      
      <View style={styles.mainContainer}>
      <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 50,
              lineHeight: 50,
              fontFamily: 'Noto Sans',
              color:"#457B9D",
              marginTop:10,
              marginBottom:20,
            }}>
            Skill
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 40,
              lineHeight: 50,
              fontFamily: 'Noto Sans',
            }}>
            What I am Capable of?
          </Text>
        </View>
        <View style={styles.logosContainer}>
          <Image
            style={styles.technologyLogoImage}
            source={android}></Image>
          <Image style={styles.technologyLogoImage} source={react_logo}></Image>
          <Image
            style={styles.technologyLogoImage}
            source={java}></Image>
          <Image style={styles.technologyLogoImage} source={php_logo}></Image>
          
        </View>
        <Text
            style={{
              
              fontSize: 0,
              lineHeight: 50,
              fontFamily: 'Noto Sans',
            }}>
            What I am Capable of?
          </Text>
      </View>
      <View>
     
      </View>
      
   
    </View>
  );
};

export default Skill;