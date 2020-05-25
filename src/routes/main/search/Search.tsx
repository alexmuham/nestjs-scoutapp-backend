import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {InputField, Slider} from 'components';
import styles from './Search.styles';
import {useTranslation} from 'react-i18next';
import * as SearchImages from './assets';

const Search: React.FC = () => {
  const {t} = useTranslation('search');
  const [searchValue, setSearch] = useState<string>('');
  const [externalSearchValue, setExternalSearch] = useState<boolean>(true);

  const [heightValue, setHeight] = useState<number[]>([5, 7]);

  const [weightValue, setWeight] = useState<number[]>([100, 250]);

  const [classValue, setClass] = useState<number[]>([2000, 2021]);

  const [positionValue, setPosition] = useState<string[]>([]);

  const [commitmentValue, setCommitment] = useState<string>('');

  const renderPositionItem = (position: string, style?: ViewStyle) => {
    const active = positionValue.some((item) => item === position);

    const onPress = active
      ? () => {
          const item = positionValue.filter((item) => item !== position);
          setPosition(item);
        }
      : () => {
          const item = positionValue;
          item.push(position);
          setPosition(item);
        };

    return active ? (
      <TouchableOpacity
        style={{...style, ...styles.positionItem, ...styles.activeItem}}
        onPress={onPress}
      >
        <Text style={{...styles.positionText, ...styles.activeText}}>{position}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={{...style, ...styles.positionItem, ...styles.passiveItem}}
        onPress={onPress}
      >
        <Text style={styles.positionText}>{position}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.flex}>
      <ScrollView>
        <View>
          <Text style={styles.title}>{t('search')}</Text>
          <View style={styles.inputSearchContainer}>
            <Text style={styles.searchText}>{t('enterPlayerName')}</Text>
            <InputField
              placeholder={t('...')}
              onChangeText={setSearch}
              value={searchValue}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.extendedSearchContainer}
            onPress={() => setExternalSearch(!externalSearchValue)}
          >
            <Text style={styles.extendedSearchText}>{t('extendedSearch')}</Text>
            {externalSearchValue ? (
              <Image source={SearchImages.ArrowDown} />
            ) : (
              <Image source={SearchImages.ArrowRight} />
            )}
          </TouchableOpacity>
        </View>
        {externalSearchValue && (
          <View style={styles.searchContainer}>
            <View style={styles.searchContainer}>
              <Slider
                min={heightValue[0]}
                max={heightValue[1]}
                values={heightValue}
                setMultiSliderValue={setHeight}
                title={t('height')}
                firstMarkText={heightValue[0].toString()}
                secondMarkText={heightValue[1].toString()}
              />
            </View>
            <View style={styles.searchContainer}>
              <Slider
                min={weightValue[0]}
                max={weightValue[1]}
                values={weightValue}
                setMultiSliderValue={setWeight}
                title={t('weight')}
                firstMarkText={weightValue[0].toString()}
                secondMarkText={weightValue[1].toString()}
              />
            </View>
            <View style={styles.positionContainer}>
              <View>
                <Text style={styles.positionTitle}>{t('position')}</Text>
              </View>
              <View style={styles.inputPositionContainer}>
                {renderPositionItem('1B')}
                {renderPositionItem('2B')}
                {renderPositionItem('3B')}
                {renderPositionItem('OF')}
              </View>
              <View style={styles.inputPositionContainer}>
                {renderPositionItem('C')}
                {renderPositionItem('SS')}
                {renderPositionItem('UT')}
                {renderPositionItem('RHP')}
              </View>
              <View style={styles.inputPositionLastContainer}>
                {renderPositionItem('LHP')}
                {renderPositionItem('MIF', {marginLeft: 22})}
              </View>
            </View>
            <View style={styles.searchContainer}>
              <Slider
                min={classValue[0]}
                max={classValue[1]}
                values={classValue}
                setMultiSliderValue={setClass}
                title={t('class')}
                firstMarkText={classValue[0].toString()}
                secondMarkText={classValue[1].toString()}
              />
            </View>
            <View style={styles.positionContainer}>
              <View>
                <Text style={styles.positionTitle}>{t('commitment')}</Text>
              </View>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#929292"
                style={styles.textInput}
                onChangeText={setCommitment}
                value={commitmentValue}
                placeholder={t('typeHere')}
              />
            </View>
            <View style={{...styles.positionContainer}}>
              <View>
                <Text style={styles.positionTitle}>{t('bat/throw')}</Text>
              </View>
            </View>
            <View>
              <Text>{t('position')}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
