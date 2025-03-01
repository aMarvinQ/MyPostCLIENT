<!-- ruta anidada inicial del index, mostrando la página de loggeo -->
<template>
    <div>
        <h2>Login</h2>
        <FormLogin />
    </div>
</template>

<script>
import FormLogin from '../../components/indexComponents/FormLogin.vue';

export default {
    components: {
        FormLogin
    }
}
</script>   