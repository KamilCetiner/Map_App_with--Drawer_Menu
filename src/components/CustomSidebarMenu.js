import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {


  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPGJtCXSOoNeq6eLxV4G6KAx0DtfOLxVMLkA&usqp=CAU'}}
        style={styles.sideMenuProfileIcon}
      /> 
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>  </Text>
          {
                      
          /* IKON ICIN <Image   
        source={{uri: 'https://prismic-vc-cdn-assets.imgix.net/1d52b46c-27ed-4280-95fe-7f84c76c8d54_seen_in_deutschland_hintersee.jpg?auto=compress,format?w=1263&format=auto'}}
        style={styles.iconStyle}
          /> */}
        </View>
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
       
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {CustomSidebarMenu};