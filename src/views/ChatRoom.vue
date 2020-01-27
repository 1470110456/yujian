<template>
    <div>
      <ul class='rooom'>
        <li class='message' v-for='message in messages' :key="message[0]"></li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  }
}
</script>

<style scoped>

</style>
