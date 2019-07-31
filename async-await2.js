//Ejemplo de como funciona Async/Away
let empleados = [{
    id:1,
    nombre:'Isaac'
},{
    id:2,
    nombre:'Jorge'
},{
    id:3,
    nombre:'Gabriela'
}];

let salarios=[{
    id:1,
    salario:1000
},{
    id:2,
    salario:2000
}];

//Funcion 
let getEmpleado=async(id)=>{
    let empleadoDB=empleados.find(empleado=>empleado.id===id)

    //Validar lo que devuelve
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el id ${id}`);
    }else{
        return empleadoDB;
    }
}

let getSalario=async(empleado)=>{
    let salarioDB=salarios.find(salario=>salario.id===empleado.id)

    //Validar lo que devuelve
    if(!salarioDB){
        throw new Error(`No existe un salario para el empleado  ${empleado.nombre}`);
    }else{
        return {
            nombre:empleado.nombre,
            salario:salarioDB.salario,
            id:empleado.id
        }
    }
}

let getInformacion=async(id)=>{
    let empleado=await getEmpleado(id);
    let resp=await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}`;


}
    getInformacion(1)
    .then(mensaje=>console.log(mensaje))
    .catch(err=>console.log(err));