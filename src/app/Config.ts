import {Platform as RNPlatform} from 'react-native';
import {Platform} from 'entities/Platform';
import {getBuildType} from 'services/config/ConfigUtils';
import BuildType from 'entities/BuildType';

const getPlatform = (): Platform => {
  switch (RNPlatform.OS) {
    case 'android':
      return Platform.Android;
    case 'ios':
      return Platform.iOS;
    default:
      throw new Error(`Unknown platform: ${RNPlatform.OS}`);
  }
};

export default {
  getPlatform,
};

export const isDevelop = () => getBuildType() === BuildType.Develop;
export const isStaging = () => getBuildType() === BuildType.Staging;
export const isProduction = () => getBuildType() === BuildType.Production;
