import { View, Text, FlatList, TouchableOpacity } from "react-native"; 
import { useSelector, useDispatch } from "react-redux"; 
import { useEffect } from "react"; 
import { addTodo } from "../store/todosSlice"; 
import AppBar from "./AppBar";
 
 
export default function TodoListScreen({ navigation }) { 
 const todos = useSelector(state => state.todos); 
 const dispatch = useDispatch(); 
 
 useEffect(() => { 
   // On n'ajoute les données de test QUE si la liste est vide
   // Cela évite les doublons d'ID au rechargement
   if (addTodo && todos.length === 0) { 
     dispatch(addTodo({ id: 1, title: "Faire les courses" })); 
     dispatch(addTodo({ id: 2, title: "Sortir le chien" })); 
     dispatch(addTodo({ id: 3, title: "Coder une app RN" })); 
   }
 }, [dispatch, todos.length]); // On surveille la taille de la liste
 
 return ( 
    <View style={{ flex: 1 }}>
      <AppBar title="Ma Liste" /> 
 
      <FlatList
       data={todos}
       keyExtractor={(item, index) => item.id.toString() + index} // Sécurité supplémentaire
       renderItem={({ item }) => ( 
          <TouchableOpacity 
             onPress={() => navigation.navigate("Détails", item)} 
             style={{
               padding: 20,
               borderBottomWidth: 1,
               borderBottomColor: "#ccc",
             }}
           > 
             <Text style={{ fontSize: 18 }}>
               {item.title} 
             </Text>
          </TouchableOpacity> 
       )} 
     /> 
    </View>
 ); 
}