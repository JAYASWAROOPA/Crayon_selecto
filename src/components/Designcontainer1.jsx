import { StyleSheet, Text, View, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import {React,useState} from 'react';
import { styles } from './Styles1';
export default function Designcontainer({ title }) {
    const [showFullText, setShowFullText] = useState(false);
    const toggleDescription = () => {
      setShowFullText(!showFullText);
    };
  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.headertext}>{title}</Text>
      </View>
      <View>
        <Text style={styles.descriptionText}>Description</Text>
        <Text style={styles.projectDescription}>
          {showFullText
            ? 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
            : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi...'}
        </Text>
        <TouchableOpacity onPress={toggleDescription}>
          <Text style={styles.seeMoreText}>
            {showFullText ? 'See less' : 'See more'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <View style={styles.dateColumn}>
          <Text style={styles.dateTitle}>Start date</Text>
          <Text style={styles.dateText}>01/09/23</Text>
        </View>
        <View style={styles.dateColumn}>
          <Text style={styles.dateTitle}>End date</Text>
          <Text style={styles.dateText}>04/12/23</Text>
        </View>
        <View style={styles.statusColumn}>
          <Text style={styles.dateTitle2}>Status</Text>
          <View style={styles.progressWrapper}>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.78}
              color="#4CAF50"
              style={styles.progressBar}
            />
            <Text style={styles.percentageText}>78%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

