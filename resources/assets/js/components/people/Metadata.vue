<style scoped>
</style>
<template>
  <div>
    <table v-for="metadata in Metadata" :key="metadata.id">
      <tr v-for="(value, key) in metadata">
        <td>{{key}}</td><td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

  props: {
    hash: {
      type: String,
      default: '',
    },
    metadata: {
      type: String,
      default: {},
    },
  },
    
  data() {
    return {
     Metadata: this.metadata
    };
  },

  mounted() {
    this.getMetadata();
  },

  methods: {

    getMetadata() {
      axios.get('people/' + this.hash + '/metadata')
        .then(response => {
          this.metadata = response.data;
        });
    },

  }
};
</script>