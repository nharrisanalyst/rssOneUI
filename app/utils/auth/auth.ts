import AsyncStorage from '@react-native-async-storage/async-storage';


export const checkForUser = async():Promise<boolean> =>{
    try {
       const user = await AsyncStorage.getItem('user');
       return true;
    
    }catch(error){
        return false;
    }
}