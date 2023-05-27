<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()





</script>
<style lang="scss">
:root{
    --auto-size: calc(1vw + 1vh);
    --main-color: #080F09;
    --block-color: #182C1B;
    --green-light: #;
    --radius: 15px;
    --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  

::-webkit-scrollbar {
  width: 6px;
  height: 6px;

}

::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0) inset;
  background-color: #111;
  position: absolute;

}

::-webkit-scrollbar-thumb {
  background-color: hsl(0, 0%, 21%);
  background-image: -webkit-gradient(linear, 0 0, 0 100%,
  color-stop(.5, transparent), to(transparent));
  border-radius: 15%;
  position: absolute;

}
::-webkit-scrollbar-thumb:hover {
  background-color: hsl(0, 0%, 20%);
  transition: .3s;
}

</style>