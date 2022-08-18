<template>
  <div class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="col-md-12 ">
        <div class="card border mb-3 shadow-sm mt-3">
          <div class="card-header header-card">AJOUTER SOCIETE</div>
          <div class="card-body ">
            <form class="row g-3 needs-validation mt-3">
              <div class="col-md-4">
                <label for="validationCustom01" class="form-label"
                  >NOM:</label
                >
                <input type="text" class="form-control form-control-sm" @change="onChange($event)" />
              </div>

              <div>
                <hr />
              </div>
              <div class="col-md-12">
                <button class="btn btn-primary float-right" type="submit">
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios  from "axios";
import router from '@/router';
import AdminView from '@/views/AdminView.vue';
export default {
  name: 'LoginView',
  components: {
    AdminView
  },
  data () {
    return {
      email: '',
      password: '',
      failed: false
    }
  },

  methods:{
    onKey () {
      this.failed = false
    },
    

    submit () {
    axios.post('http://127.0.0.1:8000/api/login', {
    email: this.email
  })
  .then(function (response) {
    console.log(response.status)
       if (response.status = 201) {

                localStorage.email = email.value;
                localStorage.password = password.value;
                        console.log(localStorage.email);
                router.push({ name: 'admin' })
        }       
        
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }
}
</script>