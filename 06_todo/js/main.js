window.onload = () => {
    // Obtenemos la referencia del formulario
    const form =  document.getElementById('todo-form');
    // Reemplazamos la función que tenia form con este onsubmit
    form.onsubmit = (e) => {
        // Prevenir que el formulario refresque la pagina
        e.preventDefault();
        // Vamos al campo de todo
        const todo = document.getElementById('todo');
        // Obtenemos el valor que este tiene
        const todoText = todo.value;
        // Reemplazamos su valor con cadena vacia
        todo.value = '';
        // Imprimimos el valor en consola
        console.log(todoText);
    }
}