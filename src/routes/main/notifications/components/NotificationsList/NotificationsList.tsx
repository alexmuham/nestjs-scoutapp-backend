import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './NotificationsList.styles';

interface INotificationItem {
    body: string;
    time: string;
    isNew: boolean;
    type?: "friends" | "players" | undefined;
}

// interface INotificationDataByDay {
//     date: string;
//     data: Array<INotificationItem>;
// }

// interface INotificationListProps {
//     data: Array<INotificationDataByDay>;
//     currentPage: string;
// }

interface INotificBlockByDayProps {
    date: string;
    data: Array<INotificationItem>;
    activePage: string;
}

const NotificationMessage: React.FC<INotificationItem> =
    ({
         body,
         time,  //тут в зависимости от типа будет по разному отображаться уведомление
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


const NotificBlockByDay: React.FC<INotificBlockByDayProps> = ({data, date, activePage}) => {
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

const NotificationsList: React.FC<any> = ({data, currentPage}) => { //должно быть <INotificationListProps> но возникает ошибка ts, хотя в приложении работает, пытался пофиксить, но так и не смог
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
