import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    const dynamicId = Math.floor(Math.random() * 100) + 1;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Accueil</Text>
            
            <View style={styles.infoBlock}>
                <Text style={styles.infoTitle}>Bienvenue</Text>
                
            </View>

            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate('Details', { id: dynamicId })}
            >
                <Text style={styles.buttonText}>
                    Voir Détails
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        paddingTop: 40,
        backgroundColor: '#FFFFFF' // Blanc Pur
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#121212', // Noir Profond
        marginBottom: 30,
    },
    infoBlock: {
        width: '90%',
        padding: 20,
        marginBottom: 40,
        backgroundColor: '#121212', // Noir Profond
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
        alignItems: 'center', 
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFD700', // Or Pâle
        marginBottom: 10,
        textAlign: 'center', 
    },
    infoText: {
        fontSize: 16,
        color: '#F5F5F5', // Gris très clair
        lineHeight: 24,
        textAlign: 'center', 
    },
    buttonContainer: {
        backgroundColor: '#FFD700', // Or Pâle
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#121212', // Texte Noir sur bouton Or
        fontSize: 18,
        fontWeight: '600',
    }
});

export default HomeScreen;