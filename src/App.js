import { Footer } from "./Footer";
import { Menu } from "./Menu";

export function App(){
    return(
        <div>
            <header>
                <Menu/>
            </header>
            <main >
            <section className="info">
                    <h2>Misión</h2>
                    <p>La misión de <b>Grupo Soria</b> es distinguirse por satisfacer las necesidades de productos y servicios a sus clientes através de la optimización de nuestros recursos, buscando la mejora continua y así lograr consolidarse como la solución integral por excelencia.
                    Además en <b>Grupo Soria</b> tenemos como consigna propiciar un sano ambiente de trabajo y entorno productivo, fomentando el trabajo en equipo y colaboración del personal de las empresas que conforman al grupo.</p>
                    <h2>Visión</h2>
                    <p>Consolidarnos como una de las empresas proveedoras de materiales y ferreteras más importantes del sur de Sinaloa, de rápido crecimiento, contando con una inovadora organización y filosofía empresarial.</p>
                    <h2>Valores</h2>
                    <p>Creemos ampliamente que nuestras fortalezas son la Calidad, Confianza, Honestidad, Integridad, Respeto, Responsabilidad y el Trabajo en equipo.</p>
                <div className="stats">
                    <div className="graficos">
                        <img src={require("./img/graficos1.png")} alt="" />
                    </div>
                    <div className="graficos">
                        <img src={require("./img/graficos2.png")} alt="" />
                    </div>
                    <div className="graficos">
                        <img src={require("./img/graficos3.png")} alt="" />
                    </div>
                </div>
            </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}


