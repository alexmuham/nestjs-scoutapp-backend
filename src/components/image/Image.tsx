import React from 'react';
import FastImage, {FastImageProperties} from 'react-native-fast-image';
import {getHeaders} from 'api/ScoutApiUtils';

interface ImageProps extends FastImageProperties {}

const Image: React.FC<ImageProps> = ({source, ...otherProps}) => (
  <FastImage
    {...otherProps}
    source={
      typeof source === 'number'
        ? source
        : {
            ...source,
            headers: {
              ...getHeaders(),
            },
          }
    }
  />
);

export default Image;
