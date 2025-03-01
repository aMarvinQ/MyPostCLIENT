<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <h1 class="navbar-brand">MyPost</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'posts' }"
              class="nav-link"
              aria-current="page"
              active-class="active"
              >Home</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'account' }"
              class="nav-link"
              aria-current="page"
              active-class="active"
              >My account</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'users' }"
              class="nav-link"
              aria-current="page"
              active-class="active"
              >Users</nuxt-link
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search Post"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
// exportación a layouts
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.active {
  border-bottom: 2px solid blue;
}
</style>