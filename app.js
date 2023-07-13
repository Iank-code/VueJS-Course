const vm = Vue.createApp({
  data() {
    return {
      firstname: "John",
      lastname: "Doe",
    };
  },
}).mount("#app");

setTimeout(() => {
  vm.$data.firstname = "Bob";
}, 2000);
