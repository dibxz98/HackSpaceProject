import AbstractView from "../views/AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("JLTechconsulting - Contactanos")
    }

    async getHtml() {
        return `
        <section class="contact_banner between">
        <div class="container">
            <div class="global-headLine">
                <div class="animate-top">
                    <h1 class="headLine">
                        Envíenos un mensaje
                    </h1>
                </div>
                <div class="animate-bottom">
                    <p>Queremos brindarte la mejor solución para tu negocio.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- contact_banner ends -->

    <section class="contact_form">
        <div class="container">
            <div class="elements_form">
                <div class="left_element animate-left">
                    <form id="form" class="form" action="https://formspree.io/f/xgeplene" method="POST">
                        <div class="form-control">
                            <label for="name">Nombre</label>
                            <input type="text"  name="name" id="name"/>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <div class="form-control">
                            <label for="email">Email</label>
                            <input type="email" placeholder="tucorreo@email.com" id="email" name="email"/>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <div class="form-control">
                            <label for="affair">Asunto</label>
                            <input type="text"  name="affair" id="affair"/>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <div class="form-control">
                            <label for="message">Mensaje</label>
                            <textarea name="message" id="message" id="message" cols="100" rows="10"></textarea>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
                <div class="right_element animate-right">
                    <h2>Detalle de contacto</h2>
                    <p>Calle Fragonard 105 Dpto. 802
                        Lima – Lima – San Borja</p>
                    <p>Movistar:971-877771</p>
                    <p>jf_lezama@hotmail.com</p>
                </div>
            </div>
        </div>
    </section>
    `;
    }
}