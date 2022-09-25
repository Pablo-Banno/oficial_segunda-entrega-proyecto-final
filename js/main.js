class Carrito {

    // Método para añadir el servicio al carrito

    agregarServicio(e) {
        e.preventDefault();
        if (e.target.classList.contains(`agregar-carrito`)){
            const servicio = e.target.parentElement.parentElement;
            this.leerDatosServicio(servicio);
        }
    }

    // Método para leer los datos del servicio

    leerDatosServicio(servicio) {
        const infoServicio = {
            nombre : servicio.querySelector(`.nombre`).textContent,
            precio : servicio.querySelector(`.valor span`).textContent,
            id : servicio.querySelector(`input`).getAttribute(`data-id`),
            cantidad : 1
        }

        let serviciosLS;
        serviciosLS = this.obtenerServiciosLocalStorage();
        serviciosLS.forEach(function (serviciosLS) {
            if (servicioLS.id === infoServicio.id) {
                serviciosLS = servicioLS.id;
            }
        });
        if (serviciosLS.id === infoServicio.id) {
            alert("Ya seleccionaste este servicio");
        }
        else {
            this.insertarCarrito(infoServicio);
        }
        this.insertarCarrito(infoServicio);
    }

    insertarCarrito(servicio) {
        const row = document.createElement(`tr`);
        row.innerHTML = `
        <td>${servicio.nombre}</td>
        <td>${servicio.precio} USD</td>
        <td><a href="#" class="borrar-servicio" data-id="${servicio.id}"></a></td>
        `;
        listaServicios.append(row);
        this.guardarServiciosLocalStorage(servicio);
    }

    eliminarServicio(e) {
        e.preventDefault();
        let servicio, servicioID;
        if (e.target.classList.contains(`borrar-servicio`)) {
            e.target.parentElement.parentElement.remove();
            servicio = e.target.parentElement.parentElement;
            servicioID = servicio.querySelector(`input`).getAttribute(`data-id`);
        }
        this.eliminarServicioLocalStorage(servicioID);
    }

    // Método para vaciar el carrito

    vaciarCarrito(e) {
        e.preventDefault();
        while (listaServicios.firstChild) {
            listaServicios.removeChild(listaServicios.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }

    // Método para guardar servicios en el local storage

    guardarServiciosLocalStorage(servicio) {
        let servicios;
        servicios = this.obtenerServiciosLocalStorage();
        servicios.push(servicio);
        localStorage.setItem(`servicios`, JSON.stringify(servicios));
    }

    obtenerServiciosLocalStorage() {
        let servicioLS;

        if (localStorage.getItem(`servicios`) === null) {
            servicioLS = [];
        }
        else {
            servicioLS = JSON.parse(localStorage.getItem(`servicios`));
        }
        return servicioLS;
    }

    // Método para eliminar servicio del local storage

    eliminarServicioLocalStorage(servicioID) {
        let serviciosLS;
        serviciosLS = this.obtenerServiciosLocalStorage();
        serviciosLS.forEach(function(servicioLS, index) {
            if (servicioLS.id === servicioID) {
                serviciosLS.splice(index, 1);
            }
        });
        localStorage.setItem(`servicios`, JSON.stringify(serviciosLS))
    }

    // Método para leer los servicios del local storage

    leerLocarStorage() {
        let serviciosLS;
        serviciosLS = this.obtenerServiciosLocalStorage();
        serviciosLS.forEach(function(servicio) {
            const row = document.createElement(`tr`);
            row.innerHTML = `
            <td>${servicio.nombre}</td>
            <td>${servicio.precio} USD</td>
            <td><a href="#" class="borrar-servicio" data-id="${servicio.id}"></a></td>
            `;
            listaServicios.append(row);
        });
    }

    // Método para vaciar el local storage

    vaciarLocalStorage() {
        localStorage.clear();
    }

    generarPresupuesto(e) {
        e.preventDefault();
        if (this.obtenerServiciosLocalStorage().length === 0) {
            alert("No se seleccionó ningún service")
        }
        else {
            location.href = "presupuesto.html"
        }
    }
}