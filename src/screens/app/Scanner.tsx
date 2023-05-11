import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/shared/Button';
import { Camera } from 'react-native-vision-camera';
import { useCameraDevices } from 'react-native-vision-camera';
import CameraObject from '../../components/camera/CameraObject'

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

const Scanner = () => {

  const devices = useCameraDevices();
  const device = devices.back;
  
  return (
   <>
    { device !== undefined &&
      <Camera
       style={StyleSheet.absoluteFill}
       device={device}
       isActive={true}
      />
    }
   </>
     
       
     
   
  );
};

export default Scanner;
