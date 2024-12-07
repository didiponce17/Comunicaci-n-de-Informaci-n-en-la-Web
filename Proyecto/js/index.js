document.getElementById('btnSend').addEventListener('click', function () {
    const emailField = document.getElementById('inscriptionTxt');
    const email = emailField.value.trim();

    if (email === '') {
        Swal.fire({
            title: '¡Error!',
            html: `
                <p>El correo está vacío, por favor ingrésalo.</p>
                <img src="img/404.gif" alt="Error" style="width: 150px; height: auto; margin-top: 10px;">
            `,
            showConfirmButton: true,
            confirmButtonColor: '#5E7959',
            confirmButtonText: 'OK',
        });
    } else {
        Swal.fire({
            title: '¡Éxito!',
            html: `
                <p>¡Gracias por suscribirte! Mensaje enviado.</p>
                <img src="img/sent.gif" alt="Mensaje enviado" style="width: 150px; height: auto; margin-top: 10px;">
            `,
            showConfirmButton: true,
            confirmButtonColor: '#5E7959',
            confirmButtonText: 'OK',
        });

        // Limpia el campo de texto
        emailField.value = '';
    }
});