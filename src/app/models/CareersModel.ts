export class CareersModel {

    careers: any[] = []

    constructor() {
        this.careers = [
            {
                id: 1,
                img: '../../../assets/arquitectura-de-ti.png',
                title : 'ARQUITECTURA DE PLATAFORMAS Y SERVICIOS DE TI',
                courses: '../../../assets/documents/malla-curricular-servicios-ti.pdf',
                
            },
            {
                id: 2,
                img: '../../../assets/asistente-admi.png',
                title : 'ASISTENTE ADMINISTRATIVO DE GERENCIA',
                courses: '../../../assets/documents/malla-curricular-servicios-ti.pdf',
            },
            {
                id: 3,
                img: '../../../assets/gestion-comercial.png',
                title : 'GESTION COMERCIAL DE PRODUCTOS Y SERVICIOS BANCARIOS Y FINANCIEROS',
                courses: '../../../assets/documents/malla-curricular-servicios-ti.pdf',
            },
            {
                id: 4,
                img: '../../../assets/guia-turismo.png',
                title : 'GUIA OFICIAL DE TURISMO',
                courses: '../../../assets/documents/malla-curricular-servicios-ti.pdf',
            },
            {
                id: 5,
                img: '../../../assets/farmacia-tecnica.png',
                title : 'FARMACIA TÉCNICA',
                courses: '../../../assets/documents/malla-curricular-servicios-ti.pdf',
            }
        ]
    }


    public getCareersList() {
        return this.careers;
    }
}