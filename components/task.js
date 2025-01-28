import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.circular}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#cccccc",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  
  itemText: {
    maxWidth: "80%",
	  color:'#171717',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 5,
    marginRight:15,
  },
});

export default Task;
