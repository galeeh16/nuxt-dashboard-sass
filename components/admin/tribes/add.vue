<template>
  <Teleport to="body"> 
    <div 
      class="modal fade"
      id="modalAddTribe"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header px-4">
            <h5 class="modal-title mb-0">Add Tribe</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body px-4 py-2 pb-4">
            <form method="post" @submit.prevent="submitHandler" spellcheck="false">
              <div class="mb-3">
                <label class="col-form-label">Kode Tribe</label>
                <input type="text" class="form-control" :class="{'is-invalid' : v$.kode_tribe.$errors.length > 0}" v-model.lazy="form.kode_tribe" />
                <div v-if="v$.kode_tribe.$errors.length > 0" class="text-danger mt-1">
                  {{ v$.kode_tribe.$errors[0].$message }}
                </div>
              </div>
              <div class="mb-3">
                <label class="col-form-label">Nama Tribe</label>
                <input type="text" class="form-control" :class="{'is-invalid' : v$.nama_tribe.$errors.length > 0}" v-model="form.nama_tribe" />
                <div v-if="v$.nama_tribe.$errors.length > 0" class="text-danger mt-1">
                  {{ v$.nama_tribe.$errors[0].$message }}
                </div>
              </div>
              <div class="mb-3">
                <label class="col-form-label">Ecosystem</label>
                <div class="w-100">
                  <Multiselect 
                    v-model="form.ecosystem_id" 
                    :class="{'is-invalid' : v$.ecosystem_id.$errors.length > 0}"
                    :options="dropdownEcosystem.ecosystems"
                    :close-on-select="true"
                    :searchable="true"
                    :canClear="false"
                    placeholder="Pilih Ecosystem"
                  ></Multiselect>
                </div>
                <div v-if="v$.ecosystem_id.$errors.length > 0" class="text-danger mt-1">
                  {{ v$.ecosystem_id.$errors[0].$message }}
                </div>
              </div>
              <div class="mb-4">
                <label class="col-form-label">Status Tribe</label>
                <div class="w-100">
                  <Multiselect 
                    v-model="form.status" 
                    :class="{'is-invalid' : v$.status.$errors.length > 0}"
                    :options="dropdownStatus.status"
                    :close-on-select="true"
                    :searchable="false"
                    :canClear="false"
                    placeholder="Pilih Status"
                  ></Multiselect>
                </div>
                <div v-if="v$.status.$errors.length > 0" class="text-danger mt-1">
                  {{ v$.status.$errors[0].$message }}
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <button type="button" data-bs-dismiss="modal" class="btn bg-soft-primary text-primary border-0 d-flex"><Icon type="x" /> Cancel</button>
                <button type="submit" class="btn btn-primary d-flex"><Icon type="send" /> Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import Multiselect from '@vueform/multiselect';
import useVuelidate from '@vuelidate/core';
import { required, minLength, maxLength, helpers } from '@vuelidate/validators';

const emit = defineEmits(['onSubmitForm']);
const config = useRuntimeConfig();

const dropdownStatus = useDropdownStatus();
const dropdownEcosystem = await useDropdownEcosystem();

let form = ref({
  kode_tribe: null,
  nama_tribe: null,
  status: null,
  ecosystem_id: null
});


const { withAsync, withMessage } = helpers;

// let debounce = ref(null);

const uniqueKodeTribe = async (value) => {
  // clearTimeout(debounce.value);

  if (value === null || value == '') return;

  const response = await fetch(`${config.public.apiUrl}/api/v1/admin/tribes/validate/kode_tribe/${value}`);
  const data = await response.json();
  if (data.data === true) {
    return true;
  }
  return false;
}


const rules = {
  kode_tribe: {
    required: withMessage('Harap isi kode tribe', required),
    uniqueKodeTribe: withMessage( 
      ({ $pending, $model }) => {
        return`Kode tribe ${ $model } sudah digunakan`;
      },
       withAsync(uniqueKodeTribe)
    ),
    $autoDirty: true,
  },
  nama_tribe: {
    required: withMessage('Harap isi nama tribe', required),
    minLength: withMessage(({ $params }) => `Nama tribe minimal ${$params.min} karakter`, minLength(3)),
    maxLength: withMessage(({ $params }) => `Nama tribe maksimal ${$params.max} karakter`, maxLength(30)),
    $autoDirty: true,
  },
  ecosystem_id: {
    required: withMessage('Harap pilih ekosistem', required),
    $autoDirty: true,
  },
  status: {
    required: withMessage('Harap pilih status', required),
    $autoDirty: true,
  }
};

const v$ = useVuelidate(rules, form);

const submitHandler = async () => {
  v$.value.$touch();    

  if (v$.value.$invalid) {
    return;
  }

  await emit('onSubmitForm', form.value);
}
</script>