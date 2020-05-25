import Swal from "sweetalert2";

export function checkInputs (event) {
    var widget = document.querySelector('[data-widget="create_form"]');

    event.preventDefault();

    if (widget.querySelector('[data-hook="name"]').value != null) {
        var name = widget.querySelector('[data-hook="name"]').value;
    } 

    if (widget.querySelector('[data-hook="color"]').value != null) {
        var color = widget.querySelector('[data-hook="color"]').value;
    }

    if (widget.querySelector('[data-hook="image"]').value != null) {
        var image = widget.querySelector('[data-hook="image"]').value;
    }

    if (widget.querySelector('[data-hook="secondaryImage"]').value != null) {
        var secondaryImage = widget.querySelector('[data-hook="secondaryImage"]').value;
    }

    if (name === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo nombre es obligatorio!'
        });
        return false;
    }

    if (color === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo color es obligatorio!'
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

    if (secondaryImage === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo imagen secundaria es obligatorio!'
        });
        return false;
    }

    Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Tipo ' + name + ' modificado correctamente'
    }).then((result) => {
        widget.reset();
    });
    return true;
}