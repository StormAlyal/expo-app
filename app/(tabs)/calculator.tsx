"use client"

import { useState } from "react"
import { StyleSheet } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { TextInput, TouchableOpacity } from "react-native"
import { KeyboardDismissWrapper } from "@/components/KeyboardDismissWrapper"

export default function CalculatorScreen() {
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculateSum = () => {
    const sum = Number(number1) + Number(number2)
    setResult(sum)
  }

  return (
    <KeyboardDismissWrapper>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.card}>
          <ThemedText type="title" style={styles.title}>Calculadora</ThemedText>

          <ThemedView style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={number1}
              onChangeText={setNumber1}
              placeholder="Ingrese el primer número"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={number2}
              onChangeText={setNumber2}
              placeholder="Ingrese el segundo número"
              placeholderTextColor="#666"
            />
          </ThemedView>

          <TouchableOpacity
            style={styles.button}
            onPress={calculateSum}
          >
            <ThemedText style={styles.buttonText}>Calcular Suma</ThemedText>
          </TouchableOpacity>

          {result !== null && (
            <ThemedView style={styles.resultContainer}>
              <ThemedText type="subtitle">Resultado:</ThemedText>
              <ThemedText type="title">{result}</ThemedText>
            </ThemedView>
          )}
        </ThemedView>
      </ThemedView>
    </KeyboardDismissWrapper>
  )
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
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  inputContainer: {
    gap: 16,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF8DA1",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  resultContainer: {
    marginTop: 24,
    alignItems: "center",
    gap: 8,
  },
})

