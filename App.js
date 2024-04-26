import React, {useState} from 'react';
import {View} from 'react-native';
import BlindLevelSlider from './BlindLevelSlider';
import AppStyles from './AppStyles';

const App = () => {
  const [isRaiseBlind, setIsRaiseBlind] = useState(false);
  const [raiseBlindInterval, setRaiseBlindInterval] = useState(3);

  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.sliderContainer}>
        <BlindLevelSlider
          isRaiseBlind={isRaiseBlind}
          onSetIsRaiseBlind={setIsRaiseBlind}
          raiseBlindInterval={raiseBlindInterval}
          onSetRaiseBlindInterval={setRaiseBlindInterval}
        />
      </View>
    </View>
  );
};

export default App;
