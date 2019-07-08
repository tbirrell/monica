<style scoped>
</style>
<template>
</template>

<script>
export default {

  props: {
    hash: {
      type: String,
      default: '',
    },
  },
    
  data() {
    return {
     
    };
  },

  methods: {

    getMetadata() {
      axios.get('people/' + this.hash + '/metadata')
        .then(response => {
          this.metadata = response.data.data;
        });
    },

  }
};
</script>