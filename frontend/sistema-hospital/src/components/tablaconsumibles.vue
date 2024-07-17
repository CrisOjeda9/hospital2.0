<template>
    <div class="min-h-screen bg-gray-200 bg-opacity-100 flex-col justify-center py-5 sm:px-6 lg:px-8 px-6 bg-repeat">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Consumibles
            </h2>
        </div>
        <div class="mt-6">
            <a href="/consumibles"
                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Agregar +
            </a>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Descripción
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tipo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Departamento
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cantidad en existencia
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Detalle
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fecha de registro
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fecha de actualización
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Estatus
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Observaciones
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Espacio médico
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in consumibles" :key="item.id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ item.nombre }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.descripcion }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.tipo }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.departamento }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.cantidad_existencia }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.detalle }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.fecha_registro }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.fecha_actualizacion }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.estatus }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.observaciones }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.espacio_medico }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" @click="editItem(item)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="isEditing" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-bold mb-4">Editar Consumible</h2>
                <form @submit.prevent="updateItem">
                    <div class="mb-4">
                        <label class="block text-gray-700">Nombre:</label>
                        <input v-model="currentItem.nombre" type="text" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Descripción:</label>
                        <input v-model="currentItem.descripcion" type="text" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Tipo:</label>
                        <input v-model="currentItem.tipo" type="text" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Departamento:</label>
                        <input v-model="currentItem.departamento" type="text" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Cantidad en existencia:</label>
                        <input v-model="currentItem.cantidad_existencia" type="number" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Detalle:</label>
                        <input v-model="currentItem.detalle" type="text" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Fecha de registro:</label>
                        <input v-model="currentItem.fecha_registro" type="date" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Fecha de actualización:</label>
                        <input v-model="currentItem.fecha_actualizacion" type="date" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Estatus:</label>
                        <input v-model="currentItem.estatus" type="text" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Observaciones:</label>
                        <input v-model="currentItem.observaciones" type="text" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Espacio médico:</label>
                        <input v-model="currentItem.espacio_medico" type="text" class="w-full px-3 py-2 border rounded">
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="isEditing = false" class="px-4 py-2 bg-gray-400 text-white rounded mr-2">Cancelar</button>
                        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            consumibles: [
                // Datos de ejemplo, reemplaza con tus datos
                {
                    id: 1,
                    nombre: 'Apple MacBook Pro 17"',
                    descripcion: 'Descripción del producto',
                    tipo: 'Laptop',
                    departamento: 'Departamento de TI',
                    cantidad_existencia: 10,
                    detalle: 'Detalle del producto',
                    fecha_registro: '2024-07-01',
                    fecha_actualizacion: '2024-07-10',
                    estatus: 'Activo',
                    observaciones: 'Ninguna',
                    espacio_medico: 'Almacén principal'
                }
                // Agrega más objetos según sea necesario
            ],
            isEditing: false,
            currentItem: null
        };
    },
    methods: {
        editItem(item) {
            this.currentItem = { ...item }; // Clonar el item para evitar modificaciones directas
            this.isEditing = true;
        },
        updateItem() {
            const index = this.consumibles.findIndex(i => i.id === this.currentItem.id);
            if (index !== -1) {
                this.$set(this.consumibles, index, this.currentItem);
            }
            this.isEditing = false;
            this.currentItem = null;
        }
    }
};
</script>

<style>
/* Agrega estilos según sea necesario */
</style>
