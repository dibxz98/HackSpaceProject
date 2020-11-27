import AbstractView from "../views/AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("JLTechconsulting - Facturacion")
    }

    async getHtml() {
        return `
        <section class="facturacion_banner between">
        <div class="container">
            <div class="global-headLine">
                <div class="animate-top">
                    <h2 class="headLine">
                        Hacemos Crecer Tu Negocio
                    </h2>
                </div>
                <div class="animate-bottom">
                    <p>Queremos brindarte la mejor solución para tu negocio.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- servicios ends -->
    <section class="servicios_text">
        <div class="container">
            <div class="global-headLine">
                <div class="titulo">
                    <h2 class="headLine headLine-dark">
                        FACTURACIÓN ELECTRÓNICA – TIENE 2 OPCIONES: PROVEEDOR ELECTRÓNICO + OSE Y FACTURADOR SUNAT
                    </h2>
                </div>
                <div class="servicios-description animate-top">
                    <p class="first-tittle">
                        PROVEEDOR ELECTRÓNICO, Utilizando un Operador de Servicios Electrónicos (OSE)
                    </p>
                    <p class="description">
                        Permite el control operacional de la EESS; ofrecemos un software con todo lo que necesita tu negocio de manera segura, confiable y potente.
                         Tiene como objetivo el automatizar todas operaciones y procedimientos de control de las estaciones de servicios.
                         Cuenta con 10 módulos que brindan el soporte necesario para realizar transacciones de venta, inventarios y cuentas por cobrar.
                    </p>
                </div>
            </div>
            <div class="servicios_photos">
                <div class="left-photo animate-left">
                    <img src="/static/images/ventaja.jpg" alt="Facturacion Electronica">
                </div>
                <div class="right-photo animate-right">
                    <img src="/static/images/proceso.jpg" alt="Proceso Sunat">
                </div>
            </div>  
        </div>
    </section>
    <!-- servicios text ends -->
    <section class="servicios_second_text">
        <div class="container">
            <p class="first-tittle animate-top">
                PROVEEDOR ELECTRÓNICO, Utilizando FACTURADOR SUNAT
            </p>
            <div class="service-info">
                <div class="wrapper-img animate-left"> 
                    <img src="/static/images/sunat.jpg" alt="SUNAT" >
                </div>
                <div class="service-description padding-left animate-left">
                    <div class="global-headLine">
                        <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    </div>
                        <p class=" servicios-description">En <b>JL TECHCONSULTING E.I.R.L</b> contamos con una amplia experiencia trabajando con múltiples estaciones de servicio a nivel nacional y brindando nuestro Sistema de Grifos y Market de manera eficiente. 
                        <br>
                        Envíenos un correo y nuestro equipo de profesionales se contactarán con usted       </p>
                </div>
            </div>
        </div>
    </section>
    `;
    }
}