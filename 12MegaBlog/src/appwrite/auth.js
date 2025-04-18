import conf from "../config/conf";
import {Client , Account , ID}  from 'appwrite'

export class AuthService{

    client = new Client()
    account

   AuthService(){
    this.client.setProject(conf.appwriteProjectId)
    this.account = new Account()

   }

   async createAccount ({email , password , name}){

      try {
       const userAccount =  await this.account.create(  ID.unique(),email,password,name)
        
       if(userAccount)
        return await this.login(email,password)

        else
        return userAccount

      } catch (error) {
         throw error
      }
   }

   async login({email,password})
   {
     try {
        return await this.account.createEmailPasswordSession(email,password)
     } catch (error) {
        throw  error
     } 
   }

   async getCurrentUser(){
    try {      
        return await this.account.get()
    } catch (error) {
        console.log("Error in getting current user");
    }

     return null 

   }

   async logout(){

    try {
        await this.account.deletesession()
    } catch (error) {
        console.log("error while logging out ");
    }
   }

}

const authService = new AuthService()

export default authService