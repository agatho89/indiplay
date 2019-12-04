<template>
  <v-container grid-list-md fluid>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>Admin Page</v-toolbar-title>
        <v-autocomplete
          v-model="email"
          :loading="loadingSearch"
          :items="emails"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Search User Email"
          solo-inverted
          clearable
        ></v-autocomplete>
        <v-btn icon @click="list" :disabled="loading">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-data-iterator
          :items="items"
          :options.sync="options"
          :server-items-length="totalCount"
          :items-per-page="4"
          :loading="loading"
        >
          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.email"
                cols="12"
                sm="6"
                md="4"
                lg="6"
              >
                <user-card :item="item" @del="list"></user-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import _ from "lodash";
import UserCard from "@/components/userCard";
export default {
  components: { UserCard },
  data() {
    return {
      headers: [
        {
          text: "user key",
          value: "uid"
        },
        { text: "email", value: "email" },
        { text: "name", value: "displayName" },
        { text: "photoURL", value: "photoURL" },
        { text: "level", value: "level" }
      ],
      items: [],
      totalCount: 0,
      loading: false,
      options: {
        sortBy: ["email"],
        sortDesc: [false]
      },
      search: "",
      emails: [],
      email: null,
      loadingSearch: false
    };
  },
  watch: {
    options: {
      handler() {
        this.list();
      },
      deep: true
    },
    search(val) {
      val && val !== this.select && this.searchEmails(val);
    },
    email(n, o) {
      if (n !== o) this.list();
    }
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
    async list() {
      this.loading = true;
      const r = await this.$axios.get("/admin/users", {
        params: {
          offset:
            this.options.page > 0
              ? (this.options.page - 1) * this.options.itemsPerPage
              : 0,
          limit: this.options.itemsPerPage,
          order: this.options.sortBy[0],
          sort: this.options.sortDesc[0] ? "desc" : "asc",
          search: this.email
        }
      });
      this.totalCount = r.data.totalCount;
      this.items = r.data.items;
      this.loading = false;
    },
    searchEmails: _.debounce(function() {
      this.loadingSearch = true;

      this.$axios
        .get("/admin/search", {
          params: { search: this.search }
        })
        .then(({ data }) => {
          this.emails = data;
        })
        .catch(e => {
          this.$toasted.global.error(e.message);
        })
        .finally(() => {
          this.loadingSearch = false;
        });
    }, 500)
  }
};
</script>
