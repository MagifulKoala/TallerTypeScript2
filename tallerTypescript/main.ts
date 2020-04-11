
import { Course } from './course.js';
import { dataCourses } from './dataCourses.js';
import { Student } from './student.js';
import { dataStudents} from './dataStudents.js'; 

let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


const inputSearchBoxInicial: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-inicial")!;
const inputSearchBoxFinal: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-final")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;


const estudianteTbody: HTMLElement = document.getElementById('cuerpo-estudiante'  )!;

const nombreEstudiante: HTMLElement = document.getElementById("nombre-estudiante")!;
const imagen: HTMLImageElement = <HTMLImageElement> document.getElementById("imagen")!;




btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCredits();

renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudents); 

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}


function renderStudentInTable(student: Student): void {
    
    console.log('Desplegando estudiante');

    nombreEstudiante.innerHTML = `${student.nombre}`; 
    imagen.src = `${student.imagen}`;


    let codigo = document.createElement("tr");
    codigo.innerHTML = `<td> Código </td>
                      <td>${student.codigo}</td>`;
    estudianteTbody.appendChild(codigo);

    let cedula = document.createElement("tr");
    cedula.innerHTML = `<td> Cédula </td>
                      <td>${student.cedula}</td>`;
    estudianteTbody.appendChild(cedula);

    let edad = document.createElement("tr");
    edad.innerHTML = `<td> Edad </td>
                      <td>${student.edad}</td>`;
    estudianteTbody.appendChild(edad);
    

    let direccion = document.createElement("tr");
    direccion.innerHTML = `<td> Dirección </td>
                      <td>${student.direccion}</td>`;
    estudianteTbody.appendChild(direccion);

  let telefono = document.createElement("tr");
  telefono.innerHTML = `<td> Teléfono </td>
                      <td>${student.telefono}</td>`;
    estudianteTbody.appendChild(telefono);

    
  }
 
function applyFilterByCredits() { 
    console.log("Filter by Credits")

    let inicial  = parseInt( inputSearchBoxInicial.value);
    let final = parseInt( inputSearchBoxFinal.value);

    inicial = (inicial == NaN) ? 0 : inicial;
    final = (final == NaN) ? 0 : final;

    clearCoursesInTable();

    let coursesFiltered: Course[] = searchCourseByCredits(inicial,final, dataCourses);
    renderCoursesInTable(coursesFiltered);
  }
 
  function searchCourseByCredits(inicial: number, final: number, courses: Course[]) {
    console.log("Filter by Credits")
    return (inicial ==  NaN || final == NaN) ? dataCourses : courses.filter( c => 
      (c.credits >= inicial && c.credits <= final) );
  }


function applyFilterByName() { 
    console.log(" applyFilterByName"); 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}