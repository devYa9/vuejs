<template>
  <v-row class="background-style" height="400">
    <v-col
      cols="12"
      sm="6"
      md="3"
      class="pa-md-5 pa-2 d-flex align-center justify-center my-5"
      v-for="member in team"
      :key="member.name"
    >
      <TeamMemberCard
        :name="member.name"
        :title="member.title"
        :profile="member.profile"
        :desc="member.desc"
      />
    </v-col>
  </v-row>
</template>

<script>
import TeamMemberCard from "./TeamMemberCard.vue";
export default {
  components: { TeamMemberCard },
  data() {
    return {
      team: [
        {
          name: "Yassine El Aatmani",
          title: "Web Developer",
          profile: "1.jpg",
          desc: "Create reliable and high-performing web-based applications and services.",
        },
        {
          name: "Abedin Abed",
          title: "Creative Director",
          profile: "2.jpg",
          desc: "Building an environment for the creative team to work in and overseeing their ideas and projects",
        },
        {
          name: "Jabedin Jabed",
          title: "Project Manager",
          profile: "3.jpg",
          desc: "Select, lead and motivate your project team from both internal and external stakeholder organisations",
        },
        {
          name: "Moin Khan",
          title: "Art Director",
          profile: "4.jpg",
          desc: "work on the campaign from the outset, managing details about the client, product, target audience and required advertising message",
        },
      ],
    };
  },
};
</script>

<style scoped>
.background-style {
  background-color: transparent;
  background-image: radial-gradient(circle, #72727226 10%, transparent 10%),
    radial-gradient(circle, #72727226 10%, transparent 10%);
  background-position: 0 0, 50px 50px;
  background-size: 10px 10px;
  background-repeat: repeat;
}
</style>