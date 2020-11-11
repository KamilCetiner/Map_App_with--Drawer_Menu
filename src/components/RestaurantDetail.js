import React from 'react';
import {Linking} from 'react-native'
import {View, Text, ScrollView, TouchableOpacity, Dimensions, FlatList,Image} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {detailStyle} from '../styles';

const Rest_photo = [

 {
   id:0,
   img_url : 'https://media-cdn.tripadvisor.com/media/photo-s/19/e0/e2/ec/salle-principale-de-la.jpg'
 },
 {
   id:1,
   img_url : 'https://www.fluentu.com/blog/german/wp-content/uploads/sites/5/2015/12/german-restaurant-phrases.jpg'
 },
 {
   id:2,
   img_url : 'https://bilder.t-online.de/b/86/31/38/34/id_86313834/610/tid_da/eine-leckere-bowl-kiel-hat-so-einige-kulinarische-besonderheiten-zu-bieten-.jpg'
 },
 {
   id:3,
   img_url : 'https://media-cdn.tripadvisor.com/media/photo-s/16/b9/07/a2/saigon-food-restaurant.jpg'
 },
 {
   id:4,
   img_url : 'https://www.iheartberlin.de/wp-content/uploads/2019/02/Layla-2.jpg'
 },
 {
   id:5,
   img_url : 'https://lh3.googleusercontent.com/proxy/UQyjn4K0KQtqlMhvLI5VjE2WQYoSUzt9mTYbfcbIluyqaR4tk2V0tLFgHAxtOO81wPRJg7V94SOOvil0hYjYL1VUUwWQJp6J_Sv-lppIIEdIFYhENy8LX7c1-xN-xwXdcCWmJM4R1g'
 }
]

const RestaurantDetail = (props) => {
  

  function showStar(value) {
    const starLabel = [];

    for (let i = 0; i < value; i++) {
      starLabel.push(
        <Icon key={i} name="star" size={25} style={{margin:2, marginRight:10}} color="#fdd835" />,
       
      );
    }

    return starLabel;
  }

  const onPhonePress = () => {
    Linking.openURL(`tel:${props.restaurant.phone}`)

  }
  const onReserve = () => { 
    Linking.openURL(`${props.restaurant.reserve_url}`)

  }

   
  return (
    <Modal
      isVisible={props.isVisible}
      style={{justifyContent: 'flex-end', margin: 0, marginHorizontal: 10}}
      onBackdropPress={props.onClose}
      swipeDirection="down"
      onSwipeComplete={props.onClose}>
      <View style={detailStyle.container}>
        <View style={detailStyle.line} />
        <View style={detailStyle.line} />
        <Text style={detailStyle.name}>{props.restaurant.name}</Text>
        <Text style={detailStyle.address}>
          {props.restaurant.area} {props.restaurant.address}
        </Text>

        <View >
          <ScrollView style={{marginVertical: 30}}>
          <FlatList
            horizontal 
            showsHorizontalScrollIndicator={true}
            keyExtractor={(_, index) => index.toString()}
            data={Rest_photo}
            renderItem={({item}) => (            
              <Image
              style={{width:150, height:110, marginLeft: 10, borderRadius:10}}

              source={{
                uri: item.img_url,
              }}
              />
            )}
          />

          </ScrollView>
          </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10
          }}>

  

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop:-20}}>
            <TouchableOpacity
            style={{padding: 10, width:60, height:50, backgroundColor: '#eceff1', borderRadius: 30 }}
            onPress={() => onPhonePress()}
          
            >  
            <Icon style={{alignSelf:'center'}} name="phone" size={30} color={'#303f9f'} />
            </TouchableOpacity>
          </View>
          <View style={{flex:1, flexDirection: 'row-reverse',}}>
            {showStar(props.restaurant.price)}
          </View>
        </View>
        <View style={{alignSelf:'center', marginTop:10}}>
          <TouchableOpacity

          style={{padding:15, 
            borderColor:'#2196f3',
             borderWidth:0.4, 
             backgroundColor: '#eeeeee',
             borderRadius: 20, 
             width: 200,}}

             onPress={() => onReserve()}
          
          >

            <Text style={{textAlign: 'center', color:'#303f9f', fontWeight:'bold'}}>Reserve</Text>


          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
  );
};

export {RestaurantDetail};