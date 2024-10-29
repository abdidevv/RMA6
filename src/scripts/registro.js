document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registroForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido_paterno = document.getElementById('apellido_paterno').value;
        const apellido_materno = document.getElementById('apellido_materno').value;
        const correo = document.getElementById('email').value;
        const contraseña = document.getElementById('password').value;

        try {
            const response = await fetch('../pages/api/usuarios.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, apellido_paterno, apellido_materno, correo, contraseña }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error desconocido');
            }

            const result = await response.json();
            console.log('Usuario creado:', result);
            alert('Registro exitoso');

            // Opcional: Redirigir o limpiar el formulario
            document.getElementById('registroForm').reset();
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('Error al registrar: ' + error.message);
        }
    })
});