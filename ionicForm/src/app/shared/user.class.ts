export class User {
    email: string;
    password: string;
    name:string;
    last_name:string;
    age:number

    getName(){
        return this.name;
    }

    getLastName(){
        return this.last_name;
    }

    getEmail(){
        return this.email;
    }

    getAge(){
        return this.age;
    }

    getPassword(){
        return this.password;
    }


}