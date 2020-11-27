import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("JLTechconsulting - Nosotros ")
    }

    async getHtml() {
        return `
        <section class="nosotros_banner between">
        <div class="container">
            <div class="global-headLine">
                <div class="animate-top">
                    <h1 class="headLine">
                        Atrévete a Conocernos
                    </h1>
                </div>
                <div class="animate-bottom">
                    <p>Queremos brindarte la mejor solución para tu negocio.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- nosotros_banner ends -->
    <section class="about">
        <div class="container">
            <div class="global-headLine">
                <h1 class="headLine headLine-dark animate-right">
                    Sobre La Empresa
                </h1>
                <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                <div class="headLine-description animate-bottom">
                    <div class="first animate-right">
                        <h1> JLTECHCONSULTING E.I.R.L.</h1>
                    </div>
                    <div>
                        <p class="description"> Somos una empresa peruana dedicada a brindar soluciones de TI para Retail y Automatización adaptables a las necesidades de sus clientes, siempre otorgando una atención de confianza, personalizada y segura.
                        Nuestro equipo está conformado por especialistas en el negocio de Estaciones de Servicio para distribución de combustible y tiendas de conveniencia.</p> <br>
                    </div>
                    <img src="/static/images/empresa.jpg" alt="ubicacion">
                </div>
            </div>
        </div>
    </section>
    <!-- about ends -->
    <section class="conocenos">
        <div class="container">
            <div class="service-info">
                <div class="service-description padding-right animate-left">
                    <div class="global-headLine">
                        <h1 class="headLine headLine-dark">
                            Conocenos un poco más
                        </h1>
                        <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    </div>
                        <p class="description">En <b>JL TECHCONSULTING E.I.R.L</b> contamos con una amplia experiencia trabajando con múltiples estaciones de servicio a nivel nacional y brindando nuestro Sistema de Grifos y Market de manera eficiente. 
                        <br>
                        Envíenos un correo y nuestro equipo de profesionales se contactarán con usted       </p>
                </div>
                <div class="wrapper-img animate-right"> 
                    <img src="/static/images/wrapper-img.gif" alt="CEO" >
                </div>
            </div>
        </div>
    </section>
    <!-- conocenos ends  -->
    `;
    }
}