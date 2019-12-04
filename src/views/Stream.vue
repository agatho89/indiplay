<template>
  <div>
    <v-container>
      <h1>Stream</h1>
      <br />
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">날짜</th>
              <th class="text-left">곡명</th>
              <th class="text-left">아티스트</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(value, index) in data"
              :key="index"
              @click="detail(index)"
            >
              <td>{{ value.date }}</td>
              <td>{{ value.musicname }}</td>
              <td>{{ value.artist }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-btn @click="write()">UPLOAD</v-btn>
      <br />
      <v-pagination v-model="page" :length="10"></v-pagination>
    </v-container>
  </div>
</template>
<script>
import data from "@/data";
import MainPlayer from "./../components/MainPlayer";
export default {
  name: "Stream",
  components: [MainPlayer],
  data() {
    return {
      data: data,
      headers: [
        { text: "날짜", value: "date" },
        { text: "곡명", value: "musicname" },
        { text: "아티스트", value: "artist" }
      ]
    };
  },
  methods: {
    write() {
      this.$router.push({
        path: "upload"
      });
    },
    detail(index) {
      this.$router.push({
        name: "Detail",
        params: {
          contentId: index
        }
      });
    }
  }
};
</script>
