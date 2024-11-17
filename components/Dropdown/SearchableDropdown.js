import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const items = [
  { id: 1, name: "nhom1" },
  { id: 2, name: "nhom2" },
  { id: 3, name: "nhom3" },
  { id: 4, name: "thiennhi" },
  { id: 5, name: "phuongquynh" },
  { id: 6, name: "anhtho" },
  { id: 7, name: "laptrinh" },
  { id: 8, name: "congnghe" },
  { id: 9, name: "Web" },
  { id: 10, name: "App" },
];

const SearchableDropdownEx = () => {
  const navigation = useNavigation();
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);

  const selectedItemsChange1 = (selectedItems1) => {
    setSelectedItems1(selectedItems1);
  };
  const selectedItemsChange2 = (selectedItems2) => {
    setSelectedItems2(selectedItems2);
  };
  const removeItem1 = (item) => {
    const items = selectedItems1.filter((sitem) => sitem.id !== item.id);
    setSelectedItems1(items);
  };
  const removeItem2 = (item) => {
    const items = selectedItems2.filter((sitem) => sitem.id !== item.id);
    setSelectedItems2(items);
  };

  // Lấy nguồn data cho phần tử dropdown từ server
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.56:3000/data");
        const data = await response.json();
        // Kiểm tra dữ liệu
        console.log("Fetched data:", data);
        // Cập nhật dữ liệu từ server
        setServerData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Ví dụ về Searchable Dropdown / Picker trong React Native
        </Text>

        <Text style={styles.headingText}>Searchable Dropdown từ mảng tĩnh</Text>

        <SearchableDropdown
          //Theo dõi hoặc ghi nhận giá trị mà người dùng nhập vào ô tìm kiếm
          onTextChange={(text) => console.log(text)}
          // Được gọi sau khi lựa chọn một mục từ dropdown
          onItemSelect={(item) =>
            selectedItemsChange1([...selectedItems1, item])
          }
          // Được gọi để xóa một mục khỏi danh sách đã chọn
          onRemoveItem={(item, index) => {
            const items = selectedItems1.filter(
              (sitem) => sitem.id !== item.id
            );
            setSelectedItems1(items);
            console.log("Item removed:", item);
          }}
          // Thay đổi kiểu dáng của container
          containerStyle={{ padding: 5 }}
          // Thay đổi kiểu dáng của ô nhập dữ liệu tìm kiếm
          textInputStyle={styles.textInputStyle}
          // Thay đổi kiểu dáng của một mục đơn để select trong dropdown
          itemStyle={styles.itemStyle}
          // Thay đổi kiểu dáng của văn bản trong một mục đơn
          itemTextStyle={styles.itemTextStyle}
          // Thay đổi kiểu dáng của container chứa các mục
          itemsContainerStyle={styles.itemContainerStyle}
          // Mapping của mảng các mục
          items={items} // Mảng các mục
          placeholder="placeholder" // Nôi dung hiển thị ban đầu cho ô tìm kiếm
          resetValue={false} // Chọn false để giữ giá trị sau khi chọn và true để xóa giá trị sau khi chọn-chọn true sẽ cho bạn chọn liên tục
          underlineColorAndroid="transparent" // Thay đổi style gạch chân cho ô tìm kiếm trên Android
        />

        <ScrollView>
          <Text style={styles.headingText}>Các mục đã được chọn:</Text>
          {selectedItems1.map((item, index) => (
            <View key={index} style={styles.selectedItem}>
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => removeItem1(item)}>
                <Text style={styles.removeButton}>Xóa</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.headingText}>Searchable Dropdown từ Server</Text>

        <SearchableDropdown
          //Theo dõi hoặc ghi nhận giá trị mà người dùng nhập vào ô tìm kiếm
          onTextChange={(text) => console.log(text)}
          // Được gọi sau khi lựa chọn một mục từ dropdown
          onItemSelect={(item) =>
            selectedItemsChange2([...selectedItems2, item])
          }
          // Được gọi để xóa một mục khỏi danh sách đã chọn
          onRemoveItem={(item, index) => {
            const items = selectedItems2.filter(
              (sitem) => sitem.id !== item.id
            );
            setSelectedItems2(items);
            console.log("Item removed:", item);
          }}
          // Thay đổi kiểu dáng của container
          containerStyle={{ padding: 5 }}
          // Thay đổi kiểu dáng của ô nhập dữ liệu tìm kiếm
          textInputStyle={styles.textInputStyle}
          // Thay đổi kiểu dáng của một mục đơn để select trong dropdown
          itemStyle={styles.itemStyle}
          // Thay đổi kiểu dáng của văn bản trong một mục đơn
          itemTextStyle={styles.itemTextStyle}
          // Thay đổi kiểu dáng của container chứa các mục
          itemsContainerStyle={styles.itemContainerStyle}
          // Mapping của mảng các mục
          items={serverData} // Mảng các mục
          placeholder="placeholder" // Nôi dung hiển thị ban đầu cho ô tìm kiếm
          resetValue={false} // Chọn false để giữ giá trị sau khi chọn và true để xóa giá trị sau khi chọn-chọn true sẽ cho bạn chọn liên tục
          underlineColorAndroid="transparent" // Thay đổi style gạch chân cho ô tìm kiếm trên Android
        />

        <ScrollView>
          <Text style={styles.headingText}>Các mục đã được chọn:</Text>
          {selectedItems2.map((item, index) => (
            <View key={index} style={styles.selectedItem}>
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => removeItem2(item)}>
                <Text style={styles.removeButton}>Xóa</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={[styles.button, styles.navButton]}
          onPress={() => navigation.navigate("MultiSelectDropdown")}
        >
          <Text style={styles.buttonText}>Go to MultiSelect Dropdown</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  headingText: {
    padding: 8,
  },
  selectedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  textInputStyle: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#FAF7F6",
  },
  itemStyle: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#FAF9F8",
    borderColor: "#bbb",
    borderWidth: 1,
  },
  itemTextStyle: {
    color: "#222",
  },
  itemContainerStyle: {
    maxHeight: "50%",
  },
  removeButton: {
    color: "red",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  navButtonsContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  navButton: {
    width: "80%",
    marginBottom: 15,
  },
});

export default SearchableDropdownEx;
