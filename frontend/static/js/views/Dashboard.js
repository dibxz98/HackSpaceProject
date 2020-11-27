import AbstractView from "../views/AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("JL Techconsulting - Sistema de Grifos y Market")
    }

    async getHtml() {
        return `
        <section class="hero" id="hero">
        <div class="container">
            <h1 class="headLine">
                Sistema de Grifos &#38; <br>
                Market
            </h1>
            <div class="headLine-description">
                <div class="separator">
                    <div class="line line-left"></div>
                    <div class="asterisk"><i class="fas fa-gas-pump"></i></div>
                    <div class="line line-right"></div>
                </div>
                <div class="single-animation">
                    <h5>Reserva tu cita ahora</h5>
                    <a href="/Contactanos" class="btn cta-btn">Contáctanos</a>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Ends -->
    <section class="ourServices">
        <div class="container">
            <div class="services-info">
                <div class="services-description padding-right">
                    <div class="global-headLine">
                        <h1 class="headLine headLine-dark">
                            Nuestros Servicios
                        </h1>
                        <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    </div>
                </div>

                <div class="service-info-img">
                    <div class="inner">
                        <article class="feature left animate-left">
                          <span class="image"><img src="/static/images/boquillas.jpg" alt="grifos" /></span>
                          <div class="content">
                            <h2>Sistema Operacional / Gestión para Estaciones de Servicio y Market</h2>
                            <p>Permite el control operacional de la EESS; ofrecemos un software con todo lo que necesita tu negocio de manera segura, confiable y potente</p>
                            <a href="/Servicios" class="btn cta-btn">Ver más</a>
                          </div>
                        </article>
                        <article class="feature right animate-right">
                          <span class="image"><img src="/static/images/gente_trabajando.jpg" alt="gente_trabajando" /></span>
                          <div class="content">
                            <h2>2 Tipos de Proveedores Electrónicos</h2>
                            <p>Agilizamos el manejo de comprobantes electrónicos a traves de dos proveedores, siempre pensando en tu comodidad y crecimiento</p>
                             <a href="/Facturacion" class="btn cta-btn">Ver más</a>
                          </div>
                        </article>
                      </div>
                </div>
            </div>
        </div>
    </section>
    <!-- our services ends -->
    <section class="cards">
        <div class="container">
            <div class="cards-info">
                <div class="headLine headLine-dark text animate-left">
                    <h1>Confiable, Eficiente Sistema</h1>
                    <h2>Para Tu Negocio</h2>
                </div>
                <div class="cards animate-right">
                    <div class="col">
                      <div class="card aqua">
                        <h2>Investigación</h2>
                        <p>Nos adaptamos a las últimas tendencias tecnológicas para tu negocio</p>
                        <img src="/static/images/icon-supervisor.svg" alt="Eficiencia">
                      </div>
                    </div>
                    <div class="col">
                      <div class="card red">
                        <h2>Facilidades</h2>
                        <p>Brindamos un servicio enfocado en las necesidades tuyas y tus clientes</p>
                        <img src="/static/images/icon-team-builder.svg" alt="Confiable">
                      </div>
                    
                      <div class="card orange">
                        <h2>Soporte</h2>
                        <p>Contamos con personal capacitado para brindar una atención especializada</p>
                        <img src="/static/images/icon-karma.svg" alt="Sistema">
                      </div>
                    </div>
                    <div class="col">
                      <div class="card blue">
                        <h2>App Design</h2>
                        <p>Nos adaptamos con facilidad a las últimas tecnólogias para mejorar nuestro servicio</p>
                        <img src="/static/images/icon-calculator.svg" alt="Negocio">
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- cards ends -->
    <section class="valores">
        <div class="container">
            <div class="service-info">
                <div class="service-description padding-right animate-left">
                    <div class="global-headLine">
                        <h1 class="headLine headLine-dark">
                            Queremos Entregarte
                        </h1>
                        <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    </div>
                    <p>Gestión de su Estación de Servicio en la administración y mejora de todos los procesos que  usted maneje. Nuestros módulos diseñados específicamente para ayudarle en la administración, control y mejora de la eficiencia en los
                  procesos que usted realiza.</p>
                </div>
                <div class="image-group animate-right"> 
                    <img class="animate-top" src="/static/images/pumps.jpg" alt="gasolina">
                    <img class="animate-bottom" src="/static/images/gas.jpg" alt="combustible">
                </div>
            </div>
        </div>
    </section>
    `;
    }
}