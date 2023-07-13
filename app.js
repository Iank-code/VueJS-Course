const vm = Vue.createApp({
  data() {
    return {
      firstname: "John",
      lastname: "Doe",
      url: "https://google.com",
      raw_url: '<a href="http://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstname} ${this.lastname.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(event) {
      this.lastname = event.target.value;
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.$data.firstname = "Bob";
}, 2000);
