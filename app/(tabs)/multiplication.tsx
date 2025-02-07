"use client"

import { useState } from "react"
import { StyleSheet, ScrollView } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { TextInput, TouchableOpacity } from "react-native"
import { KeyboardDismissWrapper } from "@/components/KeyboardDismissWrapper"

export default function MultiplicationScreen() {
    const [number, setNumber] = useState("")
    const [table, setTable] = useState<string[]>([])

    const generateTable = () => {
        const num = Number.parseInt(number)
        if (isNaN(num)) return

        const newTable = []
        for (let i = 1; i <= 13; i++) {
            newTable.push(`${num} × ${i} = ${num * i}`)
        }
        setTable(newTable)
    }

    return (
        <KeyboardDismissWrapper scrollable>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.card}>
                    <ThemedText type="title" style={styles.title}>Tabla de Multiplicar</ThemedText>

                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={number}
                        onChangeText={setNumber}
                        placeholder="Ingrese un número"
                        placeholderTextColor="#666"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={generateTable}
                    >
                        <ThemedText style={styles.buttonText}>Generar Tabla</ThemedText>
                    </TouchableOpacity>

                    {table.length > 0 && (
                        <ScrollView style={styles.tableContainer}>
                            {table.map((fila, index) => (
                                <ThemedView key={index} style={styles.row}>
                                    <ThemedText style={styles.rowText}>{fila}</ThemedText>
                                </ThemedView>
                            ))}
                        </ScrollView>
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
        flex: 1,
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
        marginBottom: 16,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    tableContainer: {
        flex: 1,
    },
    row: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    rowText: {
        fontSize: 18,
    },
})

