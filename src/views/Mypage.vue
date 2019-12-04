<template>
  <div>
    <h1>마이페이지</h1>
    <p>{{ $store.state.claims }}</p>
    {{ $store.state.claims.level }}
    <v-container>
      <v-row>
        <v-card width="1200" outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile size="80" color="grey"
              ><v-img src="./user.png"></v-img
            ></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1"
                >회원명</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn>사진수정</v-btn>
          </v-card-actions>
          <v-tabs fixed-tabs background-color="indigo" dark v-model="tab">
            <v-tab>곡</v-tab>
            <v-tab>업로드</v-tab>
            <v-tab>좋아요</v-tab>
            <v-tab>구독</v-tab>
          </v-tabs>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
