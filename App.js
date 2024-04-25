import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import BlindLevelSlider from './BlindLevelSlider';

const App = () => {
  const [isRaiseBlind, setIsRaiseBlind] = useState(false);
  const [raiseBlindInterval, setRaiseBlindInterval] = useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <BlindLevelSlider
          isRaiseBlind={isRaiseBlind} // Pass the current state value
          onSetIsRaiseBlind={setIsRaiseBlind} // Pass the function to update state
          raiseBlindInterval={raiseBlindInterval} // Pass the current interval
          onSetRaiseBlindInterval={setRaiseBlindInterval} // Pass the function to update interval
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default App;
