
//interface User must have an id but name and email are optional as user can sign up anon
export interface UserModel {
    id:string;
    name?:string;
    email?:string
}