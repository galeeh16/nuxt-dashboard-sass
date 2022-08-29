<template>
  <div id="wrapper-login" class="d-flex">
    <Spinner :show="showSpinner" />
    <div class="left">
      <div class="login">
        <h2 class="mb-5 fw-semibold">Forgot Password</h2>

        <div v-if="errMsg">
          <div class="alert alert-danger d-flex text-danger">
            <Icon type="alert-triangle" class="me-2"/> {{ errMsg }}
          </div>
        </div>

        <form method="post" @submit.prevent="doForgotPassword" spellcheck="false">
          <div class="mb-4">
            <label for="email" class="fw-semibold mb-1">Email</label>
            <input type="text" name="email" class="form-control px-3 py-2" maxlength="70" v-model="form.email" tabindex="1" />
          </div>
          <div class="mb-4">
            <button type="submit" class="btn btn-primary w-100 py-2">Send</button>
          </div>
        </form>

        <div class="mt-5 text-center">
          <p>Doesn't have account? <NuxtLink href="/register" class="text-decoration-none">Register</NuxtLink></p>
        </div>
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Icon from '@/components/icon/index.vue';

definePageMeta({
  layout: "blank",
});

useHead({
  title: 'Login'
})

let isHidden = ref(true);

let showSpinner = ref(false);

let form = ref({
  email: null
});

let errMsg = ref(null);

const config = useRuntimeConfig();
const router = useRouter();

const doForgotPassword = async () => {
  try {
      
  } catch (err) {
      if(err.response) {
          if (err.response.status == 401) {
              errMsg.value = err.response.data.message;
          }
      }
  } 
}

</script>

<style scoped lang="scss">
  #wrapper-login {
      background: #fff;
      height: 100vh;
      max-height: 100vh;
      position: relative;
      
      @media only screen and (min-width: 1080px) {
          .left {
              flex: 1;
              width: 100%;
              max-width: 600px;
              position: relative;
              padding: 140px 3.2rem;

              .login {
                  // // position: absolute;
                  // background: #eee;
                  margin: 0 3rem;
                  // top: 50%;
                  // left: 50%;
                  // -webkit-transform: translate(-50%, -50%);
                  // transform: translate(-50%, -50%);
              }
              
          }
      }

      .right {
          flex: 1;
          width: 100%;
          background: linear-gradient(45deg, #f4bbff, #daecff);
      }
  }

  .eye-login {
      top: 12px; 
      right: 13px; 
      color: #a4b1bc; 
      cursor: pointer;
  }
</style>