const autosImportados = require('./autos')

let usuario = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}
let usuario2 = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
}

let concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
        let autoBuscado = this.autos.find(function (auto) {
            return auto.patente === patente;
        });
        if (autoBuscado === undefined) return null
        return autoBuscado
    },
    venderAuto: function (patente) {
        let autoEncontrado = this.buscarAuto(patente)
        if (autoEncontrado == null) return 'El auto no se encuentra'
        autoEncontrado.vendido = true
        return autoEncontrado
    },
    autosParaLaVenta: function () { return this.autos.filter(auto => { return auto.vendido === false }) },

    autosNuevos: function () {
        let lista = this.autosParaLaVenta()
        return lista.filter(nuevos => { return nuevos.km == 0 })

    },

    listaDeVentas: function () {
        autosVendidos = this.autos.filter(auto => { return auto.vendido === true })
        preciosAuto = autosVendidos.map(function (auto) { return auto.precio })
        return preciosAuto
    },
    totalDeVentas: function () {
        let ventas = this.listaDeVentas()
        let total = ventas.reduce(function (acum, num) { return acum + num }, 0)
        return total
    },

    puedeComprar: function (auto, persona) {
        
        return persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas && persona.capacidadDePagoTotal >= auto.precio
    },

    autosQuePuedeComprar: function (persona) {
        return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto, persona) == true)
    }
}

console.log ("Esta vez modifique el archivo V2.")


