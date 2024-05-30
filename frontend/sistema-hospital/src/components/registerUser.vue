<template>
    <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Registro</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Nombre" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Primer apellido" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Segundo apellido" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Edad" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Fecha de nacimiento" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Correo electronico" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Telefono" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" placeholder="Contraseña" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" placeholder="Confirmar contraseña" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">Registrar</button>

        <a href="#" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>

        <p class="text-center text-lg">
            Ya tiene cuenta?
            <a href="/" class="font-medium text-indigo-500 underline-offset-4 hover:underline">Iniciar Sesion</a>
        </p>
    </section>
</main>

</template>