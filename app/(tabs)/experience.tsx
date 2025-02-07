import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import WebView from 'react-native-webview';
import * as Network from 'expo-network';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function ExperienceScreen() {
  const videoId = "oKv8asSDu8o";
  const netInfo = Network.useNetworkState();
  
  const player = useVideoPlayer(require('@/assets/videos/offline.mp4'), player => {
    player.loop = true;
    player.play();
  });

  const renderVideoPlayer = () => {
    return netInfo.isConnected ? (
      <ThemedView style={styles.onlineVideoContainer}>
        <WebView
          style={styles.video}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsInlineMediaPlayback={true}
          source={{
            uri: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
          }}
        />
      </ThemedView>
    ) : (
      <ThemedView style={styles.offlineVideoContainer}>
        <VideoView 
          style={styles.videoPlayer}
          player={player}
          startsPictureInPictureAutomatically={false}
          allowsFullscreen
          allowsPictureInPicture
          resizeMode="contain"
        />
      </ThemedView>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
        <ThemedText type="title" style={styles.title}>Mi Experiencia</ThemedText>
        
        <ThemedView style={styles.videoContainer}>
          {renderVideoPlayer()}
        </ThemedView>

        <ThemedView style={styles.descriptionContainer}>
          <ThemedText type="subtitle">Sobre este Proyecto</ThemedText>
          <ThemedText>
            En este video, explico mi experiencia desarrollando esta aplicación usando React Native y Expo.
            Discuto los desafíos que enfrenté y las soluciones que implementé.
          </ThemedText>
          {!netInfo.isConnected && (
            <ThemedText style={styles.offlineMessage}>
              Modo sin conexión
            </ThemedText>
          )}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
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
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  videoContainer: {
    width: "100%",
    height: 215,
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
  },
  video: {
    flex: 1,
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    gap: 8,
  },
  offlineMessage: {
    marginTop: 16,
    textAlign: "center",
    color: "red",
  },
  loadingText: {
    textAlign: "center",
  },
  onlineVideoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  offlineVideoContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  videoControls: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    gap: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  },
});
