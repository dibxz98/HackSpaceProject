import Dashboard from "./views/Dashboard.js"
import Aboutus from "./views/Aboutus.js"
import Servicios from "./views/Servicios.js"
import Facturacion from "./views/Facturacion.js"
import Contactanos from "./views/Contactanos.js"

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//Let's start by defining a function that uses the History API to navigate to a given path.
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}
const router = async () => {

    // /Aboutus/:id

    const routes = [
     { path: "/" , view: Dashboard },
     { path: "/Aboutus" , view: Aboutus },
    //  { path: "/Aboutus/:id" , view: ViewPost },
     { path: "/Servicios" , view: Servicios},
     { path: "/Facturacion" , view: Facturacion },
     { path: "/Contactanos" , view: Contactanos }
    ];

    //Test each route for potencial match
    const potencialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potencialMatches.find(potencialMatch => potencialMatch.result !== null);

    /* Route not found - return first route OR a specific "not-found" route */
    if (!match) {
    match = {
        route: routes[0],
        result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

}

window.addEventListener("popstate", router);

//enable all links with the data-link attribute to make use of this function. Also, we can run the router on document load.
document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            document.body.classList.toggle('open');
            navigateTo(e.target.href)
        }
    })
    /* Document has loaded -  run the router! */
    router();
})