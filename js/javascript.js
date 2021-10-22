function generarCampos() {

    //Creamos el elemento tabla
    let tabla1 = document.createElement("table")

    //Configuramos atributos de la tabla
    tabla1.setAttribute("align", "center")

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

    //Añadimos los tr creado a la tabla
    tabla1.appendChild(tr1)
    tabla1.appendChild(tr2)
    tabla1.appendChild(tr3)
    tabla1.appendChild(tr4)
    tabla1.appendChild(tr5)

    //Añadimos la tabla al divUnico
    divUnico.appendChild(tabla1)
    
}

function generarRadio() {

    //Creamos el elemento tabla
    let tabla2 = document.createElement("table")

    //Configuramos atributos de la tabla
    tabla2.setAttribute("align", "center")

    /**------------------------------------------------------ */

    //Creamos el elemento tr
    let tr6 = document.createElement("tr")

    //Creamos el elemento label (Estado civil)
    let td11 = document.createElement("td")
    let label1 = document.createElement("label")
    let txt6 = document.createTextNode("Estado civil: ")
    label1.setAttribute("for", "estadoCivil")

    //Creamos las opciones a elegir
    let td12 = document.createElement("td")

    //Creamos la opcion SOLTERO
    let input6 = document.createElement("input")
    let txt7 = document.createTextNode("Soltero")
    let br1 = document.createElement("br")
    input6.setAttribute("type", "radio")
    input6.setAttribute("name", "estadoCivil")
    input6.setAttribute("value", "S")

    //Creamos la opcion CASADO
    let input7 = document.createElement("input")
    let txt8 = document.createTextNode("Casado")
    let br2 = document.createElement("br")
    input7.setAttribute("type", "radio")
    input7.setAttribute("name", "estadoCivil")
    input7.setAttribute("value", "C")

    //Creamos la opcion DIVORCIADO
    let input8 = document.createElement("input")
    let txt9 = document.createTextNode("Divorciado")
    let br3 = document.createElement("br")
    input8.setAttribute("type", "radio")
    input8.setAttribute("name", "estadoCivil")
    input8.setAttribute("value", "D")

    //Creamos la opcion VIUDO
    let input9 = document.createElement("input")
    let txt10 = document.createTextNode("Viudo")
    let br4 = document.createElement("br")
    input9.setAttribute("type", "radio")
    input9.setAttribute("name", "estadoCivil")
    input9.setAttribute("value", "V")


    //Añadimos el elemento label (Estado civil) al td
    label1.appendChild(txt6)
    td11.appendChild(label1)

    //Añadimos la opcion SOLTERO al td
    td12.appendChild(br1)
    td12.appendChild(input6)
    td12.appendChild(txt7)

    //Añadimos la opcion CASADO al td
    td12.appendChild(br2)
    td12.appendChild(input7)
    td12.appendChild(txt8)

    //Añadimos la opcion DIVORCIADO al td
    td12.appendChild(br3)
    td12.appendChild(input8)
    td12.appendChild(txt9)

    //Añadimos la opcion VIUDO al td
    td12.appendChild(br4)
    td12.appendChild(input9)
    td12.appendChild(txt10)

    //Añadimos los 2 td al tr
    tr6.appendChild(td11)
    tr6.appendChild(td12)

    /**------------------------------------------------------ */

    //Creamos el elemento tr
    let tr7 = document.createElement("tr")

    //Creamos el elemento label (Hijos)
    let td13 = document.createElement("td")
    let label2 = document.createElement("label")
    let txt11 = document.createTextNode("Hijos: ")
    label2.setAttribute("for", "hijos")

    //Creamos las opciones a elegir
    let td14 = document.createElement("td")

    //Creamos la opcion NINGUNO
    let input10 = document.createElement("input")
    let txt12 = document.createTextNode("Ninguno")
    let br5 = document.createElement("br")
    input10.setAttribute("type", "radio")
    input10.setAttribute("name", "hijos")
    input10.setAttribute("value", "N")

    //Creamos la opcion UNO
    let input11 = document.createElement("input")
    let txt13 = document.createTextNode("Uno")
    let br6 = document.createElement("br")
    input11.setAttribute("type", "radio")
    input11.setAttribute("name", "hijos")
    input11.setAttribute("value", "U")

    //Creamos la opcion DOS
    let input12 = document.createElement("input")
    let txt14 = document.createTextNode("Dos")
    let br7 = document.createElement("br")
    input12.setAttribute("type", "radio")
    input12.setAttribute("name", "hijos")
    input12.setAttribute("value", "D")

    //Creamos la opcion MAS DE DOS
    let input13 = document.createElement("input")
    let txt15 = document.createTextNode("Mas de dos")
    let br8 = document.createElement("br")
    input13.setAttribute("type", "radio")
    input13.setAttribute("name", "hijos")
    input13.setAttribute("value", "M")

    //Añadimos el elemento label (Hijos) al td
    label2.appendChild(txt11)
    td13.appendChild(label2)

    //Añadimos la opcion NINGUNO al td
    td14.appendChild(br5)
    td14.appendChild(input10)
    td14.appendChild(txt12)

    //Añadimos la opcion UNO al td
    td14.appendChild(br6)
    td14.appendChild(input11)
    td14.appendChild(txt13)

    //Añadimos la opcion DOS al td
    td14.appendChild(br7)
    td14.appendChild(input12)
    td14.appendChild(txt14)

    //Añadimos la opcion MAS DE DOS al td
    td14.appendChild(br8)
    td14.appendChild(input13)
    td14.appendChild(txt15)

    //Añadimos los 2 td al tr
    tr7.appendChild(td13)
    tr7.appendChild(td14)

    //Añadimos los 2 tr a la tabla
    tabla2.appendChild(tr6)
    tabla2.appendChild(tr7)

    //Al divUnico añadimos la tabla
    divUnico.appendChild(tabla2)

}

function generarCheckbox() {

}

function generarSelect() {

}

function generarText() {

}

function vaciarSelect() {

}