<template>
    <div class="min-h-screen bg-lime-200 flex flex-col justify-center py-5 sm:px-6 lg:px-8 px-6">
         <div class="sm:mx-auto sm:w-full sm:max-w-md">
             <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow">
             <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                 Medicamentos
             </h2>
         </div>
 
 
         <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
             <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                 <form>
                    <div>
                         <label for="codigo" class="block text-sm font-medium leading-5  text-gray-700">Codigo</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <input id="name" name="name" type="number" required value=""
                                 class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
 
                         </div>
                     </div>
                     <div>
                         <label for="generico" class="block text-sm font-medium leading-5  text-gray-700">Nombre Generico</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <input id="name" name="name" type="text" required value=""
                                 class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
 
                         </div>
                     </div>
                     <div>
                         <label for="comercial" class="block text-sm font-medium leading-5  text-gray-700">Nombre Comerial</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <input id="primer_apellido" name="name" type="text" required value=""
                                 class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
 
                         </div>
                     </div>
                     <div>
                         <label for="presentacion" class="block text-sm font-medium leading-5 text-gray-700">Tipo de presentacion</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <select id="genero" name="genero" required
                                 class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                 <option value="" disabled selected>Selecciona tipo</option>
                                 <option value="comprimidos">Comprimidos</option>
                                 <option value="grageas">Grageas</option>
                                 <option value="capsulas">Cápsulas</option>
                                 <option value="jarabes">Jarabes</option>
                                 <option value="gotas">Gotas</option>
                                 <option value="solucion">Solución</option>
                                 <option value="pomada">Pomada</option>
                                 <option value="jabon">Jabon</option>
                                 <option value="supositorios">Supositorios</option>
                                 <option value="viales">Viales</option>
                                 <option value="suspension">Suspensión</option>
                                 <option value="polvo">Polvo</option>
                                 
                                 <!-- Agrega más opciones según tus necesidades -->
                             </select>
                         </div>
                     </div>
                     <div>
                         <label for="via" class="block text-sm font-medium leading-5 text-gray-700">Via Administrativa</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <select id="genero" name="genero" required
                                 class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                 <option value="" disabled selected>Selecciona via</option>
                                 <option value="oral">Oral</option>
                                 <option value="intravenoso">Intravenoso</option>
                                 <option value="rectal">Rectal</option>
                                 <option value="cutaneo">Cutáneo</option>
                                 <option value="subcutaneo">Subcutáneo</option>
                                 <option value="oftalmica">Oftálmica</option>
                                 <option value="otica">Ótica</option>
                                 <option value="nasal">Nasal</option>
                                 <option value="topica">Tópica</option>
                                 <option value="parental">Parental</option>
                                 
                                 <!-- Agrega más opciones según tus necesidades -->
                             </select>
                         </div>
                     </div>
                     <div>
                         <label for="cantidad" class="block text-sm font-medium leading-5  text-gray-700">Cantidad</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <input id="primer_apellido" name="name" type="number" required value=""
                                 class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
 
                         </div>
                     </div>
                     <div>
                         <label for="costo" class="block text-sm font-medium leading-5  text-gray-700">Precio costo</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <input id="primer_apellido" name="name" type="number" required value=""
                                 class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
 
                         </div>
                     </div>
                     <div>
                         <label for="venta" class="block text-sm font-medium leading-5  text-gray-700">Precio venta</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <input id="primer_apellido" name="name" type="number" required value=""
                                 class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
 
                         </div>
                     </div>
                     <div>
                         <label for="estatus" class="block text-sm font-medium leading-5 text-gray-700">Estatus</label>
                         <div class="mt-1 relative rounded-md shadow-sm">
                             <select id="genero" name="genero" required
                                 class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                 <option value="" disabled selected>Selecciona estatus</option>
                                 <option value="disponible">Disponible</option>
                                 <option value="no_disponible">No disponible</option>
                               
                                 
                                 <!-- Agrega más opciones según tus necesidades -->
                             </select>
                         </div>
                     </div>
 
                     
                    
                     <div class="mt-6">
                         <span class="block w-full rounded-md shadow-sm">
 
                             <a href="/"
                             class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                 Crear
                             </a>
                          
                         </span>
                     </div>
                 </form>
 
             </div>
         </div>
     </div>
 </template>