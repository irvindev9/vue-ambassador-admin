<template>
  <v-app>
    <Navbar :user="user" />
    <div class="container-fluid">
      <div class="row">
        <Menu />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="table-responsive">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Nav.vue"
import Menu from "@/components/Menu.vue"
// import Users from "./Users.vue"
import axios from "axios";
import { User } from "@/models/user";

export default {
  name: "Layout",
  data(){
    return {
      user: new User(),
    }
  },
  components: {
    Navbar,
    Menu,
    // Users
  }, 
  async mounted(){
    try{
      const { data } = await axios.get("user");

      this.user = data;
    } catch (e) {
      console.log(e);
      await this.$router.push("/login");
    }
    
  }
}
</script>