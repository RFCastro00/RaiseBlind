import React, {useState} from 'react';
import {View, Slider, Text, StyleSheet, Switch} from 'react-native';

const BlindLevelLength = () => {
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
            <Text style={styles.tick}>3m</Text>
            <Text style={styles.tick}>5m</Text>
            <Text style={styles.tick}>7m</Text>
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
          <Text style={styles.blindsStructureLink}>Blinds Structure ></Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    marginBottom: 10,
  },
  ticksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  tick: {
    fontSize: 12,
  },
  blindsStructureLink: {
    marginTop: 10,
    fontSize: 16,
    color: '#0ec7e3',
  },
});

export default BlindLevelLength;
