import React, {useEffect, useState, FunctionComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../shared/Button';
import { Camera } from 'react-native-vision-camera';
import { useCameraDevices } from 'react-native-vision-camera';

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

const CameraObject: FunctionComponent<CameraObjectTypes> =  ( { isActive }) => {

  const devices = useCameraDevices();
  const device = devices.back;
  
  useEffect(() => {
    // (async () => {
    //     let hasCameraPermission = await Camera.getCameraPermissionStatus()
    //     console.log("hasCameraPermission", hasCameraPermission);
        
    //     if(hasCameraPermission == "not-determined"){
    //        hasCameraPermission = await Camera.requestCameraPermission();
    //     }
    //     setHasCameraPermission(hasCameraPermission === 'authorized');
    // })();
  }, []);
  
  return (
    <>
      { (device !== undefined) ?
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
        />
        :
        <Text>no camera found</Text>
      }
    </>
  );
};

export default CameraObject;

type CameraObjectTypes = {
  isActive: boolean
};

CameraObject.defaultProps = {
  isActive: false
};
