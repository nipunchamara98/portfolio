import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import aboutImage from '../../assets/images/about.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '',
    padding: 10,
    marginTop: 900, // Move the mainContainer down to make space for the "About" text
    flex: 1,
    marginRight: 20,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Align the content to the top of the container
    alignItems: 'center',
    backgroundColor: '',
    padding: 20,
  },
  rightContainer: {
    top:20,
    right:70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    padding: 10,
    marginTop: 0,
    marginLeft:50,
    
  },
  image: {
    width: 450,
    height: 450,
  },
  textContainer: {
    alignItems: 'center',
  },

  h1Text: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 50,
    marginTop: 400,
    color:"#457B9D",
    textAlign: 'left',
    right:300,
  },

  descriptionText: {
    fontSize: 22,
    textAlign: 'left',
  },
});

const About: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ alignItems: 'center', flex: 1 }}>
        <View style={styles.mainContainer}>
          <View style={styles.leftContainer}>
            <Image source={aboutImage} style={styles.image} />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.h1Text}>About Me?</Text>

            <Text style={styles.descriptionText}>
            I am an undergraduate of the Faculty of Science, University of Colombo and passionate more about Physics, innovation researches..
             and the founder of eBuyBug.lk and Nipun Export which are holding company with e-commerce and export in services, 
             manufacturing spices allied products .
            I have earned many experience throughout from the businesses , 
            college and the university. All these have helped me to developments, 
            communicate effectively with other team members and constructively acknowledge the views of colleagues. 
            provide clear, accurate and sufficient information on work in progress to get decisions and enable another 
            member of the team to effectively
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;
