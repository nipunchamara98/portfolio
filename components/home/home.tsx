import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Linking} from 'react-native';
//import Menu from '../menu-component/menu-component';
import me from '../../assets/images/a.png';

const home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  

  const handleMouseEnterInternal = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveInternal = () => {
    setIsHovered(false);
  };

  
    const handleDownloadPDF = async () => {
      const pdfURL = 'https://example.com/your-pdf-file.pdf'; // Replace with the actual URL of the PDF file
      try {
        const supported = await Linking.canOpenURL(pdfURL);
        if (supported) {
          await Linking.openURL(pdfURL);
        } else {
          console.log("Don't know how to open URI: " + pdfURL);
        }
      } catch (error) {
        console.error('Error while downloading PDF:', error);
      }
    };
  

  const styles = StyleSheet.create({
    mainContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'lightblue',
      padding: 102,
    },
    image: {
      width: 450,
      height: 450,
    },
    buttonContainer: {
      flexDirection: 'row', 
    },
    imageContainer: {
      flex: 2,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: "lightblue",
    },
    descriptionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      marginLeft: 200,
      fontFamily: 'Noto Sans',
      marginTop: 0,
      backgroundColor: "lightblue",
    },
    downloadButton: {
      borderRadius: 0,
      backgroundColor: isHovered ? 'White' : '#457B9D', // Change the background color based on isHovered state
      padding: 10,
      fontFamily: 'Noto Sans',
     
      width: 150,
      marginTop: 20,
      marginRight: 20,
    },

    

    buttonText: {
      color: isHovered ? 'white' : 'black',
      justify: 'center',
      fontSize: 16, // Center the text horizontally
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#457B9D',
      padding: 10,
      borderRadius: 5,
      margin: 5,
    },
    
  });
  
 
  useEffect(() => {
    const intervalTime = 1000;
    const incrementCounter = () => {
      
    };
    const intervalId = setInterval(incrementCounter, intervalTime);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <View style={{flex: 1}}>
     
      <View style={styles.mainContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={{fontSize: 25}}>Hi Everyone, I'm</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 40,
              lineHeight: 50,
              fontFamily: 'Noto Sans',
            }}>
            Nipun Chamara{' '}
            
          </Text>

          
          <View style={styles.buttonContainer}>

          <Pressable onPress={handleDownloadPDF}
          style={styles.downloadButton}
          onHoverIn={handleMouseEnterInternal}
          onHoverOut={handleMouseLeaveInternal}>
            <Text style={styles.buttonText}>Download CV</Text>
          </Pressable>

          

        </View>
         
        </View>
        <View style={styles.imageContainer}>
          <Image source={me} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default home;
