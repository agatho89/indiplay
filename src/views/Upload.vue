<template>
  <div>
    <v-container>
      <h1>Upload</h1>
      <v-text-field v-model="artist" label="아티스트명" outlined></v-text-field>
      <v-text-field v-model="musicname" label="곡명" outlined></v-text-field>
      <v-textarea
        v-model="content"
        label="내용"
        outlined
        no-resize
        rows="10"
        width="300,"
        height="200"
      ></v-textarea>
      <v-file-input label="Audio File input" accept="audio/*"></v-file-input>
      <v-btn x-large color="success" dark @click="write()">UPLOAD</v-btn>
    </v-container>
  </div>
</template>
<script>
import data from "@/data";
export default {
  name: "Upload",
  data() {
    return {
      data: data,
      artist: "",
      musicname: "",
      content: ""
    };
  },
  methods: {
    write() {
      this.data.push({
        artist: this.artist,
        musicname: this.musicname,
        content: this.content
      });
      this.$router.push({
        path: "/stream"
      });
    }
  }
};
</script>
