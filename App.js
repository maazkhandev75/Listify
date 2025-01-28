import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Task from "./components/task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today's Tasks Section */}
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>
        <ScrollView style={styles.items}>
          {/* This is where the tasks will go */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Write a task section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write Task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  sectionWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 28,
    fontWeight: "bold",
    alignSelf:"center"

  },
  items: {
    marginVertical: 30,
    maxHeight: "70%", // Limit height for better UX
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    color: "#000000",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#d8d8d8",
    borderRadius: 60,
    borderColor: "#757575",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: "#474747",
    borderWidth: 1,
    backgroundColor: "#dedede",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#1d1d1d",
  },
});
