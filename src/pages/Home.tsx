import {Text, TextInput, View, TouchableOpacity, FlatList, Alert} from "react-native";

import {Participant} from '../components/Participant'

import {styles} from "./styles";

export function Home() {
  const participants = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid"]

  function handleParticipantAdd() {
    if (participants.includes('Aaran')) {
      return Alert.alert('Ops', 'This user already exists, try adding a new one!')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Are you sure?', `Are you you want to remove ${name} from the list?`, [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress:()=> Alert.alert('', `${name}'s been removed successfully!`)
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
