        <template>
                <div class="text-center">
                                <div class="container mt-5">
                                        <div class="row justify-content-center">
                                                <div class="col-sm-6 col-md-4 col-md-offset-4">
                                                        <div class="account-wall">
                                                        <h1 class="text-center login-title">LOGIN</h1>
                                                                <form @submit.prevent="submit">
                                                                        <input id="email" class="m-t-2" v-model="email" type="email" placeholder="E-mail" name="email" required autocomplete="email" autofocus>

                                                                        <input id="password" class="m-t-2" v-model="password" type="password" placeholder="Mot de passe" name="password" required
                                                                        autocomplete="current-password">

                                                                        <button class="btn btn-lg btn-primary btn-block" type="submit">
                                                                        Login</button>
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
import about from '@/views/AboutView.vue'

export default {
  name: 'LoginView',
  components: {
    about
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
    email: this.email,
    password: this.password
  })
  .then(function (response) {
    console.log(response.status)
       if (response.status = 201) {

                localStorage.email = email.value;
                localStorage.password = password.value;
                        console.log(localStorage.email);
                router.push({ name: 'about' })
        }       
        
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }

}
</script>