<template>
  <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Admin</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.first_name}}</td>
        <td>{{user.last_name}}</td>
        <td>{{user.name}}</td>
        <td>{{user.is_admin}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data(){
    return {
      users: []
    }
  },
  async mounted() {
    const { data } = await axios.get("ambassador");

    this.users = data;
  }
}
</script>