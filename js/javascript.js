function generarCampos() {

    //Creamos el elemento tabla
    let tabla = document.createElement("table")

    //Configuramos atributos de la tabla
    tabla.setAttribute("align", "center")

    //Creamos el input del DNI
    let tr1 = document.createElement("tr")
    
    let td1 = document.createElement("td")
    let txt1 = document.createTextNode("DNI: ")
    
    let td2 = document.createElement("td")

    let input1 = document.createElement("input")
    input1.setAttribute("type", "text")
    input1.setAttribute("name", "dni")
    input1.setAttribute("id", "dni")
    input1.setAttribute("placeholder", "dni")

    td1.appendChild(txt1)
    td2.appendChild(input1)
    tr1.appendChild(td1)
    tr1.appendChild(td2)

    //Creamos el input del NOMBRE
    let tr2 = document.createElement("tr")
    
    let td3 = document.createElement("td")
    let txt2 = document.createTextNode("NOMBRE: ")
    
    let td4 = document.createElement("td")

    let input2 = document.createElement("input")
    input2.setAttribute("type", "text")
    input2.setAttribute("name", "dni")
    input2.setAttribute("id", "dni")
    input2.setAttribute("placeholder", "nombre")

    td3.appendChild(txt2)
    td4.appendChild(input2)
    tr2.appendChild(td3)
    tr2.appendChild(td4)

    //Creamos el input para los APELLIDOS
    let tr3 = document.createElement("tr")
    
    let td5 = document.createElement("td")
    let txt3 = document.createTextNode("APELLIDOS: ")
    
    let td6 = document.createElement("td")

    let input3 = document.createElement("input")
    input3.setAttribute("type", "text")
    input3.setAttribute("name", "dni")
    input3.setAttribute("id", "dni")
    input3.setAttribute("placeholder", "apellidos")

    td5.appendChild(txt3)
    td6.appendChild(input3)
    tr3.appendChild(td5)
    tr3.appendChild(td6)

    //Creamos el input para la DIRECCION
    let tr4 = document.createElement("tr")
    
    let td7 = document.createElement("td")
    let txt4 = document.createTextNode("DIRECCION: ")
    
    let td8 = document.createElement("td")

    let input4 = document.createElement("input")
    input4.setAttribute("type", "text")
    input4.setAttribute("name", "dni")
    input4.setAttribute("id", "dni")
    input4.setAttribute("placeholder", "direccion")

    td7.appendChild(txt4)
    td8.appendChild(input4)
    tr4.appendChild(td7)
    tr4.appendChild(td8)

    //Creamos el input para el TELEFONO
    let tr5 = document.createElement("tr")
    
    let td9 = document.createElement("td")
    let txt5 = document.createTextNode("TELEFONO: ")
    
    let td10 = document.createElement("td")

    let input5 = document.createElement("input")
    input5.setAttribute("type", "text")
    input5.setAttribute("name", "dni")
    input5.setAttribute("id", "dni")
    input5.setAttribute("placeholder", "telefono")

    td9.appendChild(txt5)
    td10.appendChild(input5)
    tr5.appendChild(td9)
    tr5.appendChild(td10)


    tabla.appendChild(tr1)
    tabla.appendChild(tr2)
    tabla.appendChild(tr3)
    tabla.appendChild(tr4)
    tabla.appendChild(tr5)

    //Añadimos la tabla al divUnico
    divUnico.appendChild(tabla)
    
}

function generarRadio() {

}

function generarCheckbox() {

}

function generarSelect() {

}

function generarText() {

}

function vaciarSelect() {

}