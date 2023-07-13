const vm = Vue.createApp({
  data() {
    return {
      firstname: "John",
      lastname: "Doe",
      middlename: "",
      url: "https://google.com",
      raw_url: '<a href="http://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastname = event.target.value;
    },
    updateMiddleName(event) {
      this.middlename = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("full name method was called");
      return `${this.firstname} ${
        this.middlename
      } ${this.lastname.toUpperCase()}`;
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.$data.firstname = "Bob";
}, 2000);
