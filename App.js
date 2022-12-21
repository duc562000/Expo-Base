import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DetailPost from "./src/DetailPost";
import Home from "./src/Home";
import { MaterialIcons } from "@expo/vector-icons";
import AddPost from "./src/AddPost";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Danh sách bài viết",
            headerRight: () => (
              <TouchableOpacity
                onPress={({}) => navigation.navigate("AddPost")}
              >
                <MaterialIcons name="add" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Chi tiết bài viết",
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log(object)}>
                <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          name="DetailPost"
          component={DetailPost}
        />
        <Stack.Screen name="AddPost" component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
