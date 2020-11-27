import AbstractView from "../views/AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("JLTechconsulting - Servicios")
    }

    async getHtml() {
        return `
        <section class="servicios between">
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
    <section class="servicios_tittle">
        <div class="container">
            <div class="global-headLine">
                <h1 class="headLine headLine-dark animate-right">
                    SISTEMA PARA ESTACIONES DE SERVICIO Y MARKET
                </h1>
                <div class="asterisk"><i class="fas fa-asterisk"></i></div>
            </div>
        </div>
    </section>
    <!-- serviciostittle ends -->
    <section class="servicios_info">
        <div class="container">
            <div class="item1 animate-left">
                <h3>Sistema de Operacional / Gestión para Estaciones de Servicio y Market</h3>
                <ul style="list-style-type: disc;">
                    <li>Permite el control operacional de la EESS; ofrecemos un software con todo lo que necesita tu negocio de manera segura, confiable y potente.</li>
                    <li>Tiene como objetivo el automatizar todas operaciones y procedimientos de control de las estaciones de servicios.</li>
                    <li>Cuenta con 10 módulos que brindan el soporte necesario para realizar transacciones de venta, inventarios y cuentas por cobrar.</li>
                </ul>
            </div>
            <div class="item2 animate-right">
                <h3>Módulo de Maestras</h3>
                <ul style="list-style-type: disc;">
                    <li>Configuración de Clientes crédito, los precios especiales para cliente, líneas de crédito, condiciones de pago, vencimientos, desbloqueos.</li>
                    <li>Configuración de Cliente Adelantado, los precios especiales, factura adelanto y vales de consumo.</li>
                    <li>Configuración de Cliente contado, los precios especiales, descuentos masivos, pagos con tarjeta de crédito.</li>
                    <li>Administración de flotas: Vales, listado de placas, carnet de empresa (tarjeta con banda magnética o código de barras).</li>
                    <li>Facilidad para configurar promociones en el punto de venta: Combos, “Happy Hours”, combos condicionados, tanto para combustible como para Market.</li>
                </ul>
            </div>
            <div class="item3 animate-left">
                <h3>Módulo de Inventarios</h3>
                <ul style="list-style-type: disc;">
                    <li>Administración del Kardex de Market y de Combustible.</li>
                    <li>Ingreso de medida de tanque.</li>
                    <li>Generación del Kardex Electrónico PLE.</li>
                    <li>Facilidad para la toma Inventario: La EESS no se detiene, puede seguir vendiendo mientras se ingresa el inventario físico.</li>
                </ul>
            </div>
            <div class="item4 animate-right">
                <h3>Módulo de Ventas</h3>
                <ul style="list-style-type: disc;">
                    <li>Permite tener un control total de las ventas: Análisis de faltantes y sobrantes, depósitos, contómetro vs. comprobante, cierre de turno, cierre diario, cierre de mes.</li>
                    <li>Reporte DAOT, Contómetro vs. Comprobante. Parte Mecánico.</li>
                    <li>Ticket Promedio. Faltantes, sobrantes y pagos.</li>
                    <li>Permite llevar un control para los clientes crédito: Análisis Contómetro vs. Comprobante, cierre de turno, cierre diario, cierre de mes.</li>
                  </ul>
            </div>
            <div class="item5 animate-left">
                <h3>Módulo de Cuentas por Cobrar</h3>
                <ul style="list-style-type: disc;">
                    <li>Generación de Facturas y Boletas (Cancelación de los Vales).</li>
                    <li>Estado de Cuenta por Cliente Crédito y Adelanto.</li>
                </ul>
            </div>
            <div class="item6 animate-right">
                <h3>Módulo de Ventas Manual/Market</h3>
                <ul style="list-style-type: disc;">
                    <li>Emisión de Documentos Manuales/Oficina</li>
                </ul>
            </div>
            <div class="item7 animate-left">
                <h3>Módulo de Utilitarios</h3>
                <ul style="list-style-type: disc;">
                    <li>Activación de venta combustible manual / Automático.</li>
                    <li>Reimpresión de Documentos, Cierres X y Cierre Z.</li>
                    <li>Cierre de mes.</li>
                </ul>
            </div>
            <div class="item8 animate-right">
                <h3>Módulo de Seguridad</h3>
                <ul style="list-style-type: disc;">
                    <li>Mantenimiento de usuarios y grupos.</li>
                    <li>Toda transacción queda registrada y toda acción que tomen los usuarios del sistema es configurable y auditable.</li>
                    <li>Control de accesos por grupos de usuarios: Seguridad a la información del sistema y asignación de derechos a las opciones del sistema.</li>
                    <li>Centraliza las Consultas de varias EESS: Preparado para tener un “Head” y sus filiales.</li>
                    <li>Tiene más de 100 tipos de reportes: Registro.</li>
                </ul>
            </div>
        </div>
    </section>
    <!-- servicios ends -->
    `;
    }
}