<template>
    <b-container>
        <h1>Formulario</h1>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'paginacion' }">Paginacion</b-link><br>
        <div class="py-5 px-5">
            <b-card>
                <b-form @submit.prevent="validarForm" action="" method="post" novalidate>
                    <p v-if="errors.length">
                        <b>{{ errors.length > 1 ? "Por favor corrige los siguientes errores: " : "Por favor corrige el siguiente error: " }}</b>
                        <ul>
                            <li v-for="error in errors" :key="error.index">{{ error }}</li>
                        </ul>
                    </p>
                    <b-form-group id="marca-group" label="Marca:" label-for="marca" :state="marca ? null : false">
                        <b-form-input id="marca" v-model="marca" type="text" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="modelo-group" class="mt-3" label="Modelo:" label-for="modelo" :state="modelo ? null : false">
                        <b-form-input id="modelo" v-model="modelo" type="text" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="fabricacion-group" class="mt-3" label="Año de Fabricacion:" label-for="fabricacion" :state="fabricacion ? null : false">
                        <b-form-datepicker id="fabricacion" v-model="fabricacion" type="date" name="fabricacion" class="mb-2" required></b-form-datepicker>
                    </b-form-group>
                    <b-form-group id="serie-group" class="mt-3" label="Numero de Serie:" label-for="serie">
                        <b-form-input id="serie" v-model="serie"></b-form-input>
                    </b-form-group>
                    <b-button class="mt-3" type="submit" variant="outline-success">Enviar</b-button>
                </b-form>
            </b-card>
        </div>
    </b-container>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend ({
        data() {
            return {
                errors: [],
                marca: null,
                modelo: null,
                fabricacion: null,
                serie: null,
                items: [
                    {
                        text: 'Inicio',
                        to: 'inicio'
                    },
                    {
                        text: 'Formulario',
                        active: true
                    }
                ]
            }
        },
        methods: {
            validarForm: function(e) {
                this.errors = [];

                if (!this.marca) {
                    this.errors.push("La marca es obligatoria.");
                }

                if (!this.modelo) {
                    this.errors.push("El modelo es obligatorio.");
                }

                if (!this.fabricacion) {
                    this.errors.push("El Año de Fabricacion es obligatoria.");
                    } else {
                    const fechaFabricacion = new Date(this.fabricacion);
                    if (fechaFabricacion > Date.now()) {
                        this.errors.push("El Año de Fabricacion no puede ser mayor al año actual.");
                    }
                }

                if (!this.serie) {
                    this.errors.push("El numero de serie es obligatorio.");
                }

                if (!this.errors.length) {
                    return true;
                }

                e.preventDefault();
            },
        }
    });
</script>

<style></style>