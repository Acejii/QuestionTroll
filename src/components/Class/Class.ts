interface IPerson {
    name: string;
    getAge:(age: number) => number;
}

class Person implements IPerson { 
    
    constructor(public name: string) {}

    getAge(age:number):number { 
        return 18;
    }
}

let person = new Person("Tom");
console.log(person.name);


export {}