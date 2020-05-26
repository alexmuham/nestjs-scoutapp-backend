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
import {InputField, Slider, Button} from 'components';
import {Dropdown} from '@spryrocks/dropdown-react-native';
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

  const [throwValue, setThrow] = useState<string>('');

  const [batsValue, setBats] = useState<string>('');

  const [sixtyTimeValue, setSixtyTime] = useState<number[]>([5, 9]);

  const [tenYardValue, setTenYard] = useState<number[]>([1, 3]);

  const [positionVelocityValue, setPositionVelocity] = useState<string>('');

  const [exitVelocityValue, setExitVelocityValue] = useState<number[]>([60, 100]);

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

  const button = () => (
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        visualStyle="solid"
        title={t('search')}
        onPress={() => undefined}
      />
    </View>
  );

  const batEntities = ['-', 'R', 'L', 'S'];
  const throwEntities = ['-', 'R', 'L', 'B'];
  const positionVelocityEntities = ['-', 'FB', 'C', '1B', '10SPL', '60', 'IF', 'POP'];

  const dropdown = (
    data: string[],
    setActiveElement: (data: string) => void,
    activeElement: string,
  ) => (
    <Dropdown
      data={data}
      activeItemStyles={styles.activeItemStyles}
      setActiveElement={setActiveElement}
      activeElement={activeElement}
      itemsContainerStyle={styles.itemsContainerStyle}
    />
  );

  const slider = (
    min: number,
    max: number,
    values: number[],
    setMultiSliderValue: (data: number[]) => void,
    title: string,
    firstMarkText: string,
    secondMarkText: string,
  ) => (
    <View style={styles.searchContainer}>
      <Slider
        min={min}
        max={max}
        values={values}
        setMultiSliderValue={setMultiSliderValue}
        title={title}
        firstMarkText={firstMarkText}
        secondMarkText={secondMarkText}
      />
    </View>
  );

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
            {slider(
              heightValue[0],
              heightValue[1],
              heightValue,
              setHeight,
              t('height'),
              heightValue[0].toString(),
              heightValue[1].toString(),
            )}
            {slider(
              weightValue[0],
              weightValue[1],
              weightValue,
              setWeight,
              t('weight'),
              weightValue[0].toString(),
              weightValue[1].toString(),
            )}
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
            {slider(
              classValue[0],
              classValue[1],
              classValue,
              setClass,
              t('class'),
              classValue[0].toString(),
              classValue[1].toString(),
            )}
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
              <View style={styles.batThrow}>
                <View style={styles.batContainer}>
                  <View>
                    <Text style={styles.positionTitle}>{t('bat')}</Text>
                  </View>
                  {dropdown(batEntities, setBats, batsValue)}
                </View>
                <View style={styles.trowContainer}>
                  <View>
                    <Text style={styles.positionTitle}>{t('throw')}</Text>
                  </View>
                  {dropdown(throwEntities, setThrow, throwValue)}
                </View>
              </View>
            </View>
            <View style={styles.positionContainer}>
              <View style={styles.positionContainer}>
                <Text style={styles.title}>{t('position')}</Text>
              </View>
              {slider(
                sixtyTimeValue[0],
                sixtyTimeValue[1],
                sixtyTimeValue,
                setSixtyTime,
                t('60time'),
                sixtyTimeValue[0].toString(),
                sixtyTimeValue[1].toString(),
              )}
              {slider(
                tenYardValue[0],
                tenYardValue[1],
                tenYardValue,
                setTenYard,
                t('10YardSplit'),
                tenYardValue[0].toString(),
                tenYardValue[1].toString(),
              )}
              <View style={styles.positionVelocityContainer}>
                <View>
                  <View>
                    <Text style={styles.positionTitle}>{t('positionVelocity')}</Text>
                  </View>
                  {dropdown(
                    positionVelocityEntities,
                    setPositionVelocity,
                    positionVelocityValue,
                  )}
                </View>
              </View>
              {slider(
                exitVelocityValue[0],
                exitVelocityValue[1],
                exitVelocityValue,
                setExitVelocityValue,
                t('exitVelocity'),
                exitVelocityValue[0].toString(),
                exitVelocityValue[1].toString(),
              )}
            </View>
            {externalSearchValue && button()}
          </View>
        )}
      </ScrollView>
      {!externalSearchValue && button()}
    </View>
  );
};

export default Search;
