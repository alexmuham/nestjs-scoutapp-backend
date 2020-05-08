import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createStyles} from './AppDebugHeader.styles';
import BuildType from 'entities/BuildType';
import DeviceInfo from 'react-native-device-info';

interface AppDebugHeaderProps {
  buildType: BuildType;
}

const AppDebugHeader: FC<AppDebugHeaderProps> = ({buildType}) => {
  const styles = createStyles(buildType);

  const [version, setVersion] = useState<string>();

  const loadVersion = async () => {
    const version = await DeviceInfo.getVersion();
    const buildNumber = await DeviceInfo.getBuildNumber();
    setVersion(`v${version} (${buildNumber})`);
  };

  useEffect(() => {
    loadVersion().then();
  });
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>
          Build: {buildType}, version:{version}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AppDebugHeader;
