<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
      Company name
    </a>
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <router-link class="nav-link px-3" href="#">
          {{ user.first_name }} {{ user.last_name }}
        </router-link>
        <a class="nav-link px-3" href="#" @click="logout">Sign out</a>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
export default {
  name: "Nav",
  props: ["user"],
  methods: {
    async logout() {
      await axios.post("logout");

      await this.$router.push("/");
    }
  }
};
</script>
