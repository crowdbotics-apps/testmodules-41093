import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, FlatList, Text, View } from "react-native";
const data = [{
  id: 1,
  title: "Item 1",
  description: "Description 1"
}, {
  id: 2,
  title: "Item 2",
  description: "Description 2"
}, {
  id: 3,
  title: "Item 3",
  description: "Description 3"
}, {
  id: 4,
  title: "Item 4",
  description: "Description 4"
}, {
  id: 5,
  title: "Item 5",
  description: "Description 5"
}];

const Item = ({
  title,
  description
}) => <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>;

const Untitled4 = () => {
  const renderItem = ({
    item
  }) => <Item title={item.title} description={item.description} />;

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    marginTop: 5
  }
});
export default Untitled4;