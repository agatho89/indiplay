<template>
  <v-card :loading="loading">
    <div class="d-flex flex-no-wrap justify-center">
      <v-avatar class="ma-3" size="150" tile>
        <v-img :src="item.photoURL | imgCheck"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="headline mb-2" v-text="item.email"></v-card-title>
        <v-card-subtitle>{{ item.displayName | nameCheck }}</v-card-subtitle>
        <v-card-subtitle>
          <v-select
            v-model="item.level"
            :items="levels"
            solo
            hide-details
            @change="levelChange(item)"
          ></v-select>
        </v-card-subtitle>
        <div class="float-right mb-3">
          <v-dialog v-model="dialog" max-width="290">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on">Kick/Ban User</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"
                >Do you really want to ban a member?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">Disagree</v-btn>
                <v-btn color="error" text @click="kick">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      loading: false,
      levels: [
        { value: 0, text: "admin" },
        { value: 1, text: "level 1" },
        { value: 2, text: "level 2" }
      ],
      dialog: false
    };
  },
  filters: {
    nameCheck(v) {
      if (v) return v;
      return "no name";
    },
    imgCheck(v) {
      if (v) return v;
      return "http://saltlifetherapy.ie/wp-content/uploads/2018/11/no-photo-1.png";
    }
  },
  methods: {
    levelChange(v) {
      this.loading = true;
      this.$axios
        .patch(`/admin/user/${v.uid}/level`, {
          level: v.level
        })
        .catch(e => {
          this.$toasted.global.error(e.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async kick() {
      await this.$axios.delete(`/admin/user/${this.item.uid}`);
      this.dialog = false;
      await this.$emit("del");
    }
  }
};
</script>
