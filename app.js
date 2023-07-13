const vm = Vue.createApp({
  data() {
    return {
      firstname: "John",
      lastname: "Doe",
    };
  },
  methods: {
    fullName() {
      return `${this.firstname} ${this.lastname.toUpperCase()}`;
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.$data.firstname = "Bob";
}, 2000);
