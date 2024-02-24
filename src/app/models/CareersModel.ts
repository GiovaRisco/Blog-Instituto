export class CareersModel {

    careers : any[] = []

    constructor(){
            this.careers =  [
                {
                    id: 1,
                    img: '../../../assets/CARD-GESTION-Y-NEGOCIOS-310x310.jpeg',
                    title: 'CARRERA DE ADMINISTRACION y NEGOCIOS',
                    careerName: 'ADMINISTRACION y NEGOCIOS',
                    professional: 'ADMINISTRADOR DE EMPRESAS',
                    content: {
                        description: [
                            `La Administración de empresas en 2 años, abarca todas aquellas actividades relacionadas con el buen funcionamiento y aprovechamiento de los recursos (dinero, insumos, personas, tiempo, entre otros.) de la organización para generar valor para sus clientes
                  y colaboradores.`,
                            `Un administrador o gestor administrativo puede participar en grandes corporaciones o multinacionales hasta en el desarrollo de su propia empresa.`,
                            `Es una de las carreras más flexibles en cuanto a campo de aplicación. Estudiando nuestra carrera técnica podrás culminar tus estudios en menor tiempo y acceder a la convalidación que te permitirá tener continuidad de estudios en UPC, UPN, ESAN y La Universidad La Salle.
                  (*) El grado que corresponde a este programa de estudios es de bachiller técnico en gestión administrativa, y el título es de profesional técnico en gestión administrativa.`
        
                        ],
                        whatToDo: [
                            `Un administrador de empresas diseña o ejecuta estrategias y procesos administrativos para la gestión eficiente de los negocios, de modo que generen valor para sus clientes y el país.
                    `,
                            `Asimismo, gestiona eficientemente los recursos de cualquier organización para contribuir con los objetivos de la misma y, gracias a los conocimientos en innovación y emprendimiento, podrá ser parte del lanzamiento de iniciativas o nuevos productos, asegurando la sostenibilidad financiera de la empresa o su propio negocio.`,
                            `Igualmente, tendrá desarrolladas habilidades variadas en Gestión, Recursos Humanos, Marketing, Contabilidad, Finanzas e Innovación de Emprendimiento.`
                        ],
                        work: {
                            descrip: `El egresado en Administración de Empresas de Cibertec podrá crear su propia empresa desempeñarse en una amplia variedad de industrias y áreas, participando en roles relacionados con:`,
                            roles: [
                                'Procesos administrativos',
                                'Iniciativas de mejora o innovación y lanzamiento de nuevos producto o servicio',
                                `Procesos internos en áreas como experiencia del cliente comerciales,
                         finanzas, recursos humanos y operaciones`,
                                'Diseño o implementación de planes estratégicos',
                                'Gestión de información para la toma de decisiones'
                            ]
                        },
                        courses: {
                            text: `Nuestra malla curricular en Administración de Empresas se caracteriza por su enfoque educativo basado en tecnología,
                   herramientas digitales e innovación, lo que permite que, al egresar, éste sea altamente atractivo en un mercado donde las empresas están enfocadas
                    en la transformación digital para responder a las necesidades de sus clientes.`,
        
                            brochure: 'https://www.cibertec.edu.pe/wp-content/uploads/2019/05/Folleto_ADM-EMPRESAS_compressed.pdf'
                        }
                    }
                }
            ]
    }


    public getCareersList() {
        return this.careers;
    }
}