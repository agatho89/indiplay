<template>
  <div>
    <v-container>
      <h1>Community</h1>
      <br />
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">날짜</th>
              <th class="text-left">제목</th>
              <th class="text-left">작성자</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(value, index) in data"
              :key="index"
              @click="detail(index)"
            >
              <td>{{ value.date }}</td>
              <td>{{ value.title }}</td>
              <td>{{ value.writer }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-btn @click="write()">글쓰기</v-btn>
      <br />
      <v-pagination v-model="page" :length="10"></v-pagination>
    </v-container>
  </div>
</template>
<script>
import data from "@/data";
export default {
  name: "Community",
  data() {
    return {
      data: data,
      headers: [
        { text: "날짜", value: "date" },
        { text: "제목", value: "title" },
        { text: "작성자", value: "writer" }
      ]
    };
  },
  methods: {
    write() {
      this.$router.push({
        path: "write"
      });
    },
    detail(index) {
      this.$router.push({
        name: "Write_Detail",
        params: {
          contentId: index
        }
      });
    }
  }
};
</script>
