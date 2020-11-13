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
        source={{uri:'https://pbs.twimg.com/profile_images/421336310071058432/b0oTQWvu_400x400.jpeg'}}
        style={styles.sideMenuProfileIcon}
      /> 
      <Text style={{marginLeft:5, color:'black', fontWeight:'bold', marginBottom: 20}}></Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
        
          
                      
         {/* <Image   
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
    marginBottom: 50,
    marginTop:20
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