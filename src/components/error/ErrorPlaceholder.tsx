import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import styles from './ErrorPlaceholder.styles';
import {Button} from 'components';
import {useTranslation} from 'react-i18next';

interface ErrorPlaceholderFillProps {
  style?: ViewStyle;
  message: string;
  details?: string;
  refresh?: () => void;
}

const ErrorPlaceholder: React.FC<ErrorPlaceholderFillProps> = ({
  style,
  message,
  refresh,
}) => {
  const {t} = useTranslation('ErrorPlaceholder');

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}> {message}</Text>
      {refresh && (
        <Button
          visualStyle="solid"
          style={styles.refreshButton}
          title={t('tryAgain')}
          onPress={() => refresh()}
        />
      )}
    </View>
  );
};

export default ErrorPlaceholder;
