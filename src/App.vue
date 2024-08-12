<template>
  <nav>
    <router-link to="/contador">Ejercicio-1 Contador</router-link> |
    <router-link to="/about">Ejercicio-2 About</router-link> |
    <router-link to="/home">Ejercicio-2 Home</router-link> |
    <router-link to="/parentchild">Ejercicio-3 ParentChild</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
