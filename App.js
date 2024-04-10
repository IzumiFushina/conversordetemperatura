import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "./src/styles/styles";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "./src/components/TextInputComponent";
import { TextInput } from "react-native-web";

export default function Conversão() {
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");

  return (
    <View styles={styles.container}>
      <Text>Conversor de temperatura</Text>
      <TxtInputComponent
        txtplace="Digite a temperatura em °C"
        value={celsius}
        changeText={setCelsius}
      />
      <TouchableOpacity onPress={resultado}>
        <Text>Converter</Text>
      </TouchableOpacity>
      </View>
  )}