import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to App Boilerplate</Text>
      <Text style={styles.subtitle}>Your React Native Expo starter template</Text>
      
      <View style={styles.linksContainer}>
        <Link href="/home" style={styles.link}>
          <Text style={styles.linkText}>Go to Home</Text>
        </Link>
        <Link href="/auth" style={styles.link}>
          <Text style={styles.linkText}>Authentication</Text>
        </Link>
        <Link href="/(tabs)" style={styles.link}>
          <Text style={styles.linkText}>Tab Navigation</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  linksContainer: {
    gap: 15,
  },
  link: {
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});