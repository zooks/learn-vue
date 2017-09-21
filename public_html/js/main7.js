Vue.component('task', {

  template: '<li><slot></slot></li>',

  data() {
    return {
      tasks: [
        { description: 'go to the store', completed: true },
        { description: 'finish screencast', completed: false },
        { description: 'make donation', completed: false },
        { description: 'clear inbox', completed: false },
        { description: 'make dinner', completed: false },
        { description: 'clean room', completed: true }
      ]
    };
  }

});

Vue.component('shop-item', {

  template: '<article><slot></slot> {{ item }}</article>',

  data() {
    return {
      item: 't-shirt'
    };
  }

});


var app = new Vue({
  el: '#root',
  data: {
    tasks: [
      { description: 'go to the store', completed: true },
      { description: 'finish screencast', completed: false },
      { description: 'make donation', completed: false },
      { description: 'clear inbox', completed: false },
      { description: 'make dinner', completed: false },
      { description: 'clean room', completed: true }
    ]
  },
  computed: {
    incompleteTasks() {
      return this.tasks.filter(task => ! task.completed);
    }
    
  },

  methods: {
    completeTask(id) {
      if (this.tasks[id].completed) { this.tasks[id].completed = false; }
      else { this.tasks[id].completed = true; }
    }
  }
});
