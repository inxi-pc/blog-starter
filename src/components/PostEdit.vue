<template>
  <div>
      <h1>Post edit</h1>
      <div class="editor">
          <div>
            <label>id: <input type="text"></label>
          </div>
          <div>
           <label>content: <textarea></textarea></label>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PostEdit',
  props: [
    'id'
  ],
  created() {
    console.log(this.id);
  },
  data () {
    return {
      
    }
  },
  methods: {
    save() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  float: left;
}
.editor {
    width: 100%;
    float: left;
}
</style>
