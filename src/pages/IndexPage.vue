<template>
  <q-page class="column flex-center">
    <q-knob
      v-model="count"
      :min="min"
      :max="max"
      size="80px"
      show-value
      :thickness="0.3"
      color="primary"
      track-color="dark"
    >
      <q-avatar size="75px"> 
        <img alt="Quasar logo" src="~assets/quasar-logo-inner.svg" />
      </q-avatar>
    </q-knob>

    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 140px"
    />

    <div class="q-mt-xl">
      <q-btn
        color="primary"
        dense
        round
        label="-"
        :disable="count === min"
        @click="count--"
      />

      <span class="q-mx-md text-bold">{{ count }}</span>

      <q-btn
        color="primary"
        dense
        round
        label="+"
        :disable="count === max"
        @click="count++"
      />
    </div>

    <div class="q-mt-md" style="width: 200px">
      <q-slider v-model="count" :min="min" :max="max" />
    </div>


      <q-btn
        color="primary"
        dense
        round
        label="bK --"
        @click="test_backEnd()"
      />



  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const count = ref(0);

const min = -5;
const max = 5;

//  

function test_backEnd() {
  // 

  // axios.get('https://connproj-michael1.b4a.run/more')
  axios.get('http://localhost:3000/query')
  .then(function (response) {
    // handle success
    alert(response.data);
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}




</script>
