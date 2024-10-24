import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Empty from '../assets/icons/empty_image'; 
import { styles } from './Styles1'; 
export default function AssetsList() {
  const assets = [
    { name: 'JCB', image: require('../assets/images/Jcb.png') },
    { name: 'Asset Name', image: Empty },            
    { name: 'Laptop Dell', image: require('../assets/images/Dell.png') },
    { name: 'Laptop HP', image: require('../assets/images/Hp.png') },  
  ];

  return (
    <View style={[styles.container,{marginBottom:20}]}>
      {/* Title */}
      <Text style={styles.title}>Assets</Text>

      {/* Scrollable list of assets */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {assets.map((asset, index) => (
          <View>
          <View key={index} style={styles.assetContainer}>
            {/* Conditionally render SVG or PNG */}
            {typeof asset.image === 'function' ? (
              <asset.image width={100} height={100} /> 
            ) : (
              <Image source={asset.image} style={styles.assetImage} />     
            )}
            {/* Asset Name */}
          </View>
          <Text style={styles.assetName}>{asset.name}</Text>

          </View>
          
        ))}
      </ScrollView>
    </View>
  );
}