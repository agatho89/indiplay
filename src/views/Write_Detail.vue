<template>
  <div>
    <v-container>
      <v-row>
        <v-card class="mx-auto" max-width="800">
          <v-card-subtitle
            ><h1>{{ data.title }}</h1></v-card-subtitle
          >
          <div>
            <tabel>
              <tr>
                <td>{{ data.date }}</td>
                <td>조회수 10</td>
                <pre></pre>
                <td>
                  <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
                </td>
                <td>
                  <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn
                  >공유
                </td>
              </tr>
            </tabel>
          </div>
          <div align="right">
            <v-btn @click="updateData()">수정하기</v-btn>
            <v-btn @click="deleteData()">삭제하기</v-btn>
          </div>
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img src="./pkc.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>10CM</v-list-item-title>
              <v-row align="center" justify="end">
                <v-btn>구독</v-btn>
              </v-row>
            </v-list-item>
          </v-card-actions>
          {{ data.content }}
          <hr />
          <!--수평선-->
          <!--댓글-->
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img src="./user.png"></v-img>
            </v-list-item-avatar>
            <v-text-field label="댓글 쓰기" single-line></v-text-field>
          </v-list-item>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import data from "@/data";
export default {
  name: "Detail",
  data() {
    const index = this.$route.params.contentId;
    return {
      data: data[index],
      index: index
    };
  }
  /*method: {
     deleteData(){
       data.splice(this.index, 1)
       this.$router.push({
         path: '/Stream'
       })
     },
     updateData(){
       this.$router.push({
        name: '',
        params: {
          contentId: index
        }
      })
     }
  }*/
};
</script>
