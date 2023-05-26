export default (data) => {
    let errors = {};
    
    if(!data.email.includes('@')) {  // usas REGETS
        errors.e1 = 'Email no válido'
    }
    if(!data.email) {
        errors.e2 = 'Ingrese Email'
    }
    if(data.email.length > 35) {
        errors.e3 = 'El mail debe tener menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)) {
        errors.p1 = 'La contraseña debe tener al menos un número'
    }
    if(data.password.length < 6 || data.password.length > 10)  {
        errors.p2 = 'La contraseña debe tener entre 6 y 10 caracteres'
    }
    return errors;
};