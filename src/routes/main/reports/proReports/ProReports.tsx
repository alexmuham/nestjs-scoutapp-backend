import React, {useState} from 'react';
import {FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './ProReports.styles';
import {
  Button,
  ReportCommentsField,
  ReportParameterItem,
  ReportsHeader,
  ReportsInput,
  RoleFuturePositionRound,
} from 'components';
import {useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import {itemColor} from 'utils/itemColorUtil';

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

  const [aggressiveness, setAggressiveness] = useState<string>('');
  const [athleticism, setAthleticism] = useState<string>('');
  const [bodyControl, setBodyControl] = useState<string>('');
  const [instincts, setInstincts] = useState<string>('');
  const [competitiveness, setCompetitiveness] = useState<string>('');
  const [baseballIQ, setBaseballIQ] = useState<string>('');
  const [handEyeControl, setHandEyeControl] = useState<string>('');
  const [BP, setBP] = useState<string>('');
  const [infield, setInfield] = useState<string>('');
  const [OFPOffense, setOFPOffense] = useState<string>('');
  const [OFPDefense, setOFPDefense] = useState<string>('');
  const [homeToFirst, setHomeToFirst] = useState<string>('');
  const [sixtyYard, setSixtyYard] = useState<string>('');
  const [fortyYard, setFortyYard] = useState<string>('');
  const [posInOrder, setPosInOrder] = useState<string>('');
  const [character, setCharacter] = useState<string>('');
  const [entryLevel, setEntryLevel] = useState<string>('');
  const [ETA, setETA] = useState<string>('');

  const [howWellKnown, setHowWellKnown] = useState<string>('');
  const [howWellKnownComment, setHowWellKnownComment] = useState<string>('');

  const [howWellSeen, setHowWellSeen] = useState<string>('');
  const [howWellSeenComment, setHowWellSeenComment] = useState<string>('');

  const [signAbility, setSignAbility] = useState<string>('');
  const [signAbilityComment, setSignAbilityComment] = useState<string>('');

  const parameterByPlayer = [
    {
      title: t('hittingAbility'),
      p: hittingAbilityP,
      setP: (value: string) => setHittingAbilityP(value),
      f: hittingAbilityF,
      setF: (value: string) => setHittingAbilityF(value),
      adj: hittingAbilityAdj,
      setAdj: (value: string) => setHittingAbilityAdj(value),
    },
    {
      title: t('hitAppType'),
      p: hitAppTypeP,
      setP: (value: string) => setHitAppTypeP(value),
      f: hitAppTypeF,
      setF: (value: string) => setHitAppTypeF(value),
      adj: hitAppTypeAbj,
      setAdj: (value: string) => setHitAppTypeAbj(value),
    },
    {
      title: t('powerFreq'),
      p: powerFreqP,
      setP: (value: string) => setPowerFreqP(value),
      f: powerFreqF,
      setF: (value: string) => setPowerFreqF(value),
      adj: powerFreqAbj,
      setAdj: (value: string) => setPowerFreqAbj(value),
    },
    {
      title: t('rawPwr'),
      p: rawPwrP,
      setP: (value: string) => setRawPwrP(value),
      f: rawPwrF,
      setF: (value: string) => setRawPwrF(value),
      adj: rawPwrAbj,
      setAdj: (value: string) => setRawPwrAbj(value),
    },
    {
      title: t('runningAbility'),
      p: runningAbilityP,
      setP: (value: string) => setRunningAbilityP(value),
      f: runningAbilityF,
      setF: (value: string) => setRunningAbilityF(value),
      adj: runningAbilityAbj,
      setAdj: (value: string) => setRunningAbilityAbj(value),
    },
    {
      title: t('baseStealer'),
      p: baseStealerP,
      setP: (value: string) => setBaseStealerP(value),
      f: baseStealerF,
      setF: (value: string) => setBaseStealerF(value),
      adj: baseStealerAbj,
      setAdj: (value: string) => setBaseStealerAbj(value),
    },
    {
      title: t('armStrength'),
      p: armStrengthP,
      setP: (value: string) => setArmStrengthP(value),
      f: armStrengthF,
      setF: (value: string) => setArmStrengthF(value),
      adj: armStrengthAbj,
      setAdj: (value: string) => setArmStrengthAbj(value),
    },
    {
      title: t('fieldingAbility'),
      p: fieldingAbilityP,
      setP: (value: string) => setFieldingAbilityP(value),
      f: fieldingAbilityF,
      setF: (value: string) => setFieldingAbilityF(value),
      adj: fieldingAbilityAbj,
      setAdj: (value: string) => setFieldingAbilityAbj(value),
    },
    {
      title: t('hands'),
      p: handsP,
      setP: (value: string) => setHandsP(value),
      f: handsF,
      setF: (value: string) => setHandsF(value),
      adj: handsAbj,
      setAdj: (value: string) => setHandsAbj(value),
    },
    {
      title: t('range'),
      p: rangeP,
      setP: (value: string) => setRangeP(value),
      f: rangeF,
      setF: (value: string) => setRangeF(value),
      adj: rangeAbj,
      setAdj: (value: string) => setRangeAbj(value),
    },
    {
      title: t('feet'),
      p: feetP,
      setP: (value: string) => setFeetP(value),
      f: feetF,
      setF: (value: string) => setFeetF(value),
      adj: feetAbj,
      setAdj: (value: string) => setFeetAbj(value),
    },
    {
      title: t('canHePlay'),
      p: canHePlayP,
      setP: (value: string) => setCanHePlayP(value),
      f: canHePlayF,
      setF: (value: string) => setCanHePlayF(value),
      adj: canHePlayAbj,
      setAdj: (value: string) => setCanHePlayAbj(value),
    },
  ];

  const additionalParametersByPlayer = [
    {
      title: t('aggressiveness'),
      value: aggressiveness,
      setValue: (value: string) => setAggressiveness(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('athleticism'),
      value: athleticism,
      setValue: (value: string) => setAthleticism(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('bodyControl'),
      value: bodyControl,
      setValue: (value: string) => setBodyControl(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('instincts'),
      value: instincts,
      setValue: (value: string) => setInstincts(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('competitiveness'),
      value: competitiveness,
      setValue: (value: string) => setCompetitiveness(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('baseballIQ'),
      value: baseballIQ,
      setValue: (value: string) => setBaseballIQ(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('handEyeControl'),
      value: handEyeControl,
      setValue: (value: string) => setHandEyeControl(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('BP'),
      value: BP,
      setValue: (value: string) => setBP(value),
      multiline: true,
      maxLength: 50,
    },
    {
      title: t('infield'),
      value: infield,
      setValue: (value: string) => setInfield(value),
      multiline: true,
      maxLength: 50,
    },
    {
      title: t('OFPOffense'),
      value: OFPOffense,
      setValue: (value: string) => setOFPOffense(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('OFPDefense'),
      value: OFPDefense,
      setValue: (value: string) => setOFPDefense(value),
      multiline: false,
      maxLength: 1,
      type: 'digital',
    },
    {
      title: t('homeToFirst'),
      value: homeToFirst,
      setValue: (value: string) => setHomeToFirst(value),
      multiline: true,
      maxLength: 50,
    },
    {
      title: t('sixtyYard'),
      value: sixtyYard,
      setValue: (value: string) => setSixtyYard(value),
      multiline: true,
      maxLength: 50,
    },
    {
      title: t('fortyYard'),
      value: fortyYard,
      setValue: (value: string) => setFortyYard(value),
      multiline: true,
      maxLength: 50,
    },
    {
      title: t('posInOrder'),
      value: posInOrder,
      setValue: (value: string) => setPosInOrder(value),
      multiline: true,
      maxLength: 50,
    },
    {
      title: t('character'),
      value: character,
      setValue: (value: string) => setCharacter(value),
      multiline: true,
      maxLength: 50,
    },
    {
      title: t('entryLevel'),
      value: entryLevel,
      setValue: (value: string) => setEntryLevel(value),
      multiline: true,
      maxLength: 50,
    },
    {
      title: t('ETA'),
      value: ETA,
      setValue: (value: string) => setETA(value),
      multiline: true,
      maxLength: 50,
    },
  ];

  const additionalParametersByPlayerWithCommentField = [
    {
      title: t('howWellKnown'),
      value: howWellKnown,
      setValue: (value: string) => setHowWellKnown(value),
      commentValue: howWellKnownComment,
      setComment: (value: string) => setHowWellKnownComment(value),
      placeholder: t('comment'),
    },
    {
      title: t('howWellSeen'),
      value: howWellSeen,
      setValue: (value: string) => setHowWellSeen(value),
      commentValue: howWellSeenComment,
      setComment: (value: string) => setHowWellSeenComment(value),
      placeholder: t('comment'),
    },
    {
      title: t('signAbility'),
      value: signAbility,
      setValue: (value: string) => setSignAbility(value),
      commentValue: signAbilityComment,
      setComment: (value: string) => setSignAbilityComment(value),
      placeholder: t('comment'),
    },
  ];

  const renderParameterItem = (value: string, setValue: (value: string) => void) => {
    return (
      <View style={styles.parameterTextInputContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="#929292"
          style={itemColor(value, styles.textInput)}
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
        <View style={styles.additionalInfoContainer}>
          <FlatList
            data={additionalParametersByPlayer}
            renderItem={({item, index}) => {
              const {title, value, setValue, type, maxLength, multiline} = item;
              return (
                <ReportParameterItem
                  value={value}
                  title={title}
                  setValue={setValue}
                  multiline={multiline}
                  maxLength={maxLength}
                  type={type}
                  style={index === 14 ? styles.additionalInfoContainer : undefined}
                />
              );
            }}
          />
        </View>
        <View style={styles.additionalInfoContainer}>
          <FlatList
            data={additionalParametersByPlayerWithCommentField}
            renderItem={({item}) => {
              const {
                title,
                value,
                setValue,
                commentValue,
                setComment,
                placeholder,
              } = item;
              return (
                <ReportCommentsField
                  value={value}
                  title={title}
                  setValue={setValue}
                  setComment={setComment}
                  commentValue={commentValue}
                  placeholder={placeholder}
                />
              );
            }}
          />
        </View>
        <View>
          <Button visualStyle="solid" title={t('saveReport')} style={styles.button} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProReports;
