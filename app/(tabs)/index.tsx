import { StyleSheet } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { Image } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FDB0C0", dark: "#1D3D47" }}
      headerImage={<Image
        style={styles.profileImage}
        source={require('@/assets/images/profile.jpg')}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={100}
      />}
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.card}>
          <ThemedText type="title" style={styles.name}>Layla Vargas</ThemedText>
          <ThemedText type="subtitle" style={styles.email}>20198368@itla.edu.do</ThemedText>

          <ThemedView style={styles.infoSection}>
            <ThemedText type="defaultSemiBold">Sobre mí</ThemedText>
            <ThemedText>
              Soy una desarrolladora apasionada con experiencia en React Native y Expo.
              Me encanta crear aplicaciones móviles hermosas y funcionales.
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    borderWidth: 4,
    borderColor: "white",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    textAlign: "center",
    marginTop: 8,
  },
  email: {
    textAlign: "center",
    marginTop: 4,
    opacity: 0.7,
  },
  infoSection: {
    marginTop: 24,
    gap: 8,
  },
})
