import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { newsApi } from "./apis/Function/newsApi";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState(false);
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  console.log(
    data?.articles?.filter((i) => {
      const regax = new RegExp(`${text}`, "gi");
      return i.content.match(regax);
    })
  );
  const getData = async () => {
    const res = await newsApi();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setmasterData(data?.articles);
    };
    fetchData();
  }, []);
  const searchFilter = (text) => {
    setSearch(true);
    let matches = [];
    if (text.length > 0) {
      matches = data?.articles?.filter((i) => {
        const regax = new RegExp(`${text}`, "gi");
        return i.content.match(regax);
      });
      console.log(matches);
    } else {
      setSearch(false);
    }
    setfilterData(matches);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.navigate("DetailPost")}>
        <Text>Detail Post</Text>
      </TouchableOpacity> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <TouchableOpacity
          onPress={() => searchFilter(text)}
          style={{
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ccc",
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        // keyExtractor={(item) => item.id}
        data={search ? filterData : data?.articles}
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
    // alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});

export default Home;
