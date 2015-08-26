// v = require('vue');
export var App = {
  run: function(){
    new Vue({
      el: '#demo',
      data: {
        title: 'todos',
        todos: [
          {
            done: true,
            content: 'Learn JavaScript'
          },
          {
            done: false,
            content: 'Learn Vue.js'
          }
        ]
      }
    })
  }
}
