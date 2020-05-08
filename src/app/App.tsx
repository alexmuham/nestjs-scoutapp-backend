import React from 'react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {getStore} from 'state';
import {NativeRouter, Route, Link} from 'react-router-native';
import {Text, View} from 'react-native';
import {Registration} from '../screens/auth';

const App: React.FC = () => {
  return (
    <Registration />
    // <Text>TEXT</Text>
    // <Provider store={getStore()} />
    // <NativeRouter>
    //   <View>
    //     <View>
    //       <Link to="/" underlayColor="#f0f4f7">
    //         <Text>Home</Text>
    //       </Link>
    //       <Link to="/about" underlayColor="#f0f4f7">
    //         <Text>About</Text>
    //       </Link>
    //       <Link to="/topics" underlayColor="#f0f4f7">
    //         <Text>Topics</Text>
    //       </Link>
    //     </View>
    //
    //     <Route exact path="/" component={registration} />
    //   </View>
    // </NativeRouter>
    // </Provider>
  );
};

export default App;
