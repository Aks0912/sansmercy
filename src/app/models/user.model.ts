export class User{
    constructor(
        public firstName:string,
        public lastName:string,
        public gender:string,
        public email:string,
        public password:string,
        public cpassword:string,
        public phone:number,
        public role:string,
        public terms:boolean
    ){}
}