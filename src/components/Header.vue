<template>
  <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item >
          <router-link tag="nav" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/listaFavoritos">Lista de Favoritos</router-link>
        </b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/pesquisar">Pesquisar</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>