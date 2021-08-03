<template>
  <div>
    <div id="nav">
      <router-link to="/resolved">resolved</router-link> |
      <router-link to="/inProgress">inProgress</router-link> |
      <router-link to="/pending">Pending</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
}
#nav {
  margin-left: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
