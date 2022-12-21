import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { newsApi } from "./apis/Function/newsApi";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await newsApi();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("DetailPost")}>
        <Text>Detail Post</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data?.articles}
        renderItem={({ item }) => (
          <View style={{}}>
            <Text>`-${item?.content}`</Text>
          </View>
        )}
      />
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

export default Home;
