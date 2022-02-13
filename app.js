const app = Vue.createApp({
  // we can create any data, functions here
  //   template: "<h2>I am the template</h2>",
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      // the below is need for the first few examples
      // title: "The final empire!",
      // author: "Brandon Sanderson",
      // age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/pizza.png",
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/pizza2.png",
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/pizza3.png",
        },
      ],
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
