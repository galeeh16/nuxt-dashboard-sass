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
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('closeModal')"></button>
          </div>
          <div class="modal-body px-4 py-2 pb-4">
            <form method="post" @submit.prevent="submitHandler" spellcheck="false">
              <div class="mb-3">
                <label class="col-form-label">Kode Tribe</label>
                <input type="text" class="form-control" v-model="form.kode_tribe" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Nama Tribe</label>
                <input type="text" class="form-control" v-model="form.nama_tribe" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Ecosystem</label>
                <div class="w-100">
                  <Multiselect 
                    v-model="form.ecosystem" 
                    :options="dropdownEcosystem.ecosystems"
                    :close-on-select="true"
                    :searchable="true"
                    :canClear="false"
                    placeholder="Pilih Ecosystem"
                  ></Multiselect>
                </div>
              </div>
              <div class="mb-4">
                <label class="col-form-label">Status Tribe</label>
                <div class="w-100">
                  <Multiselect 
                    v-model="form.status_tribe" 
                    :options="dropdownStatus.status"
                    :close-on-select="true"
                    :searchable="false"
                    :canClear="false"
                    placeholder="Pilih Status"
                  ></Multiselect>
                </div>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Submit</button>
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

const emit = defineEmits(['onSubmitForm']);

const dropdownStatus = useDropdownStatus();
const dropdownEcosystem = await useDropdownEcosystem();
console.log(dropdownEcosystem.ecosystems.value)

let form = ref({
  kode_tribe: null,
  nama_tribe: null,
  status_tribe: null,
  ecosystem: null
});

const submitHandler = () => {
  emit('onSubmitForm', form.value);
}
</script>