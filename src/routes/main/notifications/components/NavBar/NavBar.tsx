import React from 'react';
import {View, Text, TouchableOpacity, ViewProps, FlatList} from 'react-native';
import styles from './NavBar.styles';

interface INavList extends ViewProps {
  pages: Array<string>;
  activePage: string;
  changePage: (path: string) => void;
}

interface INavElement extends ViewProps {
  title: string;
  changePage: (path: string) => void;
  isActive: boolean;
}

const NavElement: React.FC<INavElement> = ({title, changePage, isActive}) => (
  <TouchableOpacity
    style={[styles.navElement, isActive ? styles.navActiveElem : null]}
    onPress={() => changePage(title)}
  >
    <Text
      style={[styles.navElementTitle, isActive ? styles.navActiveElementTitle : null]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const NavBar: React.FC<INavList> = ({pages, activePage, changePage}) => {
  return (
    <View style={styles.nav}>
      <FlatList
        horizontal
        contentContainerStyle={styles.flatList}
        data={pages}
        renderItem={({item}) => (
          <NavElement
            title={item}
            changePage={changePage}
            isActive={activePage === item}
          />
        )}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default NavBar;
