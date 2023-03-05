const btnContacto = document.getElementById('contacto')
const btnProyectos = document.getElementById('btnProyectos')
const proyectos = document.getElementById('proyectos')
const containerProyectos = document.getElementById('containerProyectos')
const cerrar = document.getElementById('btnCerrar')
const formContacto = document.getElementById('formContacto')
const educacion = document.getElementById('educacion')
const conocimientos = document.getElementById('conocimientos')
const btnRecargar = document.getElementById('btnRecargar')


// Tocar el boton "Proyectos" para desplegar los proyectos realizados (Momentaneamente hay solo 1) 
//cambiando la clase del css.
btnProyectos.addEventListener('click', (e)=>{
   proyectos.classList.add('open')
   containerProyectos.classList.add('open')
   containerProyectos.style.transform = 'translateY(0%)'
})

// Tocar el boton cerrar para quitar la clase de css y dar la ilusion de "cerrar"
cerrar.addEventListener('click', ()=>{
    console.log(2)
    containerProyectos.style.transform = 'translateY(-100%)'
    setTimeout(() => {
        proyectos.classList.remove('open');
        containerProyectos.classList.remove('open');
    }, 600);
})

//Boton para agregar un form mediante el inner.html 
btnContacto.addEventListener('click', ()=>{
    educacion.innerHTML = `  
    `
    conocimientos.innerHTML = ''

    btnProyectos.innerHTML = ''

    btnProyectos.classList.remove('btnProyectos')

    formContacto.innerHTML= `
    <h1>Contactame</h1>
                <label for="name">Nombre</label>
                <input type="text" id="name">
                <label for="email">Mail</label>
                <input type="email" name="" id="email">
                <label for="textarea">Mensaje</label>
                <textarea name="" id="" cols="15" rows="3"></textarea>
                <input class="formEnviar" type="submit" value="Enviar">
                
                `
    btnRecargar.innerHTML = '<h2 class="tituloProyectos">Volver</p>'
    btnRecargar.classList.add('btnProyectos')
})

//Permite tocar el boton volver y recargar la pagina para sacar el formulario.
btnRecargar.addEventListener('click', ()=>{
    location.reload()
})