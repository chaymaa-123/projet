import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';

function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [themeEnabled, setThemeEnabled] = useState(false);
    const [username, setUsername] = useState('Utilisateur ');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configuration de l'Application</Text>
            
            {/* Paramètre 1 : Notifications */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Activer les Notifications</Text>
                <Switch
                    onValueChange={setNotificationsEnabled}
                    value={notificationsEnabled}
                    trackColor={{ false: "#E5E7EB", true: "#333333" }} // Gris/Noir
                    thumbColor={notificationsEnabled ? "#FFD700" : "#F5F5F5"} // Or Pâle
                />
            </View>

            {/* Paramètre 2 : Thème Sombre */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Mode Sombre (Beta)</Text>
                <Switch
                    onValueChange={setThemeEnabled}
                    value={themeEnabled}
                    trackColor={{ false: "#E5E7EB", true: "#FFD700" }} // Or Pâle
                    thumbColor={themeEnabled ? "#121212" : "#F5F5F5"} // Noir
                />
            </View>
            
            {/* Paramètre 3 : Entrée de texte */}
            <Text style={styles.inputLabel}>Nom d'utilisateur :</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setUsername}
                value={username}
                placeholder="Entrez votre"
                placeholderTextColor="#A0A0A0"
            />
            
            <Text style={styles.footerText}>
                Vos modifications sont enregistrées automatiquement.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 25,
        paddingTop: 30,
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#121212',
        marginBottom: 40,
        textAlign: 'center',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    settingLabel: {
        fontSize: 18,
        color: '#333333',
        fontWeight: '500',
    },
    inputLabel: {
        fontSize: 16,
        color: '#333333',
        marginTop: 40,
        marginBottom: 10,
    },
    textInput: {
        height: 50,
        borderColor: '#121212',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#121212',
        backgroundColor: '#F5F5F5',
    },
    footerText: {
        marginTop: 60,
        fontSize: 14,
        color: '#A0A0A0',
        textAlign: 'center',
    }
});

export default SettingsScreen;