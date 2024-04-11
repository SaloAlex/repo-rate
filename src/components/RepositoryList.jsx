import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import repositories from "../data/repositories.js";
import RepositoryItems from "./RepositoryItems.jsx";

const RepositoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RepositoryItems repo={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RepositoryList;