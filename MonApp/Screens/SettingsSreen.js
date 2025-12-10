import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';

function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [themeEnabled, setThemeEnabled] = useState(false);
    const [username, setUsername] = useState('Utilisateur Élégant');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configuration de l'Application</Text>
            
            {/* Paramètre 1 : Notifications */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Activer les Notifications</Text>
                <Switch
                    onValueChange={setNotificationsEnabled}
                    value={notificationsEnabled}
                    trackColor={{ false: "#E5E7EB", true: "#F06292" }} 
                    thumbColor={notificationsEnabled ? "#1E3A8A" : "#F4F3F4"}
                />
            </View>

            {/* Paramètre 2 : Thème Sombre */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Mode Sombre (Beta)</Text>
                <Switch
                    onValueChange={setThemeEnabled}
                    value={themeEnabled}
                    trackColor={{ false: "#E5E7EB", true: "#1E3A8A" }} 
                    thumbColor={themeEnabled ? "#F8E9EB" : "#F4F3F4"}
                />
            </View>
            
            {/* Paramètre 3 : Entrée de texte */}
            <Text style={styles.inputLabel}>Nom d'utilisateur :</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setUsername}
                value={username}
                placeholder="Entrez votre nom"
                placeholderTextColor="#A0AEC0"
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
        color: '#1E3A8A',
        marginBottom: 40,
        textAlign: 'center',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#F8E9EB',
    },
    settingLabel: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '500',
    },
    inputLabel: {
        fontSize: 16,
        color: '#4B5563',
        marginTop: 40,
        marginBottom: 10,
    },
    textInput: {
        height: 50,
        borderColor: '#1E3A8A',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#F8E9EB',
    },
    footerText: {
        marginTop: 60,
        fontSize: 14,
        color: '#9CA3AF',
        textAlign: 'center',
    }
});

export default SettingsScreen;