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

    //A??adimos los tr creado a la tabla
    tabla1.appendChild(tr1)
    tabla1.appendChild(tr2)
    tabla1.appendChild(tr3)
    tabla1.appendChild(tr4)
    tabla1.appendChild(tr5)

    //A??adimos la tabla al divUnico
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


    //A??adimos el elemento label (Estado civil) al td
    label1.appendChild(txt6)
    td11.appendChild(label1)

    //A??adimos la opcion SOLTERO al td
    td12.appendChild(br1)
    td12.appendChild(input6)
    td12.appendChild(txt7)

    //A??adimos la opcion CASADO al td
    td12.appendChild(br2)
    td12.appendChild(input7)
    td12.appendChild(txt8)

    //A??adimos la opcion DIVORCIADO al td
    td12.appendChild(br3)
    td12.appendChild(input8)
    td12.appendChild(txt9)

    //A??adimos la opcion VIUDO al td
    td12.appendChild(br4)
    td12.appendChild(input9)
    td12.appendChild(txt10)

    //A??adimos los 2 td al tr
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

    //A??adimos el elemento label (Hijos) al td
    label2.appendChild(txt11)
    td13.appendChild(label2)

    //A??adimos la opcion NINGUNO al td
    td14.appendChild(br5)
    td14.appendChild(input10)
    td14.appendChild(txt12)

    //A??adimos la opcion UNO al td
    td14.appendChild(br6)
    td14.appendChild(input11)
    td14.appendChild(txt13)

    //A??adimos la opcion DOS al td
    td14.appendChild(br7)
    td14.appendChild(input12)
    td14.appendChild(txt14)

    //A??adimos la opcion MAS DE DOS al td
    td14.appendChild(br8)
    td14.appendChild(input13)
    td14.appendChild(txt15)

    //A??adimos los 2 td al tr
    tr7.appendChild(td13)
    tr7.appendChild(td14)

    /**------------------------------------------------------ */

    //A??adimos los 2 tr a la tabla
    tabla2.appendChild(tr6)
    tabla2.appendChild(tr7)

    //Al divUnico a??adimos la tabla
    divUnico.appendChild(tabla2)

}

function generarCheckbox() {

    //Creamos el elemntos tabla
    let tabla3 = document.createElement("table")

    //Configuramos los parametros del elemento tabla
    tabla3.setAttribute("align", "center")

    //Creamos el elemento tr
    let tr8 = document.createElement("tr")

    //Creamos el elemento td
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")

    //Creamos el elemento label
    let label13 = document.createElement("label")
    label13.setAttribute("for", "hobbies")
    let txt16 = document.createTextNode("Hobbies: ")

    //Creamos los elementos br
    let br9 = document.createElement("br")
    let br10 = document.createElement("br")
    let br11 = document.createElement("br")
    let br12 = document.createElement("br")
    let br13 = document.createElement("br")

    //Creamos los elementos input
    let input14 = document.createElement("input")
    let input15 = document.createElement("input")
    let input16 = document.createElement("input")
    let input17 = document.createElement("input")
    let input18 = document.createElement("input")

    //Configuramos los atributos de los elementos input
    input14.setAttribute("type", "checkbox")
    input14.setAttribute("name", "hobbies")
    input14.setAttribute("value", "M")
    input15.setAttribute("type", "checkbox")
    input15.setAttribute("name", "hobbies")
    input15.setAttribute("value", "L")
    input16.setAttribute("type", "checkbox")
    input16.setAttribute("name", "hobbies")
    input16.setAttribute("value", "D")
    input17.setAttribute("type", "checkbox")
    input17.setAttribute("name", "hobbies")
    input17.setAttribute("value", "V")
    input18.setAttribute("type", "checkbox")
    input18.setAttribute("name", "hobbies")
    input18.setAttribute("value", "C")

    //Creamos los textos para los elementos input
    let txt17 = document.createTextNode("Musica")
    let txt18 = document.createTextNode("Lectura")
    let txt19 = document.createTextNode("Deportes")
    let txt20 = document.createTextNode("Videojuegos")
    let txt21 = document.createTextNode("Cocina")

    //Creamos la estructura

    label13.appendChild(txt16)
    td15.appendChild(label13)

    td16.appendChild(br9)
    td16.appendChild(input14)
    td16.appendChild(txt17)

    td16.appendChild(br10)
    td16.appendChild(input15)
    td16.appendChild(txt18)

    td16.appendChild(br11)
    td16.appendChild(input16)
    td16.appendChild(txt19)

    td16.appendChild(br12)
    td16.appendChild(input17)
    td16.appendChild(txt20)

    td16.appendChild(br13)
    td16.appendChild(input18)
    td16.appendChild(txt21)

    tr8.appendChild(td15)
    tr8.appendChild(td16)

    tabla3.appendChild(tr8)

    divUnico.appendChild(tabla3)

}

