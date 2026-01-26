const user = { nombre: "Pedro", email: "pedro@email.com" };

// Si 'rol' no viene en el objeto, toma el valor "invitado"
const mostrarPerfil = ({ nombre, email, rol = "invitado" }) => {
    return `Usuario: ${nombre} | Email: ${email} | Rol: ${rol}`;
};

console.log(mostrarPerfil(user));