import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
//import contactImage from '../../assets/images/contact.png';
import githubicon from "../../assets/images/github.png";
import facebookicon from "../../assets/images/facebook.png";
import linkedinicon from "../../assets/images/linkedin.png";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
    padding: 10,

  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 50,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',

  },
  contactText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#457B9D', // Set the blue color for the "Contact" text
  },
  getInTouchText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  emailText: {
    fontSize: 16,
    color: '#828282', // Set the gray color for the email text
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Move the content to the bottom of the page
  },
  contactIconsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  contactIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  emailTextContainer: {
    marginBottom: 40,
  },
});

const Contact: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.contactText}>Contact</Text>
          <Text style={styles.getInTouchText}>Get in touch</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <Image source={githubicon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={linkedinicon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={facebookicon} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.emailText}>nipun.cinnamon@gmail.com</Text>
          </View>

          <View>
            <Text>Develop and designed by Nipun Chamara</Text>
          </View>
        </View>
        
      </View>

      
    </View>
  );
};

export default Contact;
