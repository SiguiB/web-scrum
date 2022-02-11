export function Menu (){
    return(
        <section id="top" className="header">
        <nav> 
            <img id="logo" alt="" src={require("./img/logo.png")}/>
            <div className="nav-links" id="navLinks">
                <i className="fa fa-times" onclick="ocultarMenu()"></i>
                <ul>
                    <li><a href="#top">Inicio</a></li>
                    <li><a href="#catalogo">Tienda</a></li>
                    <li><a href="#bot">Contacto</a></li>
                </ul>
            </div>
            <i className="fa fa-bars" onclick="mostrarMenu()"></i>
        </nav>
        <div className="intro">
            <h1>¿Quiénes somos?</h1>
            <p>Somos una empresa orgullosamente Mazatleca que proporciona productos, servicios y soluciones para obra y hogar, que suman los esfuerzos de más de 500 colaboradores por lograr ofrecer el mejor servicios y atención a nuestros clientes y proveer productos de la mejor calidad.</p>
        </div>
        </section>
    );
}