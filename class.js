class AGreatClass {
    constructor(greatNumber) {
        this.greatNumber = greatNumber;
    }

    returnGreatThing() {
        return this.greatNumber;
    }
}

class AnotherGreatClass extends AGreatClass {
    constructor(greatNumber, greatWord) {
        super(greatNumber);
        this.greatWord = greatWord;
    }

    returnGreatThing() {
        let greatNumber = super.returnGreatThing();

        return [greatNumber, this.greatWord];
    }
}

const aGreatObject = new AnotherGreatClass(10, 'adventure');
console.log(
    aGreatObject.returnGreatThing(),
);
