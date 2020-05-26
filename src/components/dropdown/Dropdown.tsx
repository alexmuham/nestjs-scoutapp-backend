import React, {useState} from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './Dropdown.styles';

interface ListProps {
  data: string[];
  activeItemStyles?: ViewStyle;
  itemsContainerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  activeElement?: string;
  containerStyle?: ViewStyle;
  activeElementTextStyle?: TextStyle;
  itemTextStyle?: TextStyle;
  setActiveElement: (item: string) => void;
}

const Dropdown: React.FC<ListProps> = ({
  data,
  activeItemStyles,
  itemsContainerStyle,
  activeElement,
  itemStyle,
  containerStyle,
  activeElementTextStyle,
  itemTextStyle,
  setActiveElement,
}) => {
  const [openList, setOpenList] = useState<boolean>(false);
  return (
    <View style={{...containerStyle}}>
      <TouchableOpacity
        style={{...styles.activeItem, ...activeItemStyles}}
        onPress={() => setOpenList(!openList)}
      >
        <Text style={{...activeElementTextStyle}}>{activeElement || data[0]}</Text>
      </TouchableOpacity>
      {openList && (
        <View style={{...styles.itemsContainer, ...itemsContainerStyle}}>
          {data.map((item) => {
            return (
              <TouchableOpacity
                style={{...styles.item, ...itemStyle}}
                onPress={() => {
                  setActiveElement(item);
                  setOpenList(!openList);
                }}
              >
                <Text style={{...itemTextStyle}}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
