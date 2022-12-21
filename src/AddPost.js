import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const AddPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Add Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddPost;
