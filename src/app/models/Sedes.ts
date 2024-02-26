export class Sedes {
    sedes: any[] = [] 
    
    constructor(){
        this.sedes = [
            {
                location : "BREÑA",
                img : "../../../assets/sede-cibertec-3.webp" ,
                address : "Av. Brasil 714 – 792 (CC La Rambla piso 3)",
                numberPhone : "633-5555",
                src : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.671494995384!2d-77.04961332415098!3d-12.066108788172192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e6535eef4b%3A0x730d425d3989a367!2sCIBERTEC%20-%20Sede%20Bre%C3%B1a!5e0!3m2!1ses-419!2spe!4v1708816492066!5m2!1ses-419!2spe'
            },
            {
                location : "CALLAO",
                img : "../../../assets/sede-cibertec-2.webp" ,
                address : "Av. Mariscal Oscar R. Benavides 3866–4070 (Mall Plaza)",
                numberPhone : "633-5555",
                src : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.12950114335985!2d-77.10280303900042!3d-12.055121104731477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cbfd530d5e43%3A0xa4615c27370bc9a5!2sCIBERTEC%20-%20Sede%20Callao!5e0!3m2!1ses-419!2spe!4v1708816576228!5m2!1ses-419!2spe'
             },
             {
                 location : "LIMA CENTRO",
                 img : "../../../assets/sede-cibertec.webp" ,
                 address : "Av. Uruguay 514, Cercado de Lima",
                 numberPhone : "633-5555",
                 src : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8496210250246!2d-77.04357722415118!3d-12.053865888183534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c93177909de3%3A0xd63126b8dfe444b8!2sCIBERTEC%20-%20Sede%20Lima%20Centro!5e0!3m2!1ses-419!2spe!4v1708816721722!5m2!1ses-419!2spe'
              }
        ]
    }


    
    public getSedesList() {
        return this.sedes;
    }
}
