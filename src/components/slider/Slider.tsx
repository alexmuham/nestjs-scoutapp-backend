import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Image, Text, View} from 'react-native';
import styles from './Slider.styles';
import * as SliderImage from './assets';

interface ScoutSliderProps {
  min: number;
  max: number;
  sliderLength?: number;
  values: number[];
  setMultiSliderValue: (values: number[]) => void;
  title: string;
  firstMarkText: string;
  secondMarkText: string;
}

const Slider: React.FC<ScoutSliderProps> = ({
  sliderLength,
  min,
  max,
  setMultiSliderValue,
  values,
  title,
  firstMarkText,
  secondMarkText,
}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInput}>
          <Text>{firstMarkText.toString()}</Text>
        </View>
        <Image source={SliderImage.Stick} style={styles.stick} />
        <View style={styles.textInput}>
          <Text>{secondMarkText.toString()}</Text>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <MultiSlider
          values={[values[0], values[1]]}
          sliderLength={sliderLength}
          onValuesChange={(values) => setMultiSliderValue(values)}
          min={min}
          max={max}
          step={1}
          allowOverlap
          snapped
          selectedStyle={styles.selectedStyle}
          trackStyle={styles.trackStyle}
          markerStyle={styles.markerStyle}
        />
      </View>
    </View>
  );
};

export default Slider;
