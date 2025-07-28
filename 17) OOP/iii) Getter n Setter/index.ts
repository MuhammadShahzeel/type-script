class myClass{
    private _myProp: number = 0;

    get myProperty(): number{
        return this._myProp;
    }
    set myProperty(value: number){
        this._myProp = value;
    }
}
const myInstance = new myClass();
console.log(`Current Value: ${myInstance.myProperty}`);

myInstance.myProperty = 10;
console.log(`Current Value: ${myInstance.myProperty}`);
