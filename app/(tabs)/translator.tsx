"use client"

import { useState } from "react"
import { StyleSheet } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { TextInput, TouchableOpacity } from "react-native"
import { KeyboardDismissWrapper } from "@/components/KeyboardDismissWrapper"

const UNIDADES = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
]

const DECENAS = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"]

const CENTENAS = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
]

function numberToWords(number: number): string {
    if (number === 0) return "cero"
    if (number === 1000) return "mil"

    let words = ""

    // Centenas
    const centenas = Math.floor(number / 100)
    if (centenas > 0) {
        words += CENTENAS[centenas] + " "
        number %= 100
    }

    // Especial para números entre 11-19
    if (number > 10 && number < 20) {
        words += UNIDADES[number]
        return words.trim()
    }

    // Decenas
    const decenas = Math.floor(number / 10)
    if (decenas > 0) {
        if (number % 10 === 0) {
            words += DECENAS[decenas]
        } else {
            words += DECENAS[decenas] + " y "
        }
        number %= 10
    }

    // Unidades
    if (number > 0) {
        words += UNIDADES[number]
    }

    return words.trim()
}

export default function TranslatorScreen() {
    const [number, setNumber] = useState("")
    const [words, setWords] = useState("")

    const translateNumber = () => {
        const num = Number.parseInt(number)
        if (isNaN(num) || num < 1 || num > 1000) {
            setWords("Por favor ingrese un número entre 1 y 1000")
            return
        }
        setWords(numberToWords(num))
    }

    return (
        <KeyboardDismissWrapper>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.card}>
                    <ThemedText type="title" style={styles.title}>Traductor de Números</ThemedText>

                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={number}
                        onChangeText={setNumber}
                        placeholder="Ingrese un número (1-1000)"
                        placeholderTextColor="#666"
                        maxLength={4}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={translateNumber}
                    >
                        <ThemedText style={styles.buttonText}>Traducir</ThemedText>
                    </TouchableOpacity>

                    {words && (
                        <ThemedView style={styles.resultContainer}>
                            <ThemedText type="subtitle">En palabras:</ThemedText>
                            <ThemedText style={styles.result}>{words}</ThemedText>
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
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16,
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
    result: {
        textAlign: "center",
        fontSize: 18,
        color: "#333",
    },
})

