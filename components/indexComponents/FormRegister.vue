<template>
  <!-- Formulario de registro -->
  <form>
    <div class="mb-3">
        <label 
          class="form-label"
        >
          Username
        </label>

        <input 
          type="text" 
          class="form-control" 
        />
        
      <div class="mb-3">
        <label 
          class="form-label"
        >
          Birthday
        </label>
        
        <input 
          type="date" 
          class="form-control" 
        />
      </div>

      <label 
        class="form-label"
      >
        Email address
      </label>
      <input
        type="email"
        class="form-control"
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
        class="form-label"
      >
        Password
      </label>
      
      <input 
        type="password" 
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label 
        class="form-label"
      >
        Confirm Password
      </label>
      <input 
        type="password" 
        class="form-control" 
      />
    </div>
    <div class="mb-3">
      <label 
        class="form-check-label" 
        for="exampleCheck1"
      >
        You have an account?
      </label>
        <nuxt-link 
          to="/" 
          class="btn btn-secundary"
        >
            Sign in
        </nuxt-link>
    </div>
    <nuxt-link 
      to="/"
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
  name: 'FormRegister'
}
</script>