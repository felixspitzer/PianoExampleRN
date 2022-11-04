import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {pianoAnalytics} from 'piano-analytics-js';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  useEffect(() => {
    console.log('Hi');
    pianoAnalytics.setConfigurations({
      site: 123456789, // ADD YOUR SITE ID HERE ----------------------------------------<<<
      collectDomain: 'https://my.collect.domain', // ADD YOUR COLLECT DOMAIN HERE ------<<<
    });
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const sendPageDisplay = () => {
    pianoAnalytics.sendEvent('page.display', {
      page: 'Page label',
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Header />
      <View style={styles.stuff}>
        <Button title="page.display" onPress={sendPageDisplay} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stuff: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
