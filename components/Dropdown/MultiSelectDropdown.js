import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

// Dữ liệu bài đăng mẫu
const posts = [
  {
    id: 0,
    avatar: require("./images/ava.png"),
    username: "PuwuNek",
    status: "Hi, hope you have a great day!",
    posting: require("./images/post.png"),
    state: true,
    like: 100,
    share: 30,
    comment: 450,
  },
  {
    id: 1,
    avatar: require("./images/ava2.png"),
    username: "Reinek",
    status: "What a beautiful day!",
    posting: require("./images/post2.png"),
    state: true,
    like: 200,
    share: 50,
    comment: 60,
  },
  {
    id: 2,
    avatar: require("./images/ava3.png"),
    username: "Ningningnek",
    status: "My first potshot!",
    posting: require("./images/post3.png"),
    state: true,
    like: 80,
    share: 99,
    comment: 190,
  },
  {
    id: 3,
    avatar: require("./images/ava4.png"),
    username: "ItsmeYujin",
    status: "My first potshot!",
    posting: require("./images/post4.png"),
    state: true,
    like: 80,
    share: 99,
    comment: 190,
  },
  {
    id: 4,
    avatar: require("./images/ava5.png"),
    username: "SanaNek",
    status: "My first potshot!",
    posting: require("./images/post5.png"),
    state: true,
    like: 80,
    share: 99,
    comment: 190,
  },
  {
    id: 5,
    avatar: require("./images/ava7.png"),
    username: "ImNayeon",
    status: "My first potshot!",
    posting: require("./images/post7.png"),
    state: true,
    like: 80,
    share: 99,
    comment: 190,
  },
];

const MultiSelectDropdown = () => {
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  const onSelectedItemsChange = (selectedPosts) => {
    setSelectedPosts(selectedPosts);
    setShowSelected(selectedPosts.length > 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <Text style={styles.titleText}>
          Ví dụ về Multiple Select / Dropdown / Picker Example in React Native
        </Text>

        <MultiSelect
          hideTags={false}
          items={posts}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedPosts}
          selectText="Pick Posts"
          searchInputPlaceholderText="Search Posts..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="username"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="deepskyblue"
          submitButtonText="Submit"
        />

        <ScrollView>
          <Text style={styles.headingText}>Posts:</Text>
          {(showSelected ? selectedPosts : posts.map(post => post.id)).map((postId) => {
            const post = posts.find(p => p.id === postId);
            return (
              <View key={post.id}>
                <View style={styles.ava}>
                  <Image style={styles.avatar} source={post.avatar} />
                  <Text style={styles.name}>{post.username}</Text>
                </View>
                <Text style={styles.status}>{post.status}</Text>
                <Image style={styles.stat} source={post.posting} />
              </View>
            );
          })}
        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
  ava: {
    flexDirection: "row",
    paddingTop: 20,
    marginLeft: 20,
    paddingBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: "hidden",
  },
  name: {
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  status: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontSize: 20,
    color: "#000",
  },
  stat: {
    width: 385,
    height: 300,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
  },
});

export default MultiSelectDropdown;
