import React,{useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CameraScreen, Camera, CameraType} from 'react-native-camera-kit';
import Button from '../../components/shared/Button'

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

const Scanner = () => {

  const [opneScanner, setOpneScanner] = useState(false);
  const [detectedCodes, setDetectedCodes] = useState<string[]>([]);
  const [successScan, setSuccessScan] = useState(false);

  const [timer, setTimer] = useState<any>(null);

  useEffect(() => {
    //setDetectedCodes([]);
  }, []);

  const handleTimer = () => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      clearSucessText();
    }, 800);
    setTimer(newTimer);
  };

  const clearSucessText = () => {
    setSuccessScan(false);
  }

  const onBarcodeScan = (text: string) => {
    const alreadyExits = detectedCodes.includes(text);
    if(!alreadyExits){
      handleTimer();
      setSuccessScan(true);
      console.log("new code -> " + text);
      setDetectedCodes((prevState: string[]) => ( [...prevState,text]));
    }
  };


  return (
    <>
     {opneScanner ? (
        <View style={{flex: 1}}>
          
          <CameraScreen
            cameraRatioOverlay={undefined}
            captureButtonImage={undefined} 
            cameraFlipImage={undefined} 
            torchOnImage={undefined} 
            torchOffImage={undefined}
            captureButtonImageStyle={{}} 
            cameraFlipImageStyle={{}} 
            torchImageStyle={{}}
            hideControls
            scanBarcode={true}
            showFrame={true}
            laserColor="red"
            frameColor="white"
            onReadCode={(event) => {

              onBarcodeScan(event.nativeEvent.codeStringValue)
              //console.log("nativeEvent !!", event.nativeEvent);

            }}
            onBottomButtonPressed = {(event) => {

            }}      
          />
           <Text style={{marginBottom: 24 , textAlign: "center"  , display: successScan ? "flex": "none" }}>Scan sucessful !</Text>
          <Button 
            title="close scanner" 
            handleClick={ () => {
              setOpneScanner(false);
            }}
          />

        </View>
      ) : (
        <SafeAreaView>
        <View style={styles.container}>
          <Text style={{marginBottom: 24}}>
           Barcode scanning using "react-native-camera-kit"
          </Text>
          <Button 
            title="Open Scanner" 
            handleClick={ () => {
              setOpneScanner(true);
            }}
          />
          { detectedCodes.length > 0 &&
            <>
            <View style={{marginTop: 10}}>
              <Text style={{marginBottom: 4, fontWeight: "bold", fontSize: 16}}>
               Detected barcodes: 
              </Text>
              { detectedCodes.map( (item: string, index: number) => {
                  return (
                    <Text key={index}>Code: {item}</Text>
                  )
                })
              }
            </View> 
            <View style={{marginTop: 24}}>
              <Button 
                title="Clean codes"
                handleClick={ () => {
                  setDetectedCodes([]);
                }}
              />
            </View>
            </>
          }
        </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default Scanner;
