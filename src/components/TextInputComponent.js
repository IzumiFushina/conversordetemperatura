// Importa os conteúdos necessários para o funcionamento correto do site
import { TextInput } from "react-native";
import { styles } from "../styles/styles";

// Exporta a função de TxtInputComponente para ser usada através dos códigos
export default function TxtInputComponent({ txtplace, changeText, value }) {
  return (
    <TextInput 
    style={styles.txtinput}
    placeholder={txtplace} 
    value={value} 
    onChangeText={changeText} />
  );
}