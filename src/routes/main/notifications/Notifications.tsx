import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './Notifications.styles';
import NavBar from './components/NavBar/NavBar';
import NotificationsList, {
  INotificationDataByDay,
} from './components/NotificationsList/NotificationsList';
import ProfileTypeManager from './components/ProfileTypeManager/ProfileTypeManager';

const dataExample: Array<INotificationDataByDay> = [
  {
    date: '25 march',
    data: [
      {
        body: 'Shawn has subscribed',
        time: '05:05 PM',
        type: 'friends',
        isNew: true,
      },
      {
        body: 'Richard has broken leg',
        time: '05:05 PM',
        type: 'players',
        isNew: true,
      },
      {
        body: 'Borya has subscribed',
        time: '05:05 PM',
        type: 'friends',
        isNew: false,
      },
      {
        body: 'Trevis get a cup',
        time: '05:05 PM',
        type: 'players',
        isNew: false,
      },
    ],
  },
  {
    date: '26 march',
    data: [
      {
        body: 'Shown has subscribed',
        time: '05:05 PM',
        type: 'friends',
        isNew: true,
      },
      {
        body: 'Richard has broken leg',
        time: '05:05 PM',
        type: 'players',
        isNew: true,
      },
      {
        body: 'Borya has subscribed',
        time: '05:05 PM',
        type: 'friends',
        isNew: false,
      },
      {
        body: 'Trevis get a cup',
        time: '05:05 PM',
        type: 'players',
        isNew: false,
      },
    ],
  },
];

const Notifications: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('All');

  const handleChangePage = (path: string) => {
    setActivePage(path);
  };

  return (
    <View style={styles.container}>
      <View style={styles.notificationBox}>
        <NavBar
          pages={['All', 'Players', 'Friends']}
          activePage={activePage}
          changePage={handleChangePage}
        />
        <ProfileTypeManager />
        <NotificationsList data={dataExample} currentPage={activePage.toLowerCase()} />
      </View>
    </View>
  );
};

export default Notifications;
