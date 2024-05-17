export class CareersModel {

    careers: any[] = []

    constructor() {
        this.careers = [
            {
                id: 1,
                img: '/src/assets/arquitectura-de-ti.png',
                title : 'ARQUITECTURA DE PLATAFORMAS Y SERVICIOS DE TI',
                courses: '/src/assets/documents/malla-curricular-servicios-ti.pdf',
                
            },
            {
                id: 2,
                img: '/src/assets/asistente-admi.png',
                title : 'ASISTENTE ADMINISTRATIVO DE GERENCIA',
                courses: '/src/assets/documents/malla-curricular-servicios-ti.pdf',
            },
            {
                id: 3,
                img: '/src/assets/gestion-comercial.png',
                title : 'GESTION COMERCIAL DE PRODUCTOS Y SERVICIOS BANCARIOS Y FINANCIEROS',
                courses: '/src/assets/documents/malla-curricular-servicios-ti.pdf',
            },
            {
                id: 4,
                img: '/src/assets/guia-turismo.png',
                title : 'GUIA OFICIAL DE TURISMO',
                courses: '/src/assets/documents/malla-curricular-servicios-ti.pdf',
            },
            {
                id: 5,
                img: '/src/assets/farmacia-tecnica.png',
                title : 'FARMACIA TÉCNICA',
                courses: '/src/assets/documents/malla-curricular-servicios-ti.pdf',
            }
        ]
    }


    public getCareersList() {
        return this.careers;
    }
}