function generarImagen() {

    //Creamos el elemento tabla y configuramos atributos
    let tabla4 = document.createElement("table")
    tabla4.setAttribute("align", "center")

    //Creamos los elementos tr
    let tr9 = document.createElement("tr")
    let tr10 = document.createElement("tr")

    //Creamos los elementos td
    let td17 = document.createElement("td")
    let td18 = document.createElement("td")

    //Creamos los elementos img
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")

    //Configuramos atributos de los elementos img
    img1.setAttribute("src", "img/rectangular.png")
    img1.setAttribute("alt", "Forma rectangular")
    img1.setAttribute("title", "Forma rectangular")

    img2.setAttribute("src", "img/hexagonal.jpg")
    img2.setAttribute("alt", "Cristal hexagonal")
    img2.setAttribute("title", "Cristal hexagonal")

    //Creamos la estructura
    td17.appendChild(img1)
    tr9.appendChild(td17)

    td18.appendChild(img2)
    tr10.appendChild(td18)

    tabla4.appendChild(tr9)
    tabla4.appendChild(tr10)

    divUnico.appendChild(tabla4)

}

function generarSelect() {

    //Creamos el elemnto tabla y configuramos atributos
    let tabla5 = document.createElement("table")
    tabla5.setAttribute("align", "center")

    //Creamos el elemento tr
    let tr11 = document.createElement("tr")

    //Creamos los elementos td
    let td19 = document.createElement("td")
    let td20 = document.createElement("td")

    //Creamos el elemento texto
    let txt22 = document.createTextNode("Ciudad: ")
    let txt23 = document.createTextNode("Madrid")
    let txt24 = document.createTextNode("Valencia")
    let txt25 = document.createTextNode("Barcelona")
    let txt26 = document.createTextNode("Salamanca")
    let txt27 = document.createTextNode("Sevilla")

    //Creamos el elemento select
    let select1 = document.createElement("select")

    //Creamos los elemntos option
    let option1 = document.createElement("option")
    let option2 = document.createElement("option")
    let option3 = document.createElement("option")
    let option4 = document.createElement("option")
    let option5 = document.createElement("option")

    //Creamos la estructura
    td19.appendChild(txt22)

    option1.appendChild(txt23)
    option2.appendChild(txt24)
    option3.appendChild(txt25)
    option4.appendChild(txt26)
    option5.appendChild(txt27)

    select1.appendChild(option1)
    select1.appendChild(option2)
    select1.appendChild(option3)
    select1.appendChild(option4)
    select1.appendChild(option5)

    td20.appendChild(select1)

    tr11.appendChild(td19)
    tr11.appendChild(td20)

    tabla5.appendChild(tr11)

    divUnico.appendChild(tabla5)

}

function generarText() {

    //Creamos el elemento table y configuramos sus atributos
    let tabla6 = document.createElement("table")
    tabla6.setAttribute("align", "center")

    //Creamos el elemento tr
    let tr12 = document.createElement("tr")

    //Creamos los elemntos td
    let td21 = document.createElement("td")
    let td22 = document.createElement("td")

    //Creamos el elemento text
    let txt28 = document.createTextNode("Observaciones: ")

    //Creamos el elemnto textarea y configuramos sus atributos
    let textarea1 = document.createElement("textarea")
    textarea1.setAttribute("name", "observaciones")
    textarea1.setAttribute("id", "observaciones")
    textarea1.setAttribute("placeholder", "Escriba sus observaciones aqui.")

    //Creamos la estructura
    td21.appendChild(txt28)
    td22.appendChild(textarea1)

    tr12.appendChild(td21)
    tr12.appendChild(td22)

    tabla6.appendChild(tr12)

    divUnico.appendChild(tabla6)

}