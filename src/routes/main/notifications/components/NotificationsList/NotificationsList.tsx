import React from 'react';
import {View, Text, ViewProps, FlatList} from 'react-native';
import styles from './NotificationsList.styles';

interface INotificationsList extends ViewProps {
    data: Array<IDayNotifications>
    currentPage: string
}

interface IDayNotifications extends ViewProps {
    date: string,
    data: Array<INotificationMessage>,
    activePage: string
}

interface INotificationMessage extends ViewProps {
    body: string,
    time: string,
    type: 'friends' | 'players',
    isNew: boolean
}

const NotificationMessage: React.FC<INotificationMessage> =
    ({
         body,
         time,
         type,   //тут в зависимости от типа будет по разному отображаться уведомление
         isNew
     }) => {
    return (
        <View style={styles.shadow}>
            <View style={styles.notificationItem}>
                {isNew && <Text style={styles.notificationItemNew}>New</Text>}
                <Text style={styles.notificationItemTitle}>{body}</Text>
                <Text style={styles.notificationItemTime}>{time}</Text>
            </View>
        </View>
    )
}


const NotificBlockByDay: React.FC<IDayNotifications> = ({data, date, activePage}) => {
    const dataFiltrByType = activePage === 'all' ? data : data.filter(item => item.type === activePage);
    return (
        <View>
            <Text style={styles.dayTitle}>{`Notification(s) for ${date}`}</Text>
            <View style={styles.notificationsContainer}>
                <FlatList
                    contentContainerStyle={{flex: 1}}
                    data={dataFiltrByType}
                    renderItem={item => <NotificationMessage {...item.item}/>}
                    keyExtractor={item => item.body}
                />
            </View>
        </View>
    )
}

const NotificationsList: React.FC<INotificationsList> = ({data, currentPage}) => {
    return (
        <View  style={styles.daysContainer}>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={item => <NotificBlockByDay activePage={currentPage} {...item.item}/>}
                keyExtractor={item => item.date}
            />
        </View>
    )
}

export default NotificationsList;
