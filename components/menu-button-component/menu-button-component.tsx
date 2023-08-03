import React, {useState} from 'react';
import {Pressable, Text,StyleSheet} from 'react-native';

interface MenuButtonProps {
  text: string;
  scrollToSection: string;
  onMenuButtonPress?: (data: string) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({text,scrollToSection,onMenuButtonPress}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnterInternal = () => 
  {
    setIsHovered(true);
  };

  const handleMouseLeaveInternal = () => {
    setIsHovered(false);
  };

  //const section1Ref = useRef(null);
  // Add more refs for other sections if needed

  const handleScrollToSection = (ref: string) => {
    if (onMenuButtonPress) {
      onMenuButtonPress(ref); // Trigger the custom event with the data
    }
  };

  const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      backgroundColor: isHovered ? 'black' : 'transparent', // Change the background color based on isHovered state
      padding: 10,
      margin: 10,
      fontFamily: 'Noto Sans',
      borderColor: 'black',
      borderWidth: 2,
      width: 150,
    },
    text: {
      color: isHovered ? 'white' : 'black',
      justify : 'center',
      fontSize: 16, // Center the text horizontally
      textAlign: 'center'
    },
  });

  return (
    <Pressable
      style={styles.button}
      onPress={() => handleScrollToSection(scrollToSection)}
      onHoverIn={handleMouseEnterInternal}
      onHoverOut={handleMouseLeaveInternal}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default MenuButton;
