<template>
  <!-- 이미지 슬라이드 -->
  <v-container>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- 뮤직 -->
    <v-layout wrap>
      <h2 class="font-weight-bold mt-5">
        Music
      </h2>
      <v-container class="text-center">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(music, i) in musics">
            <v-col :key="i" cols="12" md="4">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-img :src="music.img" height="225px">
                    <v-card-title class="title white--text">
                      <v-row
                        class="fill-height flex-column"
                        justify="space-between"
                      >
                        <p class="mt-4 subheading text-left">
                          {{ music.title }}
                        </p>

                        <div>
                          <p
                            class="ma-0 body-1 font-weight-bold font-italic text-left"
                          >
                            {{ music.text }}
                          </p>
                          <p
                            class="caption font-weight-medium font-italic text-left"
                          >
                            {{ music.subtext }}
                          </p>
                        </div>

                        <div class="align-self-center">
                          <v-btn
                            v-for="(icon, index) in icons"
                            :key="index"
                            :class="{ 'show-btns': hover }"
                            color="transparent"
                            icon
                          >
                            <v-icon
                              :class="{ 'show-btns': hover }"
                              color="transparent"
                            >
                              {{ icon }}
                            </v-icon>
                          </v-btn>
                        </div>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
      <!-- 콘서트 -->
      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">Concert</h2>
      </v-flex>
      <!-- 게시판 -->
      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Community</h2>
      </v-flex>
      <!-- 탑텐 -->
      <v-flex xs12>
        <h2 class="headline font-weight-bold mb-3">Top 10</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://farm1.static.flickr.com/856/41970006350_c64a7a5b40_b.jpg"
        },
        {
          src:
            "https://file.mk.co.kr/meet/neds/2017/04/image_readtop_2017_280221_14931013172860907.jpg"
        },
        {
          src: "https://t1.daumcdn.net/cfile/tistory/2224A73357BA9CAE1E"
        },
        {
          src:
            "https://www.mcst.go.kr/attachFiles/cultureInfoCourt/localFestival/notifyFestival/1556760934178.jpg"
        }
      ],
      icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
      musics: [
        {
          title: "New Releases",
          text: "It's New Release Friday",
          subtext: "Newly released songs. Updated daily.",
          img: "http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg"
        },
        {
          title: "Rock",
          text: "Greatest Rock Hits",
          subtext: "Lose yourself in rock tunes.",
          img:
            "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        },
        {
          title: "Mellow Moods",
          text: "Ambient Bass",
          subtext: "Chill beats to mellow you out.",
          img: ""
        }
      ],
      tops: [
        {
          src: "backgrounds/bg.jpg"
        },
        {
          src: "backgrounds/md.jpg"
        },
        {
          src: "backgrounds/bg-2.jpg"
        },
        {
          src: "backgrounds/md2.jpg"
        },
        {
          src: "backgrounds/bg.jpg"
        },
        {
          src: "backgrounds/md.jpg"
        },
        {
          src: "backgrounds/bg-2.jpg"
        },
        {
          src: "backgrounds/md2.jpg"
        },
        {
          src: "backgrounds/bg-2.jpg"
        },
        {
          src: "backgrounds/md2.jpg"
        }
      ],
      selected: []
    };
  }
};
</script>
