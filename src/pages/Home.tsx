import {Text, TextInput, View, TouchableOpacity} from "react-native";

import {Participant} from '../components/Participant'

import {styles} from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log(`hello world`);
  }

  function handleParticipantRemove(name: string) {
    console.log(`You have just removed the user ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {['John', 'Wick', 'World'].map(item => (
        <Participant key={item} name={item} onRemove={()=>handleParticipantRemove(item)}/>
      ))}
    </View>
  )
}
