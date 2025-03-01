<template>
  <!-- Formulario de inicio de sesión -->
  <form>
    <div class="mb-3">
      <label 
        for="exampleInputEmail1" 
        class="form-label"
      >
        Email address
      </label>

      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />

      <div 
        id="emailHelp" 
        class="form-text"
      >
        We'll never share your email with anyone else.
      </div>
    </div>

    <div class="mb-3">
      <label 
        for="exampleInputPassword1" 
        class="form-label"
      >
        Password
      </label>

      <input 
        type="password" 
        class="form-control" 
        id="exampleInputPassword1" />
    </div>
    <div class="mb-3">
      <label 
        class="form-check-label" 
        for="exampleCheck1"
      >
        Don't have an account?
      </label>

      <nuxt-link 
        to="/register" 
        class="btn btn-secundary"
      > 
        Sign Up 
      </nuxt-link>
    </div>
    
    <nuxt-link 
      to="/posts"
      type="submit" 
      class="btn btn-primary"
    >
      Submit
    </nuxt-link>
  </form>
</template>

<script>
// exportación hacía las rutas anidadas de index
export default {
  name: 'FormLogin',
}
</script>
