<template>
    <div id="wrapper-login" class="d-flex">
        <div class="left">
            <div class="login">
                <!-- <div class="d-flex justify-content-start">
                    <Logo style="width: 50px; margin-bottom: 20px;" />
                </div> -->

                <h2 class="mb-5 fw-semibold">Register to App</h2>

                <form method="post" @submit.prevent="doRegister" spellcheck="false">
                    <div class="mb-4">
                        <label class="fw-semibold mb-1">Email</label>
                        <input type="text" name="email" class="form-control px-3 py-2" :class="[v$.email.$errors.length > 0 ? 'is-invalid' : '']" maxlength="70" v-model="form.email" tabindex="1" />
                        <div v-if="v$.email.$errors.length > 0" class="text-danger mt-1">
                            {{ v$.email.$errors[0].$message }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="fw-semibold mb-1">Name</label>
                        <input type="text" name="name" class="form-control px-3 py-2" :class="[v$.email.$errors.length > 0 ? 'is-invalid' : '']" maxlength="70" v-model="form.name" tabindex="2" />
                        <div v-if="v$.name.$errors.length > 0" class="text-danger mt-1">
                            {{ v$.name.$errors[0].$message }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="fw-semibold mb-1">Password</label>
                        <div class="position-relative">
                            <input type="password" name="password" tabindex="3" v-model="form.password" :class="[v$.email.$errors.length > 0 ? 'is-invalid' : '']" class="form-control px-3 py-2 pe-5" maxlength="40" />
                            <div v-if="v$.password.$errors.length > 0" class="text-danger mt-1">
                                {{ v$.password.$errors[0].$message }}
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="password" class="fw-semibold mb-1">Confirm Password</label>
                        <div class="position-relative">
                            <input type="password" name="password" tabindex="4" v-model.lazy="form.confirmPassword" class="form-control px-3 py-2 pe-5" :class="[v$.email.$errors.length > 0 ? 'is-invalid' : '']" maxlength="40" />
                            <div v-if="v$.confirmPassword.$errors.length > 0" class="text-danger mt-1">
                                {{ v$.confirmPassword.$errors[0].$message }}
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <button type="submit" class="btn btn-primary w-100 py-2">Register</button>
                    </div>
                </form>

                <div class="mt-5 text-center">
                    <p>Already have account? <NuxtLink href="/login" class="text-decoration-none">Login</NuxtLink></p>
                </div>
            </div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, requiredIf, email, helpers, minLength, maxLength, numeric } from '@vuelidate/validators';

definePageMeta({
  layout: "blank",
});

let form = ref({
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
});

const router = useRouter();

const mustSameWithPassword = (value) => value === form.value.password;

const rules = {
    email: {
        required: helpers.withMessage('Email cannot be blank', required),
        email: helpers.withMessage('Email are invalid', email),
        $autoDirty: true,
    },
    name: {
        required: helpers.withMessage('Name cannot be blank', required),
        $autoDirty: true,
    },
    password: {
        required: helpers.withMessage('Password cannot be blank', required),
        $autoDirty: true,
    },
    confirmPassword: {
        required: helpers.withMessage('Password confirmation cannot be blank', required),
        mustSameWithPassword: helpers.withMessage('Password confirmation are invalid', mustSameWithPassword),
        $autoDirty: true,
        // $lazy: true
    }
}

const v$ = useVuelidate(rules, form);

const doRegister = () => {
    v$.value.$touch();      
    if(v$.value.$invalid) {
        return;
    };

    // post data ke backend

    router.push({ path: '/login' })
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
                padding: 120px 3.2rem;

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
        top: 8px; 
        right: 13px; 
        color: #a4b1bc; 
        cursor: pointer;
    }
</style>
