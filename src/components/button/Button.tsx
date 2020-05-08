import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import styles from './Button.styles';

type VisualStyle = 'none' | 'solid' | 'border';

interface ButtonProps extends ViewProps {
  style?: ViewStyle;
  title?: string;
  onPress?: () => void;
  visualStyle?: VisualStyle;
  wrapperStyle?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  style,
  title,
  onPress,
  visualStyle,
  wrapperStyle,
  textStyle,
  loading,
}) => {
  const Wrapper = ({
    style,
    children,
  }: {
    style: ViewStyle;
    children: React.ReactNode;
  }): React.ReactElement => {
    switch (visualStyle) {
      case 'border':
        return (
          <View style={[styles.borderedBtnBackground, styles.container, wrapperStyle]}>
            {children}
          </View>
        );
      case 'none':
        return (
          <View
            style={{
              ...style,
            }}
          >
            {children}
          </View>
        );
      case 'solid':
        return (
          <View style={[styles.solidBtnBackground, styles.container]}>{children}</View>
        );
      default:
        return (
          <View
            style={{
              ...style,
            }}
          >
            {children}
          </View>
        );
    }
  };

  const getContainerStyle = (): ViewStyle | undefined => {
    switch (visualStyle) {
      case 'border':
        return styles.borderedBtnBackground;
      case 'solid':
        return styles.solidBtnBackground;
      default:
        return undefined;
    }
  };

  return (
    <TouchableOpacity
      style={[
        {
          ...getContainerStyle,
          ...style,
        },
        styles.touchableOpacity,
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={loading}
    >
      <Wrapper style={{...styles.wrapper, ...wrapperStyle}}>
        {loading ? (
          <View style={styles.loadingButtonMargin}>
            <ActivityIndicator />
          </View>
        ) : (
          <>
            {title && (
              <Text
                style={{
                  ...styles.text,
                  ...textStyle,
                }}
              >
                {title}
              </Text>
            )}
          </>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};

export default Button;
