import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, Image, ScrollView, ImageBackground, Button, Pressable, Modal } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  {/* const [isModalVisible, setModalVisible] = useState(false); */}
  return (
    <View  style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar style="auto" backgroundColor="lightgreen" barstyle="light-content"/>
    </View>

) 

}
     {/*  <Button 
      title="Click Me now" 
      onPress={() => setModalVisible(true)} 
      color="midnightblue"
      /> 

      <Modal visible={isModalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)} >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text style={{ fontSize: 30, color: "midnightblue" }}>Modal Content</Text>
          <Button 
          title="Close Modal"
          onPress={() => setModalVisible(false)}
          color="midnightblue"
          />
        </View>
      </Modal>
     {/*  <ScrollView>
      <Pressable onPress={() => alert("Image1 Clicked")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => alert("Text1 Clicked")}>
              <Text>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
      </Pressable>

<Pressable onPress={() => alert("Image2 Clicked")}>
  <Image source={logoImg} style={{ width: 300, height: 300 }} />
</Pressable>
  {/*<ImageBackground source={logoImg} style={{ flex: 1 }}>
    <Text style={{ fontSize: 30, color: "white" }}>Image Text</Text>
  </ImageBackground>
      </ScrollView> */}
    
 

 