<template>
    <v-card>
      <v-navigation-drawer permanent expand-on-hover app>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="user.avatar_url"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense v-for="(link, index) in links" :key="index">
          <v-list-item link :to="link.path">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{link.name}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    user: {},
    email: "khansharifulislam24@gmail.com",
    links: {
      1: {
        path: "/",
        icon: "mdi-home",
        name: "home",
      },
      2: {
        path: "about",
        icon: "mdi-account-check",
        name: "about"
      },
      3: {
        path: "services",
        icon: "mdi-briefcase ",
        name: "Services"
      },
      4: {
        path: "experience",
        icon: "mdi-layers-plus",
        name: "Experience"
      },
      5: {
        path: "works",
        icon: "mdi-school ",
        name: "Works"
      },
      6: {
        path: "contact",
        icon: "mdi-email",
        name: "Contact"
      },
    },
  }),
  // Fetches posts when the component is created.
  created() {
    axios
      .get("https://api.github.com/users/codersharif")
      .then((response) => {
        // JSON responses are automatically parsed.
        this.user = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>