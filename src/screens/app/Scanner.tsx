import {
  runOnJS
} from 'react-native-reanimated';
import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/shared/Button';
import { Camera , useFrameProcessor, useCameraDevices} from 'react-native-vision-camera';
//import { scanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

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

  const onBarCodeDected = useCallback((detectedBarcodes: any) => {

    console.log("detectedBarcodes -> ", detectedBarcodes);

  }, []);

  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet'
  //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
  //     // runOnJS(onBarCodeDected)(detectedBarcodes)
  //   console.log('detectedBarcodes', detectedBarcodes); // It works!!

  // }, [onBarCodeDected]);
  
  return (
   <>
    { device !== undefined ?
      <Camera
       style={StyleSheet.absoluteFill}
       device={device}
       isActive={true}
       //frameProcessor={frameProcessor}
       //frameProcessorFps={60}
      />
      :
      <SafeAreaView>
        <Text>no camera found</Text>
      </SafeAreaView>
    }
   </>
     
       
     
   
  );
};

export default Scanner;
