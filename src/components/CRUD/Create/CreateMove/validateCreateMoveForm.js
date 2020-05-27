import Swal from "sweetalert2";

export function checkInputs (event) {
    var widget = document.querySelector('[data-widget="create_form"]');

    event.preventDefault();

    if (widget.querySelector('[data-hook="name"]').value !== null) {
        var name = widget.querySelector('[data-hook="name"]').value;
    } 

    if (widget.querySelector('[data-hook="description"]').value !== null) {
        var description = widget.querySelector('[data-hook="description"]').value;
    }

    if (widget.querySelector('[data-hook="power"]').value !== null) {
        var power = widget.querySelector('[data-hook="power"]').value;
    }

    if (widget.querySelector('[data-hook="accuracy"]').value !== null) {
        var accuracy = widget.querySelector('[data-hook="accuracy"]').value;
    }

    if (widget.querySelector('[data-hook="quantity"]').value !== null) {
        var quantity = widget.querySelector('[data-hook="quantity"]').value;
    }

    if (widget.querySelector('[data-hook="typeId"]').value !== null) {
        var typeId = widget.querySelector('[data-hook="typeId"]').value;
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

    if (isNaN(parseInt(power))) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo poder tiene que ser un numero!'
        })
        return false;
    }

    if (isNaN(parseInt(accuracy))) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo precisión tiene que ser un numero!'
        })
        return false;
    }

    if (accuracy > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo precisión no puede ser mayor a 100!'
        })
        return false;
    }

    if (quantity === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo cantidad es obligatorio!'
        });
        return false;
    }

    if (isNaN(parseInt(quantity))) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo cantidad tiene que ser un numero!'
        })
        return false;
    }

    if (typeId === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo typeId es obligatorio!'
        });
        return false;
    }

    Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Movimiento ' + name + ' creado correctamente'
    }).then((result) => {
        window.history.back();
    });
    return true;
}