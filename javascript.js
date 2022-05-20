function buscar(){
    event.preventDefault()
    var busqueda = document.getElementById("buscador").value;
    window.location.href = "https://www.google.com/search?q=" + busqueda;
}

