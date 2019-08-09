<style scoped>
</style>
<template>
  <div>
    <div class="flex justify-start flex-row">
      <div class="col-12 col-sm-6 section"  v-for="(data, title) in metadata" :key="metadata.id">
        <div class="col-12 section-title">
          <h3>{{title}}<!-- <span class="fr btn" @click="editData(title)">Edit</span> --></h3>
          <ul>
            <li v-for="(value, key, index) in data" :key="data[index]">
              <span><input class="col-4" type="text" :value="key" @input="e => key = ed(e, title, key)"><input class="col-8" type="text" v-model="data[key]"></span>
            </li>
            <li>
              <span><input class="col-4" type="text" v-model="title.newKey"><input class="col-8" type="text" v-model="title.newValue"></span>
            </li>
            <li><button @click="newItem(title)">New {{title}}</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
      metadata: {}
    };
  },

  mounted() {
    this.getMetadata();
  },

  methods: {
    ed(e, title, oldKey) {
      let newKey = e.target.value;
      delete Object.assign(this.metadata[title], {[newKey]: this.metadata[title][oldKey] })[oldKey];
      return newKey;
    },
    getMetadata() {
      axios.get('people/' + this.hash + '/metadata')
        .then(response => {
          this.metadata = response.data/*.map(function(list) {
            Vue.set(list, 'newKey', '')
            return list;
          })*/;
        });
    },
    addIngredient() {
        this.ingredients.push({
            amount: {
                quantity: this.newAmount,
                unit: this.newUnit
            },
            ingredient: this.newIngredient
        });
        this.newAmount = '';
        this.newIngredient = '';
    },
    newItem(title) {
      console.log(this.metadata[title]);
      Vue.set( this.metadata[title], 'key', 'value' )
            // delete Object.assign(target, {[newKey]: target[oldKey] })[oldKey];
    },
    editData(title) {
      console.log(title);
      console.log(this);
      //figure out how to identify and flip inputs/text
    }

  }
};
</script>