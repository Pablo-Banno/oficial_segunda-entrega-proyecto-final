const carro = new Carrito();
const carrito = document.getElementById(`carrito`);
const servicios = document.getElementById(`lista-servicios`);
const listaServicios = document.querySelector(`#lista-carrito tbody`);

const vaciarCarritoBtn = document.getElementById(`vaciar-carrito`);

const generarPresupuestoBtn = document.getElementById(`generar-presupuesto`)

function cargarEventos(){
    productos.addEventListener(`click`, (e)=> {
        carro.agregarServicio(e)
    });
    
    carrito.addEventListener(`click`, (e)=> {
        carro.eliminarServicio(e)
    });

    vaciarCarritoBtn.addEventListener(`click`, (e)=> {
        carro.vaciarCarrito(e)
    });

    document.addEventListener(`DOMContentLoaded`, carro.leerLocalStorage());

    generarPresupuestoBtn.addEventListener(`click`, (e)=> {
        carro.generarPresupuesto(e)
    });
}