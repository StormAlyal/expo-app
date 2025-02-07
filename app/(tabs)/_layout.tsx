import { Tabs } from "expo-router"
import { FontAwesome } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF8DA1",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "#F2F2F7",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          title: "Calculadora",
          tabBarIcon: ({ color }) => <FontAwesome name="calculator" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="translator"
        options={{
          title: "Traductor",
          tabBarIcon: ({ color }) => <FontAwesome name="language" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="multiplication"
        options={{
          title: "Tabla",
          tabBarIcon: ({ color }) => <FontAwesome name="table" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: "Experiencia",
          tabBarIcon: ({ color }) => <FontAwesome name="video-camera" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}