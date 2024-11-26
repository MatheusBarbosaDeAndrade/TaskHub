import { StyleSheet, View, Text } from 'react-native';

const AboutScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Alunos</Text>
      <br/>
      <View style={styles.studentsArea}>
        <Text style={styles.text}>Felipe Santos</Text>
        <Text style={styles.text}>Iago Zorrilla</Text>
        <Text style={styles.text}>Jackeline Pereira</Text>
        <Text style={styles.text}>Matheus Barbosa</Text>
        <Text style={styles.text}>Mateus da Cunha</Text>
        <Text style={styles.text}>Tales Freire</Text>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#ebe1c5',
    justifyContent: "center",
    alignItems: "center",
  },
  studentsArea: {
    minWidth: 100,
    minHeight: 70,
    borderRadius: 10,
    backgroundColor: '#045071',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    padding: 30,
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
  },
  text: {
    color: "white",
    fontWeight: 700,
  },

});

export default AboutScreen