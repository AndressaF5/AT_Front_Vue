<template>
  <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item >
          <router-link tag="nav" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/listaFavoritos">Lista de Favoritos</router-link>
        </b-nav-item>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button @click="realizarPesquisa()" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style>
</style>
