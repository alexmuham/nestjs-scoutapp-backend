import React, {useState} from 'react';
import {FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './ProReports.styles';
import {ReportsHeader, ReportsInput, RoleFuturePositionRound} from 'components';
import {useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';

const ProReports: React.FC = () => {
  const {t} = useTranslation('proReports');
  const routerActions = useRouterActions();
  const [dateValue, setDateValue] = useState<string>('');

  const [position, setPosition] = useState<string>('');
  const [round, setRound] = useState<string>('');
  const [games, setGames] = useState<string>('');
  const [innings, setInnings] = useState<string>('');
  const [ABs, setABS] = useState<string>('');
  const [raw, setRaw] = useState<string>('');
  const [adj, setAdj] = useState<string>('');
  const [current, setCurrent] = useState<string>('');
  const [future, setFuture] = useState<string>('');

  const [physicalDest, setPhysicalDest] = useState<string>('');
  const [playerComp, setPlayerComp] = useState<string>('');

  const [hittingAbilityP, setHittingAbilityP] = useState<string>('');
  const [hittingAbilityF, setHittingAbilityF] = useState<string>('');
  const [hittingAbilityAdj, setHittingAbilityAdj] = useState<string>('');

  const [hitAppTypeP, setHitAppTypeP] = useState<string>('');
  const [hitAppTypeF, setHitAppTypeF] = useState<string>('');
  const [hitAppTypeAbj, setHitAppTypeAbj] = useState<string>('');

  const [powerFreqP, setPowerFreqP] = useState<string>('');
  const [powerFreqF, setPowerFreqF] = useState<string>('');
  const [powerFreqAbj, setPowerFreqAbj] = useState<string>('');

  const [rawPwrP, setRawPwrP] = useState<string>('');
  const [rawPwrF, setRawPwrF] = useState<string>('');
  const [rawPwrAbj, setRawPwrAbj] = useState<string>('');

  const [runningAbilityP, setRunningAbilityP] = useState<string>('');
  const [runningAbilityF, setRunningAbilityF] = useState<string>('');
  const [runningAbilityAbj, setRunningAbilityAbj] = useState<string>('');

  const [baseStealerP, setBaseStealerP] = useState<string>('');
  const [baseStealerF, setBaseStealerF] = useState<string>('');
  const [baseStealerAbj, setBaseStealerAbj] = useState<string>('');

  const [armStrengthP, setArmStrengthP] = useState<string>('');
  const [armStrengthF, setArmStrengthF] = useState<string>('');
  const [armStrengthAbj, setArmStrengthAbj] = useState<string>('');

  const [fieldingAbilityP, setFieldingAbilityP] = useState<string>('');
  const [fieldingAbilityF, setFieldingAbilityF] = useState<string>('');
  const [fieldingAbilityAbj, setFieldingAbilityAbj] = useState<string>('');

  const [handsP, setHandsP] = useState<string>('');
  const [handsF, setHandsF] = useState<string>('');
  const [handsAbj, setHandsAbj] = useState<string>('');

  const [rangeP, setRangeP] = useState<string>('');
  const [rangeF, setRangeF] = useState<string>('');
  const [rangeAbj, setRangeAbj] = useState<string>('');

  const [feetP, setFeetP] = useState<string>('');
  const [feetF, setFeetF] = useState<string>('');
  const [feetAbj, setFeetAbj] = useState<string>('');

  const [canHePlayP, setCanHePlayP] = useState<string>('');
  const [canHePlayF, setCanHePlayF] = useState<string>('');
  const [canHePlayAbj, setCanHePlayAbj] = useState<string>('');

  const parameterByPlayer = [
    {
      title: 'hittingAbility',
      p: hittingAbilityP,
      setP: (value: string) => setHittingAbilityP(value),
      f: hittingAbilityF,
      setF: (value: string) => setHittingAbilityF(value),
      adj: hittingAbilityAdj,
      setAdj: (value: string) => setHittingAbilityAdj(value),
    },
    {
      title: 'hitAppType',
      p: hitAppTypeP,
      setP: (value: string) => setHitAppTypeP(value),
      f: hitAppTypeF,
      setF: (value: string) => setHitAppTypeF(value),
      adj: hitAppTypeAbj,
      setAdj: (value: string) => setHitAppTypeAbj(value),
    },
    {
      title: 'powerFreq',
      p: powerFreqP,
      setP: (value: string) => setPowerFreqP(value),
      f: powerFreqF,
      setF: (value: string) => setPowerFreqF(value),
      adj: powerFreqAbj,
      setAdj: (value: string) => setPowerFreqAbj(value),
    },
    {
      title: 'rawPwr',
      p: rawPwrP,
      setP: (value: string) => setRawPwrP(value),
      f: rawPwrF,
      setF: (value: string) => setRawPwrF(value),
      adj: rawPwrAbj,
      setAdj: (value: string) => setRawPwrAbj(value),
    },
    {
      title: 'runningAbility',
      p: runningAbilityP,
      setP: (value: string) => setRunningAbilityP(value),
      f: runningAbilityF,
      setF: (value: string) => setRunningAbilityF(value),
      adj: runningAbilityAbj,
      setAdj: (value: string) => setRunningAbilityAbj(value),
    },
    {
      title: 'baseStealer',
      p: baseStealerP,
      setP: (value: string) => setBaseStealerP(value),
      f: baseStealerF,
      setF: (value: string) => setBaseStealerF(value),
      adj: baseStealerAbj,
      setAdj: (value: string) => setBaseStealerAbj(value),
    },
    {
      title: 'armStrength',
      p: armStrengthP,
      setP: (value: string) => setArmStrengthP(value),
      f: armStrengthF,
      setF: (value: string) => setArmStrengthF(value),
      adj: armStrengthAbj,
      setAdj: (value: string) => setArmStrengthAbj(value),
    },
    {
      title: 'fieldingAbility',
      p: fieldingAbilityP,
      setP: (value: string) => setFieldingAbilityP(value),
      f: fieldingAbilityF,
      setF: (value: string) => setFieldingAbilityF(value),
      adj: fieldingAbilityAbj,
      setAdj: (value: string) => setFieldingAbilityAbj(value),
    },
    {
      title: 'hands',
      p: handsP,
      setP: (value: string) => setHandsP(value),
      f: handsF,
      setF: (value: string) => setHandsF(value),
      adj: handsAbj,
      setAdj: (value: string) => setHandsAbj(value),
    },
    {
      title: 'range',
      p: rangeP,
      setP: (value: string) => setRangeP(value),
      f: rangeF,
      setF: (value: string) => setRangeF(value),
      adj: rangeAbj,
      setAdj: (value: string) => setRangeAbj(value),
    },
    {
      title: 'feet',
      p: feetP,
      setP: (value: string) => setFeetP(value),
      f: feetF,
      setF: (value: string) => setFeetF(value),
      adj: feetAbj,
      setAdj: (value: string) => setFeetAbj(value),
    },
    {
      title: 'canHePlay',
      p: canHePlayP,
      setP: (value: string) => setCanHePlayP(value),
      f: canHePlayF,
      setF: (value: string) => setCanHePlayF(value),
      adj: canHePlayAbj,
      setAdj: (value: string) => setCanHePlayAbj(value),
    },
  ];

  const itemColor = (item: string) => {
    switch (item) {
      case '2': {
        return {...styles.textInput, ...styles.textInputColorTwo};
      }
      case '3': {
        return {...styles.textInput, ...styles.textInputColorTree};
      }
      case '4': {
        return {...styles.textInput, ...styles.textInputColorFore};
      }
      case '5': {
        return {...styles.textInput, ...styles.textInputColorFife};
      }
      case '6': {
        return {...styles.textInput, ...styles.textInputColorSix};
      }
      case '7': {
        return {...styles.textInput, ...styles.textInputColorSeven};
      }
      case '8': {
        return {...styles.textInput, ...styles.textInputColorAit};
      }
      default: {
        return {...styles.textInput};
      }
    }
  };

  const renderParameterItem = (value: string, setValue: (value: string) => void) => {
    return (
      <View style={styles.parameterTextInputContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="#929292"
          style={itemColor(value)}
          onChangeText={setValue}
          value={value}
          maxLength={1}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ReportsHeader
          goBackAction={routerActions.goBack}
          dateValue={dateValue}
          setDateValue={setDateValue}
          mode="pro"
          style={styles.reportHeader}
        />
        <RoleFuturePositionRound
          positionText={t('roleFuturePosition')}
          positionValue={position}
          positionSetValue={setPosition}
          AbsSetValue={setABS}
          ABsText={t('ABs')}
          ABsValue={ABs}
          adjSetValue={setAdj}
          adjText={t('adj')}
          adjValue={adj}
          currentSetValue={setCurrent}
          currentText={t('current')}
          currentValue={current}
          futureSetValue={setFuture}
          futureText={t('future')}
          futureValue={future}
          gamesSetValue={setGames}
          gamesText={t('games')}
          gamesValue={games}
          inningsSetValue={setInnings}
          inningsText={t('innings')}
          inningsValue={innings}
          rawSetValue={setRaw}
          rawText={t('raw')}
          rawValue={raw}
          roundSetValue={setRound}
          roundText={t('round')}
          roundValue={round}
        />
        <ReportsInput
          title={t('physicalDest')}
          value={physicalDest}
          setValue={setPhysicalDest}
        />
        <ReportsInput
          title={t('playerComp')}
          value={playerComp}
          setValue={setPlayerComp}
        />
        <View style={styles.parameterItemsContainer}>
          <View style={styles.parameterItemsTitle}>
            <Text style={styles.textParameter}>{t('parameter')}</Text>
            <Text style={styles.textP}>{t('p')}</Text>
            <Text style={styles.textF}>{t('f')}</Text>
            <Text style={styles.textAdj}>{t('adj')}</Text>
          </View>
          <View style={styles.parameterItemContainer}>
            <FlatList
              data={parameterByPlayer}
              renderItem={({item}) => {
                const {adj, f, p, title, setAdj, setF, setP} = item;
                return (
                  <View style={styles.parameterItem}>
                    <ScrollView style={styles.parameterItemScrollView} horizontal>
                      <View style={styles.parameterItem}>
                        <Text style={styles.parameterItemTitle}>{title}</Text>
                        {renderParameterItem(p, setP)}
                        {renderParameterItem(f, setF)}
                        {renderParameterItem(adj, setAdj)}
                      </View>
                    </ScrollView>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProReports;
