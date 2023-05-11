import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/shared/Button';
import { Camera } from 'react-native-vision-camera';
import { useCameraDevices } from 'react-native-vision-camera';
import CameraObject from '../../components/camera/CameraObject'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootTabProps } from '../../navigation/TabNavigation';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackProps} from '../../../App';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    //fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
  },
});

type ScanListProps = BottomTabScreenProps<RootTabProps, 'ScanList'>;
//type ScanListProps = NativeStackScreenProps<RootStackProps, 'Scanner'>;

const ScanList = ( {navigation}: ScanListProps ) => {

  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  
  useEffect(() => {
    (async () => {
        let hasCameraPermission = await Camera.getCameraPermissionStatus()
        console.log("hasCameraPermission", hasCameraPermission);
        
        if(hasCameraPermission == "not-determined"){
           hasCameraPermission = await Camera.requestCameraPermission();
        }
        setHasCameraPermission(hasCameraPermission === 'authorized');
    })();
  }, []);

  const openScanner = () => {

    console.log("click openScanner 2 ");

    if(hasCameraPermission){
     navigation.navigate('Scanner');
    }
  }
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}> SCANNER </Text>
        <Button title="Scan documents" handleClick={openScanner} />
      </View>
    </SafeAreaView>
  );
};


export default ScanList;
