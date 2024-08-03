export class Sedes {
    sedes: any[] = [] 
    
    constructor(){
        this.sedes = [
            {
                location : "SAN ISIDRO",
                img : "assets/edificiosede.webp" ,
                address : "Calle Manuel Fuentes 420",
                numberPhone : "633-5555"
            }
        ]
    }


    
    public getSedesList() {
        return this.sedes;
    }
}
