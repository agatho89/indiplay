<template>
  <v-btn outlined @click="signInWithGoogle">Sign In</v-btn>
</template>

<script>
export default {
  methods: {
    async signInWithGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().languageCode = "ko";
      await this.$firebase.auth().signInWithPopup(provider);
      const user = this.$firebase.auth().currentUser;
      await user.getIdToken();
      await this.$store.dispatch("getUser", user);
      if (this.$store.state.claims.level == null) location.reload();
      this.$router.push("/");
    }
  }
};
</script>
