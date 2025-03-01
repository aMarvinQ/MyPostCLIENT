<!-- página anidada mostrando formulario de registro -->
<template>
    <div class="align-self-center">
        <h2>Register</h2>
        <FormRegister />
    </div>
</template>

<script>
import FormRegister from '~/components/indexComponents/FormRegister.vue';

export default {
    components: {
        FormRegister
    }
}
</script>