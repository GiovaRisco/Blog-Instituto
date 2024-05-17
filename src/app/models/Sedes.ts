export class Sedes {
    sedes: any[] = [] 
    
    constructor(){
        this.sedes = [
            {
                location : "SAN ISIDRO",
                img : "/src/assets/edificiosede.jpg" ,
                address : "Calle Manuel Fuentes 420",
                numberPhone : "633-5555"
            }
        ]
    }


    
    public getSedesList() {
        return this.sedes;
    }
}
