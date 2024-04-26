import React, {useState} from 'react';
import {View, Slider, Text, Switch} from 'react-native';
import styles from './BlindLevelStyles';

const BlindLevelSlider = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [sliderValue, setSliderValue] = useState(5);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>Blind Level Length</Text>
        <Switch value={showSlider} onValueChange={toggleSlider} />
      </View>
      {showSlider && (
        <View style={styles.sliderContainer}>
          <View style={styles.ticksContainer}>
            <Text
              style={[
                styles.tick,
                sliderValue === 3 ? styles.tickSelected : null,
              ]}>
              3m
            </Text>
            <Text
              style={[
                styles.tick,
                sliderValue === 5 ? styles.tickSelected : null,
              ]}>
              5m
            </Text>
            <Text
              style={[
                styles.tick,
                sliderValue === 7 ? styles.tickSelected : null,
              ]}>
              7m
            </Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={3}
            maximumValue={7}
            step={2}
            thumbTintColor="#0ec7e3"
            minimumTrackTintColor="#06b6d4"
            maximumTrackTintColor="#cbd5e1"
            value={sliderValue}
            onValueChange={setSliderValue}
          />
          <Text style={styles.blindsStructureLink}>Blinds Structure</Text>
        </View>
      )}
    </View>
  );
};

export default BlindLevelSlider;
