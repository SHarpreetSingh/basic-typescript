class printerClass {
    doIt():void{
        console.log("proint from parent clas");
    }
}

class stringClas extends printerClass{
    // doIt();
    doIt():void{
        super.doIt();
        console.log("proint from parent clas");
    }
}

const interClass = new printerClass();

interClass.doIt()