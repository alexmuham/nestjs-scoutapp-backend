import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import styles from './VideoContainer.styles';

interface VideoContainerProps {
  uri: string;
}

const VideoContainer: React.FC<VideoContainerProps> = ({uri}) => {
  // const [duration, setDuration] = useState(0.0); //TODO add video player and add video deletion, add video opening in full screen
  // const [currentTime, setCurrentTime] = useState(0.0);
  const [paused, setPaused] = useState(true);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setPaused(!paused)}>
      <Video
        source={{uri}}
        style={styles.video}
        audioOnly={false}
        rate={1}
        paused={paused}
        volume={1}
        muted={false}
        resizeMode="contain"
        // onLoad={(value) => setDuration(value.duration)}
        // onProgress={(value) => setCurrentTime(value.currentTime)}
        onEnd={() => setPaused(true)}
        onAudioBecomingNoisy={() => setPaused(true)}
        repeat={false}
      />
    </TouchableOpacity>
  );
};

export default VideoContainer;
