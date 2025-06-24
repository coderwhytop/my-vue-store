<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <A />
  </div>
</template>

<script>
import A from "@/components/Sync/A.vue"
import axios from "axios"
export default {
  name: "HelloWorld",
  components: {
    A
  },
  props: {
    msg: String
  },
  mounted() {
    axios.get("https://ydpms.yslpms.com").then((res) => {
      console.log(res.statusText, "res")
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
