const app = Vue.createApp({
  // we can create any data, functions here
  //   template: "<h2>I am the template</h2>",
  data() {
    return {
      showBooks: true,
      title: "The final empire!",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  // for the example without an argument
  // methods: {
  //   changeTitle() {
  //     this.title = "Jungle book";
  //   },
  // },

  // for the example with an argument
  // methods: {
  //   changeTitle(title) {
  //     this.title = title;
  //   },
  // },
  methods: {
    toggleShowBooks() {
      // we set it to inverse each time (what it currently isn't)
      // so when its true we can set it to false, and vice versa
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
