import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {
    const { id } = route.params || {};

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Détails de l'Élément</Text>
            
            <View style={styles.dataCard}>
                <Text style={styles.label}>Statut de l'élément :</Text>
                <Text style={styles.value}>
                    {id ? 'Chargé avec succès' : 'Erreur de chargement'}
                </Text>

                {id && (
                    <View style={styles.idContainer}>
                        <Text style={styles.label}>Identifiant Reçu :</Text>
                        <Text style={styles.idValue}>{id}</Text>
                    </View>
                )}
            </View>

            <Button
                title="Retour à l'Accueil"
                onPress={() => navigation.goBack()}
                color="#333333" // Bouton gris foncé
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        paddingTop: 50,
        backgroundColor: '#FFFFFF'
    },
    header: {
        fontSize: 26,
        fontWeight: '600',
        color: '#121212',
        marginBottom: 40,
    },
    dataCard: {
        width: '85%',
        padding: 30,
        marginBottom: 40,
        backgroundColor: '#F5F5F5', // Gris très clair
        borderRadius: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#FFD700', // Or Pâle
    },
    label: {
        fontSize: 16,
        color: '#333333',
        fontWeight: '500',
        marginTop: 15,
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#121212',
        marginBottom: 10,
    },
    idContainer: {
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        alignItems: 'center',
    },
    idValue: {
        fontSize: 42,
        fontWeight: '900',
        color: '#FFD700', // Or Pâle pour l'emphase
        marginTop: 5,
    }
});

export default DetailsScreen;