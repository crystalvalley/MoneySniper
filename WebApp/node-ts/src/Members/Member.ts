class Member {
    /* Instance fields */
    private _email : string | undefined;
    private _password : string | undefined;
    private _name : string | undefined;
    private _age : number | undefined;
    private _gender : string | undefined;
    // private _role : MemberRole;
    
    /* Getter Methods */
    public get email() : string | undefined {
        return this._email;
    }
    
    public get password() : string | undefined {
        return this._password;
    }
    
    public get name() : string | undefined{
        return this._name;
    }

    public get age() : number | undefined{
        return this._age;
    }    
    
    public get gender() : string | undefined{
        return this._gender;
    }

    /* Setter Methods */
    public set email(v : string | undefined) {
        this._email = v;
    }
    
    public set password(v : string | undefined) {
        this._password = v;
    }
    
    
    public set name(v : string | undefined) {
        this._name = v;
    }
    
    public set age(v : number | undefined) {
        this._age = v;
    }
    
    public set gender(v : string | undefined) {
        this._gender = v;
    }
}

export {
    Member
};