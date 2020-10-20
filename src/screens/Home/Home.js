import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {Header, TimeBar} from '../../components';

export default function Home() {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#E24040" />
        <View>
          <Header />
          <TimeBar />
        </View>
      </SafeAreaView>
    </>
  );
}
