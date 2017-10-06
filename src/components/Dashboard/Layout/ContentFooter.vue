<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="pull-left">
        <ul>
          <li>
            <router-link :to="{path:'/admin'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright pull-right">
        &copy; Feito com
        <i class="fa fa-heart heart"></i> no
        <a href="#" target="_blank">Vale do Carbono</a>
        por <a href="#" target="_blank">Fuja da Rotina</a>.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>

</style>
