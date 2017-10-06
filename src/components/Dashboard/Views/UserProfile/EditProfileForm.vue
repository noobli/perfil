<template>
  <main role="main">
    <form>
      <div class="row">
        <div class="col-md-12 mb-3">
          <label for="nome" class="form-label">Nome</label>
          <input type="text" class="form-control" id="nome" placeholder="Como quer ser chamada?">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="peso" class="form-label">Peso</label>
          <input type="text" class="form-control" id="peso" required placeholder="Qual o seu peso atual?">
        </div>
        <div class="col-md-6 mb3">
          <label for="altura" class="form-label">Altura</label>
          <input type="text" class="form-control" id="altura" required placeholder="Qual sua altura atual?">
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mb-3">
          <label for="celular" class="form-label">Celular</label>
          <input type="text" class="form-control" id="celular" placeholder="Qual o celular de contato?">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Qual o email de contato?">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-3">
          <label for="sobre" class="form-label">Sobre</label>
          <textarea class="form-control" id="sobre" rows="6" minlength="10" placeholder="Escreva um pouco sobre você"></textarea>
        </div>
      </div>
      <div class="row justify-content-end text-right">
        <div class="col-md-12 mb-3">
          <button type="button" class="btn btn-success btn-lg">Atualizar Perfil</button>
        </div>
      </div>
    </form>
  </main>
</template>
<script>
export default {
  data () {
    return {
      user: {
        company: 'Paper Dashboard',
        username: 'michael23',
        email: '',
        lastName: 'Faker',
        address: 'Melbourne, Australia',
        city: 'melbourne',
        postalCode: '',
        aboutMe: `Oh so, your weak rhyme. You doubt I'll bother, reading into it.I'll probably won't, left to my own devicesBut that's the difference in our opinions.`
      }
    }
  },
  methods: {
    updateProfile () {
      alert('Your data: ' + JSON.stringify(this.user))
    }
  }
}
</script>
<style>
</style>
