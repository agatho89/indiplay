<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs12>
        <v-toolbar color="primary">
          axios
        </v-toolbar>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>
            create
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textCreate" rows="10"> </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="create">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>
            read
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textCreate" rows="10"> </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="read">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>
            update
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textCreate" rows="10"> </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="update">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>
            delete
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textCreate" rows="10"> </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="del">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      textCreate: ""
    };
  },
  methods: {
    create() {
      this.$axios.post("/").then(r);
    },
    read() {},
    update() {},
    del() {}
  }
};
</script>
