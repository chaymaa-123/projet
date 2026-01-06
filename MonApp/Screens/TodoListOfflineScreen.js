import { View, Text, FlatList, Button, TextInput, StyleSheet } from "react-native"; 
import { useEffect, useState, useContext } from "react"; 
import { 
  loadTodos, 
  addTodoOffline, 
  updateTodoOffline, 
  deleteTodoOffline, // <-- Assurez-vous que cette fonction existe dans database.js
} from "../services/database"; 
import { ThemeContext } from "../context/ThemeContext"; 

export default function TodoListOfflineScreen() { 
  const [todos, setTodos] = useState([]); 
  const [title, setTitle] = useState(""); 
  const [editingId, setEditingId] = useState(null); 
  
  const { theme, toggleTheme } = useContext(ThemeContext); 

  // Fonction pour recharger les données depuis SQLite
  const refreshTodos = () => { 
    setTodos(loadTodos()); 
  }; 

  // Fonction pour Ajouter ou Modifier
  const handleAddOrUpdate = () => { 
    if (!title.trim()) return; 

    if (editingId) { 
      // UPDATE OFFLINE 
      updateTodoOffline(editingId, title); 
      setEditingId(null); 
    } else { 
      // ADD OFFLINE 
      addTodoOffline(title); 
    } 

    setTitle(""); 
    refreshTodos(); 
  }; 

  // NOUVELLE FONCTION : Supprimer une tâche
  const handleDelete = (id) => {
    deleteTodoOffline(id); // Appel au service database
    refreshTodos();        // Rafraîchir l'affichage
  };

  useEffect(() => { 
    refreshTodos(); 
  }, []); 

  return ( 
    <View style={{ flex: 1 }}> 
      {/* Theme toggle */} 
      <Button 
        title={`Passer en mode ${theme === "light" ? "dark" : "light"}`} 
        onPress={toggleTheme} 
      /> 

      {/* Formulaire Add / Update */} 
      <View style={{ padding: 10 }}> 
        <TextInput 
          placeholder="Tâche offline" 
          value={title} 
          onChangeText={setTitle} 
          style={{ 
            borderWidth: 1, 
            padding: 10, 
            marginBottom: 10, 
            borderColor: theme === "dark" ? "#ccc" : "#000",
            color: theme === "dark" ? "#fff" : "#000"
          }} 
        /> 

        <Button 
          title={editingId ? "Mettre à jour" : " ➕ Ajouter hors ligne"} 
          onPress={handleAddOrUpdate} 
        /> 
      </View> 

      {/* Liste des tâches */}
      {todos.length === 0 ? ( 
        <Text style={{ textAlign: "center", marginTop: 20, color: theme === "dark" ? "#fff" : "#000" }}> 
          Aucune tâche disponible hors ligne 
        </Text> 
      ) : ( 
        <FlatList 
          data={todos} 
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => ( 
            <View 
              style={{ 
                flexDirection: "row", 
                justifyContent: "space-between", 
                alignItems: "center",
                padding: 15, 
                borderBottomWidth: 1,
                borderBottomColor: "#eee"
              }} 
            > 
              <Text style={{ color: theme === "dark" ? "#fff" : "#000", flex: 1 }}>
                {item.title}
              </Text> 

              <View style={{ flexDirection: "row", gap: 10 }}>
                {/* Bouton Editer */}
                <Button 
                  title="✏️" 
                  onPress={() => { 
                    setTitle(item.title); 
                    setEditingId(item.id); 
                  }} 
                /> 

                {/* NOUVEAU : Bouton Supprimer */}
                <Button 
                  title="❌" 
                  color="red"
                  onPress={() => handleDelete(item.id)} 
                /> 
              </View>
            </View> 
          )} 
        /> 
      )} 
    </View> 
  ); 
}