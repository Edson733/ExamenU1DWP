<template>
    <b-container>
        <h1>Paginación</h1>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <div class="overflow-auto">
            <b-table
                id="my-table"
                :items="elementos"
                :per-page="perPage"
                :current-page="currentPage"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                label-sort-asc=""
                label-sort-desc=""
                small
            ></b-table>

            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>

            <p class="mt-3">Current Page: {{ currentPage }}</p>
        </div>
    </b-container>
</template>

<script>
    import vehiculoService from "../service/Vehicle";

    export default {
        data() {
            return {
                items: [
                    {
                        text: 'Inicio',
                        to: 'inicio'
                    },
                    {
                        text: 'Formulario',
                        to: 'formulario'
                    },
                    {
                        text: 'Paginacion',
                        active: true
                    }
                ],
                sortBy: "marca",
                sortDesc: false,
                perPage: 3,
                currentPage: 1,
                elementos: [],
                fields: [
                    { key: "id", label: "Id", sortable: true },
                    { key: "brand", label: "Marca", sortable: true },
                    { key: "model", label: "Modelo", sortable: true },
                    { key: "year", label: "Año de Fabricacion", sortable: true },
                    { key: "serie", label: "Numero de Serie", sortable: true }
                ],
            }
        },
        computed: {
            rows() {
                return this.elementos.length
            }
        },
        mounted() {
            this.obtenerVehiculos();
        },
        methods: {
            async obtenerVehiculos() {
                try {
                    const data = await vehiculoService.obtenerVehiculosPaginados(
                        parseInt(this.currentPage),
                        parseInt(this.perPage),
                        this.sortBy
                    );
                    this.elementos = data.content;
                } catch (error) {
                    console.error(error);
                }
            },
        },
    }
</script>

<style></style>