// Import các thư viện cần thiết
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
// Định nghĩa component CustomCountDownTimer
const CustomCountDownTimer = () => {
  // State totalDuration lưu trữ thời gian đếm ngược (tính bằng giây)
  const [totalDuration, setTotalDuration] = useState(0);

  // useEffect được sử dụng để tính toán thời gian đếm ngược khi component được render
  useEffect(() => {
    // // Lấy thời gian hiện tại với múi giờ +05:30
    // const currentDate = moment().utcOffset('+7:00').format('YYYY-MM-DD HH:mm:ss');
    // // Tính toán thời gian hết hạn (1 ngày sau thời gian hiện tại)
    // const expiryDate = moment().add(39, 'days').format('YYYY-MM-DD HH:mm:ss');

     // Lấy thời gian hiện tại
     const currentDate = moment().utcOffset('0:00').format('YYYY-MM-DD HH:mm:ss');
     // Thiết lập thời gian hết hạn là ngày 29/1/2025
     const expiryDate = moment('2025-01-29', 'YYYY-MM-DD');

    // Tính sự khác biệt giữa thời gian hết hạn và thời gian hiện tại
    const diffDuration = moment.duration(moment(expiryDate).diff(moment(currentDate)));
    const days = parseInt(diffDuration.asDays()); // Tính số ngày
    const hours = parseInt(diffDuration.hours()); // Tính số giờ
    const minutes = parseInt(diffDuration.minutes()); // Tính số phút
    const seconds = parseInt(diffDuration.seconds()); // Tính số giây

    // Tính tổng số giây
    const totalSeconds = days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
    setTotalDuration(totalSeconds); // Lưu tổng thời gian vào state
  }, []); // Chỉ chạy khi component được mount

  // Giao diện chính của component
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tết Nguyên Đán</Text>
      <CountDown
        until={totalDuration} // Thời gian đếm ngược
        timeToShow={['H', 'M', 'S']} // Hiển thị ngày, giờ, phút, giây
        timeLabels={{ d: 'Ngày', h: 'Giờ', m: 'Phút', s: 'Giây' }} // Tùy chỉnh nhãn
        onFinish={() => Alert.alert('Hoàn thành!')} // Hành động khi đếm ngược kết thúc
        onPress={() => Alert.alert('Bạn vừa nhấn vào đồng hồ!')} // Hành động khi nhấn vào đồng hồ
        size={30} // Kích thước chữ số
        digitStyle={styles.digitStyle} // Định nghĩa kiểu chữ số
        digitTxtStyle={styles.digitTxtStyle} // Kiểu văn bản của chữ số
        timeLabelStyle={styles.timeLabelStyle} // Kiểu của nhãn thời gian
        separatorStyle={styles.separatorStyle} // Kiểu của dấu phân cách
        showSeparator // Hiển thị dấu phân cách
      />
    </SafeAreaView>
  );
};

// Xuất component để sử dụng trong ứng dụng
export default CustomCountDownTimer;

// Định nghĩa kiểu dáng
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  digitStyle: {
    backgroundColor: '#4b7bec',
    borderRadius: 10,
    padding: 5,
  },
  digitTxtStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timeLabelStyle: {
    color: '#4b7bec',
    fontWeight: '600',
  },
  separatorStyle: {
    color: '#1e90ff',
    fontWeight: 'bold',
  },
});
