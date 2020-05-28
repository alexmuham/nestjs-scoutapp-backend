import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Report.styles';
import {useTranslation} from 'react-i18next';
import {useRouterActions} from 'state/hooks/UseActions';
import {useParams} from 'react-router-native';

const Reports: React.FC = () => {
  const {t} = useTranslation('reports');
  const routerActions = useRouterActions();
  const {id} = useParams();

  const renderItem = (text: string, onPress: () => void) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <Text style={styles.itemText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('reports')}</Text>
      </View>
      <View>
        <View style={styles.textContainer}>
          <Text>{t('SelectReportType')}</Text>
        </View>
        <View>
          {renderItem(t('general'), () => routerActions.navigateToGeneralReports(id))}
          {renderItem(t('pro'), () => routerActions.navigateToProReports(id))}
          {renderItem(t('pitcherPro'), () =>
            routerActions.navigateToPitcherProReports(id),
          )}
        </View>
      </View>
    </View>
  );
};

export default Reports;
