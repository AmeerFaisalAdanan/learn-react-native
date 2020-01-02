import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        { name: 'Den' , age:25},
        { name: 'Taq' , age:24},
        { name: 'Ame' , age:24},
        { name: 'Pik' , age:24},
        { name: 'Sya' , age:23},
        { name: 'Nad' , age:23},
        { name: 'Dan' , age:23},
        { name: 'Sha' , age:23},
        { name: 'Piz' , age:23},
        { name: 'Dib' , age:24},
        { name: 'Cip' , age:26},
        { name: 'Naz' , age:24},
        { name: 'Lim' , age:28}
    ];
    return(
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(friends)=> friends.name}
            data={friends}
            renderItem={({item})=>{
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle:{
        marginHorizontal: 30,
        marginVertical: 30
    }
});

export default  ListScreen;