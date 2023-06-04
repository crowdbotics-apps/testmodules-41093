import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const Home = () => {

  return (
    <SafeAreaView>
      <style type="text/css">{`
        @font-face {
          font-family: 'OpenSans-Bold';
          src: local('OpenSans-Bold'), url(${require("../../assets/fonts/OpenSans-Bold.ttf")}) format('truetype');
        }
        @font-face {
          font-family: 'OpenSans-Regular';
          src: local('OpenSans-Regular'), url(${require("../../assets/fonts/OpenSans-Regular.ttf")}) format('truetype');
        }
      `}</style>
      <View>
        <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 27 }}>OpenSans-Bold</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});
export default Home;