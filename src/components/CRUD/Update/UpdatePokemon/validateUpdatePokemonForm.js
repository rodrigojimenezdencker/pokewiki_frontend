import Swal from "sweetalert2";

export function checkInputs (event) {
    var widget = document.querySelector('[data-widget="create_form"]');

    event.preventDefault();

    if (widget.querySelector('[data-hook="numPokedex"]').value !== null) {
        var numPokedex = widget.querySelector('[data-hook="numPokedex"]').value;
    }

    if (widget.querySelector('[data-hook="name"]').value !== null) {
        var name = widget.querySelector('[data-hook="name"]').value;
    } 

    if (widget.querySelector('[data-hook="description"]').value !== null) {
        var description = widget.querySelector('[data-hook="description"]').value;
    }

    if (widget.querySelector('[data-hook="ability"]').value !== null) {
        var ability = widget.querySelector('[data-hook="ability"]').value;
    }

    if (widget.querySelector('[data-hook="image"]').value !== null) {
        var image = widget.querySelector('[data-hook="image"]').value;
    }

    if (widget.querySelector('[data-hook="weight"]').value !== null) {
        var weight = widget.querySelector('[data-hook="weight"]').value;
    }

    if (widget.querySelector('[data-hook="height"]').value !== null) {
        var height = widget.querySelector('[data-hook="height"]').value;
    }

    if (widget.querySelector('[data-hook="ps"]').value !== null) {
        var ps = widget.querySelector('[data-hook="ps"]').value;
    }

    if (widget.querySelector('[data-hook="attack"]').value !== null) {
        var attack = widget.querySelector('[data-hook="attack"]').value;
    }

    if (widget.querySelector('[data-hook="defense"]').value !== null) {
        var defense = widget.querySelector('[data-hook="defense"]').value;
    }

    if (widget.querySelector('[data-hook="spAttack"]').value !== null) {
        var spAttack = widget.querySelector('[data-hook="spAttack"]').value;
    }

    if (widget.querySelector('[data-hook="spDefense"]').value !== null) {
        var spDefense = widget.querySelector('[data-hook="spDefense"]').value;
    }

    if (widget.querySelector('[data-hook="speed"]').value !== null) {
        var speed = widget.querySelector('[data-hook="speed"]').value;
    }

    if (widget.querySelector('[data-hook="evolution"]').value !== null) {
        var evolution = widget.querySelector('[data-hook="evolution"]').value;
    }

    if (widget.querySelector('[data-hook="evolutionRequirements"]').value !== null) {
        var evolutionRequirements = widget.querySelector('[data-hook="evolutionRequirements"]').value;
    }

    if (widget.querySelector('[data-hook="type1"]').value !== null) {
        var type1 = widget.querySelector('[data-hook="type1"]').value;
    }
    
    if (numPokedex === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo num. de Pokédex es obligatorio!'
        });
        return false;
    }

    if (isNaN(parseInt(numPokedex))) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo num. Pokédex tiene que ser un numero!'
        })
        return false;
    }

    if (name === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo nombre es obligatorio!'
        });
        return false;
    }

    if (description === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo descripción es obligatorio!'
        });
        return false;
    }

    if (ability === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo habilidad es obligatorio!'
        });
        return false;
    }

    if (image === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo imagen es obligatorio!'
        });
        return false;
    }

    if (weight === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo peso es obligatorio!'
        });
        return false;
    }

    if (height === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo peso es obligatorio!'
        });
        return false;
    }

    if (ps === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo PS es obligatorio!'
        });
        return false;
    }

    if (isNaN(parseInt(ps))) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo PS tiene que ser un numero!'
        })
        return false;
    }

    if (attack === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo ataque es obligatorio!'
        });
        return false;
    }

    if (defense === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo defensa es obligatorio!'
        });
        return false;
    }

    if (spAttack === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo ataque especial es obligatorio!'
        });
        return false;
    }

    if (spDefense === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo defensa especial es obligatorio!'
        });
        return false;
    }

    if (speed === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo velocidad es obligatorio!'
        });
        return false;
    }

    if (evolution !== "DEFAULT" && evolutionRequirements === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo requerimiento para evolucionar es obligatorio!'
        });
        return false;
    }

    if (evolution === "DEFAULT" && evolutionRequirements !== "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Es necesaria una evolucion para el requerimiento!'
        });
        return false;
    }

    if (type1 === "DEFAULT") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo tipo primario es obligatorio!'
        });
        return false;
    }

    Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Pokémon ' + name + ' modificado correctamente'
    })
    return true;
}