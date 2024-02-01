<template>
    <b-container>
        <h1>Inicio</h1>
        <h6>Examen U1 DWP</h6>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'formulario' }">Formulario</b-link>
    </b-container>
</template>
  
<script>
    export default {
        data() {
            return {
                items: [
                    {
                        text: 'Inicio',
                        active: true
                    }
                ]
            }
        }
    }
</script>
  
<style scoped></style>