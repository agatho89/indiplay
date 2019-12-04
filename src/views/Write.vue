<template>
  <div>
    <v-container>
      <h1>Write</h1>
      <v-text-field v-model="writer" label="작성자" outlined></v-text-field>
      <v-text-field v-model="title" label="제목" outlined></v-text-field>
      <v-textarea
        v-model="content"
        label="내용"
        outlined
        no-resize
        rows="10"
        width="300,"
        height="200"
      ></v-textarea>
      <v-file-input label="Image File input" accept="image/*"></v-file-input>
      <v-btn x-large color="success" dark @click="write()">작성</v-btn>
    </v-container>
  </div>
</template>
<script>
import data from "@/data";
export default {
  name: "Write",
  data() {
    return {
      data: data,
      writer: "",
      title: "",
      content: ""
    };
  },
  methods: {
    write() {
      this.data.push({
        writer: this.writer,
        title: this.title,
        content: this.content
      });
      this.$router.push({
        path: "/community"
      });
    }
  }
};
</script>
