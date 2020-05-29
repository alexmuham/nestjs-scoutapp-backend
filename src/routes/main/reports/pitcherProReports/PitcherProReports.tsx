import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './PitcherProReports.styles';
import {ReportsHeader, RoleFuturePositionRound} from 'components';
import {useRouterActions} from 'state/hooks/UseActions';
import {useTranslation} from 'react-i18next';

const PitcherProReports: React.FC = () => {
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
      </ScrollView>
    </View>
  );
};

export default PitcherProReports;
