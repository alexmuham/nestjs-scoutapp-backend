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
import {useProReportsActions, useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';
import {itemColor} from 'utils/itemColorUtil';
import ProReportsRequest, {ReportDate, Parameter} from 'entities/proReportsRequest';
import {useParams} from 'react-router-native';
import {MaskService, TextInputMaskOptionProp} from 'react-native-masked-text';

const MaskType = 'datetime';
const MaskOptions: TextInputMaskOptionProp = {format: 'MM/DD/YYYY'};

const ProReports: React.FC = () => {
  const {t} = useTranslation('proReports');
  const routerActions = useRouterActions();
  const {id} = useParams();
  const actions = useProReportsActions();

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
  const [hitAppTypeAdj, setHitAppTypeAdj] = useState<string>('');

  const [powerFreqP, setPowerFreqP] = useState<string>('');
  const [powerFreqF, setPowerFreqF] = useState<string>('');
  const [powerFreqAdj, setPowerFreqAdj] = useState<string>('');

  const [rawPwrP, setRawPwrP] = useState<string>('');
  const [rawPwrF, setRawPwrF] = useState<string>('');
  const [rawPwrAdj, setRawPwrAdj] = useState<string>('');

  const [runningAbilityP, setRunningAbilityP] = useState<string>('');
  const [runningAbilityF, setRunningAbilityF] = useState<string>('');
  const [runningAbilityAdj, setRunningAbilityAdj] = useState<string>('');

  const [baseStealerP, setBaseStealerP] = useState<string>('');
  const [baseStealerF, setBaseStealerF] = useState<string>('');
  const [baseStealerAdj, setBaseStealerAdj] = useState<string>('');

  const [armStrengthP, setArmStrengthP] = useState<string>('');
  const [armStrengthF, setArmStrengthF] = useState<string>('');
  const [armStrengthAdj, setArmStrengthAdj] = useState<string>('');

  const [fieldingAbilityP, setFieldingAbilityP] = useState<string>('');
  const [fieldingAbilityF, setFieldingAbilityF] = useState<string>('');
  const [fieldingAbilityAdj, setFieldingAbilityAdj] = useState<string>('');

  const [handsP, setHandsP] = useState<string>('');
  const [handsF, setHandsF] = useState<string>('');
  const [handsAdj, setHandsAdj] = useState<string>('');

  const [rangeP, setRangeP] = useState<string>('');
  const [rangeF, setRangeF] = useState<string>('');
  const [rangeAdj, setRangeAdj] = useState<string>('');

  const [feetP, setFeetP] = useState<string>('');
  const [feetF, setFeetF] = useState<string>('');
  const [feetAdj, setFeetAdj] = useState<string>('');

  const [canHePlayP, setCanHePlayP] = useState<string>('');
  const [canHePlayF, setCanHePlayF] = useState<string>('');
  const [canHePlayAdj, setCanHePlayAdj] = useState<string>('');

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
      adj: hitAppTypeAdj,
      setAdj: (value: string) => setHitAppTypeAdj(value),
    },
    {
      title: t('powerFreq'),
      p: powerFreqP,
      setP: (value: string) => setPowerFreqP(value),
      f: powerFreqF,
      setF: (value: string) => setPowerFreqF(value),
      adj: powerFreqAdj,
      setAdj: (value: string) => setPowerFreqAdj(value),
    },
    {
      title: t('rawPwr'),
      p: rawPwrP,
      setP: (value: string) => setRawPwrP(value),
      f: rawPwrF,
      setF: (value: string) => setRawPwrF(value),
      adj: rawPwrAdj,
      setAdj: (value: string) => setRawPwrAdj(value),
    },
    {
      title: t('runningAbility'),
      p: runningAbilityP,
      setP: (value: string) => setRunningAbilityP(value),
      f: runningAbilityF,
      setF: (value: string) => setRunningAbilityF(value),
      adj: runningAbilityAdj,
      setAdj: (value: string) => setRunningAbilityAdj(value),
    },
    {
      title: t('baseStealer'),
      p: baseStealerP,
      setP: (value: string) => setBaseStealerP(value),
      f: baseStealerF,
      setF: (value: string) => setBaseStealerF(value),
      adj: baseStealerAdj,
      setAdj: (value: string) => setBaseStealerAdj(value),
    },
    {
      title: t('armStrength'),
      p: armStrengthP,
      setP: (value: string) => setArmStrengthP(value),
      f: armStrengthF,
      setF: (value: string) => setArmStrengthF(value),
      adj: armStrengthAdj,
      setAdj: (value: string) => setArmStrengthAdj(value),
    },
    {
      title: t('fieldingAbility'),
      p: fieldingAbilityP,
      setP: (value: string) => setFieldingAbilityP(value),
      f: fieldingAbilityF,
      setF: (value: string) => setFieldingAbilityF(value),
      adj: fieldingAbilityAdj,
      setAdj: (value: string) => setFieldingAbilityAdj(value),
    },
    {
      title: t('hands'),
      p: handsP,
      setP: (value: string) => setHandsP(value),
      f: handsF,
      setF: (value: string) => setHandsF(value),
      adj: handsAdj,
      setAdj: (value: string) => setHandsAdj(value),
    },
    {
      title: t('range'),
      p: rangeP,
      setP: (value: string) => setRangeP(value),
      f: rangeF,
      setF: (value: string) => setRangeF(value),
      adj: rangeAdj,
      setAdj: (value: string) => setRangeAdj(value),
    },
    {
      title: t('feet'),
      p: feetP,
      setP: (value: string) => setFeetP(value),
      f: feetF,
      setF: (value: string) => setFeetF(value),
      adj: feetAdj,
      setAdj: (value: string) => setFeetAdj(value),
    },
    {
      title: t('canHePlay'),
      p: canHePlayP,
      setP: (value: string) => setCanHePlayP(value),
      f: canHePlayF,
      setF: (value: string) => setCanHePlayF(value),
      adj: canHePlayAdj,
      setAdj: (value: string) => setCanHePlayAdj(value),
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

  const getDateByString = (value: string): Date => {
    const rawString = MaskService.toRawValue(MaskType, value, MaskOptions);
    return new Date(rawString);
  };

  const reportDate: ReportDate = {
    ABs,
    adj,
    current,
    dateValue: new Date(),
    future,
    games,
    innings,
    physicalDest,
    playerComp,
    position,
    raw,
    round,
    matchDate: getDateByString(dateValue),
  };
  const parameterP: Parameter = {
    armStrength: armStrengthP,
    baseStealer: baseStealerP,
    canHePlay: canHePlayP,
    feet: feetP,
    fieldingAbility: fieldingAbilityP,
    hands: handsP,
    hitAppType: hitAppTypeP,
    hittingAbility: hittingAbilityP,
    powerFreq: powerFreqP,
    range: rangeP,
    rawPwr: rawPwrP,
    runningAbility: runningAbilityP,
  };
  const parameterF: Parameter = {
    armStrength: armStrengthF,
    baseStealer: baseStealerF,
    canHePlay: canHePlayF,
    feet: feetF,
    fieldingAbility: fieldingAbilityF,
    hands: handsF,
    hitAppType: hitAppTypeF,
    hittingAbility: hittingAbilityF,
    powerFreq: powerFreqF,
    range: rangeF,
    rawPwr: rawPwrF,
    runningAbility: runningAbilityF,
  };
  const parameterAdj: Parameter = {
    armStrength: armStrengthAdj,
    baseStealer: baseStealerAdj,
    canHePlay: canHePlayAdj,
    feet: feetAdj,
    fieldingAbility: fieldingAbilityAdj,
    hands: handsAdj,
    hitAppType: hitAppTypeAdj,
    hittingAbility: hittingAbilityAdj,
    powerFreq: powerFreqAdj,
    range: rangeAdj,
    rawPwr: rawPwrAdj,
    runningAbility: runningAbilityAdj,
  };

  const request = (): ProReportsRequest => ({
    sixtyYard,
    signAbilityComment,
    signAbility,
    posInOrder,
    playerId: id,
    OFPOffense,
    OFPDefense,
    instincts,
    infield,
    howWellSeenComment,
    howWellSeen,
    howWellKnownComment,
    howWellKnown,
    homeToFirst,
    handEyeControl,
    fortyYard,
    ETA,
    entryLevel,
    competitiveness,
    character,
    BP,
    bodyControl,
    baseballIQ,
    athleticism,
    aggressiveness,
    parameterAdj,
    parameterF,
    parameterP,
    reportDate,
  });

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
          <Button
            visualStyle="solid"
            title={t('saveReport')}
            style={styles.button}
            onPress={() => actions.addProReports(request())}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProReports;
