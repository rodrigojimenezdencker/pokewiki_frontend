import Swal from "sweetalert2";

export function checkInputs () {
    var widget = document.querySelector('[data-widget="create_form"]');

    if (widget.querySelector('[data-hook="numPokedex"]').value != null) {
        var numPokedex = widget.querySelector('[data-hook="numPokedex"]').value;
    }

    if (widget.querySelector('[data-hook="name"]').value != null) {
        var name = widget.querySelector('[data-hook="name"]').value;
    } 

    if (widget.querySelector('[data-hook="description"]').value != null) {
        var description = widget.querySelector('[data-hook="description"]').value;
    }

    if (widget.querySelector('[data-hook="ability"]').value != null) {
        var ability = widget.querySelector('[data-hook="ability"]').value;
    }

    if (widget.querySelector('[data-hook="secondaryAbility"]').value != null) {
        var secondaryAbility = widget.querySelector('[data-hook="secondaryAbility"]').value;
    }

    if (widget.querySelector('[data-hook="hiddenAbility"]').value != null) {
        var hiddenAbility = widget.querySelector('[data-hook="hiddenAbility"]').value;
    }

    if (widget.querySelector('[data-hook="image"]').value != null) {
        var image = widget.querySelector('[data-hook="image"]').value;
    }

    if (widget.querySelector('[data-hook="weight"]').value != null) {
        var weight = widget.querySelector('[data-hook="weight"]').value;
    }

    if (widget.querySelector('[data-hook="height"]').value != null) {
        var height = widget.querySelector('[data-hook="height"]').value;
    }

    if (widget.querySelector('[data-hook="ps"]').value != null) {
        var ps = widget.querySelector('[data-hook="ps"]').value;
    }

    if (widget.querySelector('[data-hook="attack"]').value != null) {
        var attack = widget.querySelector('[data-hook="attack"]').value;
    }

    if (widget.querySelector('[data-hook="defense"]').value != null) {
        var defense = widget.querySelector('[data-hook="defense"]').value;
    }

    if (widget.querySelector('[data-hook="spAttack"]').value != null) {
        var spAttack = widget.querySelector('[data-hook="spAttack"]').value;
    }

    if (widget.querySelector('[data-hook="spDefense"]').value != null) {
        var spDefense = widget.querySelector('[data-hook="spDefense"]').value;
    }

    if (widget.querySelector('[data-hook="speed"]').value != null) {
        var speed = widget.querySelector('[data-hook="speed"]').value;
    }

    if (widget.querySelector('[data-hook="prevolution"]').value != null) {
        var prevolution = widget.querySelector('[data-hook="prevolution"]').value;
    }

    if (widget.querySelector('[data-hook="evolution"]').value != null) {
        var evolution = widget.querySelector('[data-hook="evolution"]').value;
    }

    if (widget.querySelector('[data-hook="evolutionRequirements"]').value != null) {
        var evolutionRequirements = widget.querySelector('[data-hook="evolutionRequirements"]').value;
    }

    if (widget.querySelector('[data-hook="type1"]').value != null) {
        var type1 = widget.querySelector('[data-hook="type1"]').value;
    }

    if (widget.querySelector('[data-hook="type2"]').value != null) {
        var type2 = widget.querySelector('[data-hook="type2"]').value;
    }

    if (numPokedex == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo num. de Pokédex es obligatorio!'
        });
        return;
    }

    if (isNaN(parseInt(numPokedex))) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo num. Pokédex tiene que ser un numero!'
        })
        return;
    }

    if (name === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo nombre es obligatorio!'
        });
        return;
    }

    if (description === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo descripción es obligatorio!'
        });
        return;
    }

    if (ability === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo habilidad es obligatorio!'
        });
        return;
    }

    if (image === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo imagen es obligatorio!'
        });
        return;
    }

    if (weight === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo peso es obligatorio!'
        });
        return;
    }

    if (height === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo peso es obligatorio!'
        });
        return;
    }

    if (ps == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo PS es obligatorio!'
        });
        return;
    }

    if (isNaN(parseInt(ps))) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo PS tiene que ser un numero!'
        })
        return;
    }

    if (attack == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo ataque es obligatorio!'
        });
        return;
    }

    if (defense == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo defensa es obligatorio!'
        });
        return;
    }

    if (spAttack == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo ataque especial es obligatorio!'
        });
        return;
    }

    if (spDefense == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo defensa especial es obligatorio!'
        });
        return;
    }

    if (speed == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo velocidad es obligatorio!'
        });
        return;
    }

    if (evolution != "" && evolutionRequirements == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo requerimiento para evolucionar es obligatorio!'
        });
        return;
    }
    
    widget.submit();
}