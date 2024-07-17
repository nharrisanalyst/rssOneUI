//test for the auth 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkForUser} from './auth';
import {UserModel} from './authModels';

afterEach( async()=>{
   try{ 
    await AsyncStorage.removeItem('user');
   } catch(err){

   }
})

describe('these are test for checkForUser()', ()=>{
    it('checkForUser() should return false when AsyncStorage has no key user', async()=>{
        let userStartFalse = false;
       const isUser =  await checkForUser();
       
       expect(userStartFalse).toBeFalsy()
    })

    it('checkForUSer() should return true when AsyncStorage has a key user', async() =>{
        let userStartFalse = false;
        
        const user:UserModel ={
            id:'thisIsRandom',
            name:'',
            email:''    
        }
          
        AsyncStorage.setItem('user', JSON.stringify(user));
        const isUser =  await checkForUser();
       
        expect(isUser).toBeTruthy()
    })


})