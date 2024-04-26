import {StyleSheet} from 'react-native';

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
  tickSelected: {
    color: '#0ec7e3', // Change this to the desired color for selected ticks
  },
  blindsStructureLink: {
    marginTop: 10,
    fontSize: 16,
    color: '#0ec7e3',
  },
});

export default styles;
