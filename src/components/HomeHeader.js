import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, icons, images, WIDTH } from '../constants';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authAction';


const HomeHeader = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
  };
  return (
    <View style={[styles.row, styles.spacer]}>
      <TouchableOpacity style={styles.menu}>
        <FontAwesome5 name="cat" size={30} color={COLORS.red} />
      </TouchableOpacity>
      <View style={styles.location}>
        <Feather name="map-pin" size={18} color={COLORS.red} />
        <Text style={styles.locationText}>Ho Chi Minh, ID</Text>
        <Feather name="chevron-down" size={18} color={COLORS.red} />
      </View>
      <View>
        <TouchableOpacity style={styles.avatarContainer} onPress={handleLogout}>
        <FontAwesome5 name="user-circle" size={30} color={COLORS.red} />
          {/* <Image
            source={icons.user}
            style={styles.avatar}
            resizeMode="cover"
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop:10
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7.5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    ...FONTS.h3,
    marginHorizontal: 5,
  },
  spacer: {
    justifyContent: 'space-between',
    width: WIDTH,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightGray2,
    borderRadius: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});