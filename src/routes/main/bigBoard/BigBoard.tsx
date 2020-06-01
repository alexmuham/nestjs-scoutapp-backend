import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Dropdown} from '@spryrocks/dropdown-react-native';
import styles from './BigBoard.style';
import {Back, Share} from './assets/index';
import {useTranslation} from 'react-i18next';

const BigBoard: React.FC = () => {
  const {t} = useTranslation('bigBord');

  const renderSelect = (title: string, options: string[]) => (
    <View style={styles.selectElement}>
      <Text style={styles.selectElementTitle}>{title}:</Text>
      <Dropdown
        activeItemStyles={styles.dropDownItemText}
        data={options}
        setActiveElement={() => {}}
        containerStyle={styles.dropDownContainer}
        itemsContainerStyle={{height: 124}}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navigBtn}>
            <Image source={Back} />
            <Text style={styles.navigText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigBtn}>
            <Image source={Share} />
            <Text style={styles.navigText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectsContainer}>
          <View>
            {renderSelect(t('Class'), ['Option1', 'Option2', 'Option3', 'Option4'])}
          </View>
          <View>
            {renderSelect(t('Pos.'), ['Option1', 'Option2', 'Option3', 'Option4'])}
          </View>
        </View>
      </View>
      <View>
        <Text>X Players</Text>
      </View>
    </View>
  );
};

export default BigBoard;
