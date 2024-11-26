import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'


const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> &copy; TaskHub </Text>
      <Text > Repositório do Projeto: </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MatheusBarbosaDeAndrade/TaskHub')}>
        <Text style={styles.link}>Link</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#98885F',
    
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Footer