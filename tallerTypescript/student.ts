
export class Student {
    nombre: string;
    imagen: string
    codigo: number;
    cedula: number;
    edad: number;
    direccion: string;
    telefono: number;
  
    constructor(nombre: string, imagen : string,  codigo: number, cedula: number, edad: number,  direccion: string, telefono: number ) {
      this.nombre = nombre;
      this.codigo = codigo;
      this.cedula = cedula;
      this.edad = edad;
      this.direccion = direccion;
      this.telefono = telefono;
      this.imagen = imagen;
      
    }
  }