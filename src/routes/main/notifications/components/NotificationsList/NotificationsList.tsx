import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './NotificationsList.styles';

interface INotificationItem {
  body: string;
  time: string;
  isNew: boolean;
  type?: 'friends' | 'players' | undefined;
}

export interface INotificationDataByDay {
  date: string;
  data: INotificationItem[];
}

interface INotificationListProps {
  data: INotificationDataByDay[];
  currentPage: string;
}

interface INotificationBlockByDayProps {
  date: string;
  data: INotificationItem[];
  activePage: string;
}

const NotificationMessage: React.FC<INotificationItem> = ({
  body,
  time, // тут в зависимости от типа будет по разному отображаться уведомление
  isNew,
}) => {
  return (
    <View style={styles.shadow}>
      <View style={styles.notificationItem}>
        {isNew && <Text style={styles.notificationItemNew}>New</Text>}
        <Text style={styles.notificationItemTitle}>{body}</Text>
        <Text style={styles.notificationItemTime}>{time}</Text>
      </View>
    </View>
  );
};

const NotificationBlockByDay: React.FC<INotificationBlockByDayProps> = ({
  data,
  date,
  activePage,
}) => {
  const dataFilterByType =
    activePage === 'all' ? data : data.filter((item) => item.type === activePage);
  return (
    <View>
      <Text style={styles.dayTitle}>{`Notification(s) for ${date}`}</Text>
      <View style={styles.notificationsContainer}>
        <FlatList
          contentContainerStyle={{flex: 1}}
          data={dataFilterByType}
          renderItem={(item) => <NotificationMessage {...item.item} />}
          keyExtractor={(item) => item.body}
        />
      </View>
    </View>
  );
};

const NotificationsList: React.FC<INotificationListProps> = ({data, currentPage}) => {
  return (
    <View style={styles.daysContainer}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => (
          <NotificationBlockByDay activePage={currentPage} {...item.item} />
        )}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
};

export default NotificationsList;
