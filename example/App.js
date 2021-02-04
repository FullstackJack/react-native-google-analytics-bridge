import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import {GoogleAnalyticsTracker} from 'react-native-google-analytics-bridge';


const App = () => {
  const tracker = new GoogleAnalyticsTracker('UA-12345-1');
  tracker.trackScreenView("Home");
  tracker.trackEvent("testcategory", "testaction");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>GoogleAnalyticsTracker</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f3f3f3',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#303030',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#303030',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
