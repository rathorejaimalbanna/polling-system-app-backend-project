

export default class userModel{
    constructor(email,name,pass){
        this.email = email,
        this.name = name,
        this.pass = pass
    }

    static addData(email,name,pass)
    {
        var arr = {email:email,name:name,pass:pass};
        users.push(arr);
        return arr
    };
    static checkData(email,pass)
    {
        var arr2 = users.find(u=>u.email==email && u.pass == pass);
        return arr2;
    }
    static getAll()
    {
        return users
    }
    
};


var users = [
    new userModel('jai@banna.com','jaimal','123ugofree'),
    new userModel('jai@higherself.com','123','45')
]