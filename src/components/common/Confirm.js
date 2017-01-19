import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { cardSectionStyle, textStyle, containerStyle, textCardStyle } = styles;
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
      transparent
    >
      <View style={containerStyle}>

        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection style={textCardStyle}>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>

      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  textCardStyle: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    padding: 10
  }
};

export { Confirm };
