// Importa os conteúdos necessários para o funcionamento correto do site
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "./src/styles/styles";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "./src/components/TextInputComponent";

// Exporta e cria a função "Conversão"
export default function Conversão() {
  const [celsius, setCelsius] = useState("");
  const [visible, setVisible] = useState(false);
  const [resultado, setResultado] = useState("");

  const calc = () => {
    const resultado = (celsius * 9/5) + 32;

    if (celsius === "") {
      alert("Verifique os campos.")
    } else {
      setResultado(resultado);
      console.log("O resultado da sua conversão é:", resultado);
      setVisible(true)
    }
  };

    // Cria uma constante que "apaga" o valor de Celsius e fecha o Modal
    const converterNovamente = () => {
      setCelsius("");
      setVisible(false);
    };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conversor de temperatura: Celsius para Fahrenheit</Text>
      <TxtInputComponent
        txtplace="Digite a temperatura em °C"
        value={celsius}
        changeText={setCelsius}
      />
      <TouchableOpacity 
      style={styles.touchable}
      onPress={calc}>
        <Text style={styles.touchabletext}>Converter</Text>
      </TouchableOpacity>
      
      <Modal visible={visible}>
        <View style={styles.modal}>
          <Text style={styles.modaltext}>O resultado da sua conversão é:</Text>
          <Text style={styles.modaltext}> {resultado}°Fahrenheit</Text>
          <TouchableOpacity 
          style={styles.touchable} 
          onPress={converterNovamente}>
            <Text style={styles.touchabletext}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
