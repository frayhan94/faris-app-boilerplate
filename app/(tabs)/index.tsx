import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function TabHomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tab Navigation Home</Text>
        <Text style={styles.description}>
          This is the home screen within the tab navigation. 
          Use the bottom tabs to navigate between screens.
        </Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome to your app!</Text>
          <Text style={styles.cardText}>
            This boilerplate includes navigation, basic screens, and a clean structure to get you started.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});