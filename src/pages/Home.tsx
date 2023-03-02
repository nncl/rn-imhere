import {Text, TextInput, View, TouchableOpacity, FlatList, Alert} from "react-native";

import {Participant} from '../components/Participant'

import {styles} from "./styles";
import {useState} from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (!participantName) {
      return;
    }

    if (participants.includes(participantName)) {
      return Alert.alert('Ops', 'This user already exists, try adding a new one!')
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Are you sure?', `Are you you want to remove ${name} from the list?`, [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress:() => {
          const filtered = participants.filter(item => item != name);
          setParticipants(filtered);
          Alert.alert('', `${name}'s been removed successfully!`)
        }
      }
    ])
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={participants}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item} renderItem={({item}) => (
        <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>
      )}
      ListEmptyComponent={()=>(
        <Text style={styles.listEmptyText}>
          No one is here yet, add one or more participants!
        </Text>
      )}/>
    </View>
  )
}
