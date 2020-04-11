import { dataCourses } from './dataCourses.js';
import { dataStudents } from './dataStudents.js';
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
var inputSearchBoxInicial = document.getElementById("search-box-inicial");
var inputSearchBoxFinal = document.getElementById("search-box-final");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var estudianteTbody = document.getElementById('cuerpo-estudiante');
var nombreEstudiante = document.getElementById("nombre-estudiante");
var imagen = document.getElementById("imagen");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudents);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInTable(student) {
    console.log('Desplegando estudiante');
    nombreEstudiante.innerHTML = "" + student.nombre;
    imagen.src = "" + student.imagen;
    var codigo = document.createElement("tr");
    codigo.innerHTML = "<td> C\u00F3digo </td>\n                      <td>" + student.codigo + "</td>";
    estudianteTbody.appendChild(codigo);
    var cedula = document.createElement("tr");
    cedula.innerHTML = "<td> C\u00E9dula </td>\n                      <td>" + student.cedula + "</td>";
    estudianteTbody.appendChild(cedula);
    var edad = document.createElement("tr");
    edad.innerHTML = "<td> Edad </td>\n                      <td>" + student.edad + "</td>";
    estudianteTbody.appendChild(edad);
    var direccion = document.createElement("tr");
    direccion.innerHTML = "<td> Direcci\u00F3n </td>\n                      <td>" + student.direccion + "</td>";
    estudianteTbody.appendChild(direccion);
    var telefono = document.createElement("tr");
    telefono.innerHTML = "<td> Tel\u00E9fono </td>\n                      <td>" + student.telefono + "</td>";
    estudianteTbody.appendChild(telefono);
}
function applyFilterByCredits() {
    console.log("Filter by Credits");
    var inicial = parseInt(inputSearchBoxInicial.value);
    var final = parseInt(inputSearchBoxFinal.value);
    inicial = (inicial == NaN) ? 0 : inicial;
    final = (final == NaN) ? 0 : final;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(inicial, final, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByCredits(inicial, final, courses) {
    console.log("Filter by Credits");
    return (inicial == NaN || final == NaN) ? dataCourses : courses.filter(function (c) {
        return (c.credits >= inicial && c.credits <= final);
    });
}
function applyFilterByName() {
    console.log(" applyFilterByName");
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
