export class Customer {
    public id: string;
    public userName: string;
    public email:string;
    public phoneNumber:string;
    
    constructor(userName: string,email: string,phoneNumber: string) {
        this.userName = userName;
        this.email = email;
        this.phoneNumber=phoneNumber;
    }
}