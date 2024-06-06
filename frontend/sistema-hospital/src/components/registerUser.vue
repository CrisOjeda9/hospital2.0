<template>
    <div class="min-h-screen bg-lime-200 flex flex-col justify-center py-5 sm:px-6 lg:px-8 px-6">
        
        <div class="flex  rounded-lg shadow-lg overflow-hidden mx-100 ">
            <div class="w-full p-8 lg:w-1/2">
                <Person></Person>
                <RouterLink to="">
                    <button class="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-500">Crear Cuenta</button>
                </RouterLink>
            </div>
            <div class="w-full p-8 lg:w-1/2">
                <User></User>
                <RouterLink to="">
                    <button class="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-500">Crear Cuenta</button>
                </RouterLink>
                <RouterLink to="/">
                    <button class="bg-red-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-500">Cancelar</button>
                </RouterLink>
            </div>  
        </div>
       
                
     
    </div>

</template>
<script>
import Person from './personas.vue'
import User from './usuarios.vue'

export default{
    components:{
        Person,
        User
    }
}
</script>