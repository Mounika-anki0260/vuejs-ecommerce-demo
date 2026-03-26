<template>
  <div>
    <h2>Login / Register</h2>
    <form @submit.prevent="submit">
      <input v-model="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <div style="margin-top:8px"><button>Sign in</button></div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')
    function submit() { alert('Demo: no auth backend configured') }
    return { email, password, submit }
  }
})
</script>