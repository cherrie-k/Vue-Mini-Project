import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 애플리케이션의 데이터를 포함하는 중앙 집중화된 상태 객체.
    // 여러 컴포넌트에서 공유되는 데이터 저장.
    tasks: [
      // { id: 1, title: "Add a new task!", done: false, dueDate: "2023-05-20" },
      // { id: 2, title: "Add a newer task!", done: false, dueDate: "2023-05-23" },
      // { id: 3, title: "Add a newest task!", done: false, dueDate: null },
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    // 상태를 변경하는 메소드.
    // 직접적인 상태 변경은 반드시 mutations를 통해서만 이루어져야 함.
    // 동기적인 작업 수행.
    addTask(state, newTask) {
      state.tasks.push(newTask);
      // push 한 이후엔 인풋칸 placeholder에 있던 newTaskTitle을 비워줌
      // this.newTaskTitle = "";
    },
    doneTask(state, id) {
      // 전달받은 id와 일치하는 task 찾음
      // fiter는 iteration을 돌며 주어진 조건 (task.id === id)와 만족하는 task를 찾는다
      let task = state.tasks.filter((task) => task.id === id)[0];
      // 주의해야 할 점: task는 단일 object가 아니라 array of object를 반환하기 때문에, 꼭 [0]를 붙여서 하나만 반환하게 해야함
      task.done = !task.done;
    },
    deleteTask(state, id) {
      // 넘겨받은 id와 일치하지 않는 id를 가진 애들 찾기
      state.tasks = state.tasks.filter((task) => task.id !== id);
      // 넘겨받은 id랑 일치하는 애 빼고 나머지가 this.tasks로 넘겨짐
      // 그렇게 넘겨진 애들만 v-for에 의해 렌더링됨
    },
    updateTaskTitle(state, payload) {
      // 수정하고자 하는 task의 아이디값으로 task 불러옴
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        // 이미 다른 snackbar가 보여지고 있는 경우
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    // 비동기적인 작업이나 복잡한 로직 처리를 위해 사용되는 메소드.
    // mutations를 호출하거나, 다른 actions를 호출하여
    // 비동기 동작을 처리하거나 외부 API와의 통신 등 수행.
    /* mutation 내에서 다른 mutation을 불러오지 못하기 때문에 여기서 처리! */
    addTask({ commit }, newTaskTitle) {
      // localbase를 활용한 작업은 asynchronous하고, 그런 작업은 actions에서 수행해야 하기 때문에
      // newTask를 mutations의 addTask에서 여기로 옮겨줌
      let newTask = {
        id: Date.now(), // id는 unique해야하기 때문에
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };
      db.collection("tasks")
        .add(newTask)
        .then(() => {
          commit("addTask", newTask);
          commit("showSnackbar", "Task added!");
        });
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id: id })
        .update({
          done: !task.done,
        })
        .then(() => {
          commit("doneTask", id);
        });
    },
    deleteTask({ commit }, id) {
      db.collection("tasks")
        .doc({ id: id })
        .delete()
        .then(() => {
          commit("deleteTask", id);
          commit("showSnackbar", "Todo deleted!");
        });
    },
    updateTaskTitle({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          title: payload.title,
        })
        .then(() => {
          commit("updateTaskTitle", payload);
          commit("showSnackbar", "Todo updated! ");
        });
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          dueDate: payload.dueDate,
        })
        .then(() => {
          commit("updateTaskDueDate", payload);
          commit("showSnackbar", "Duedate updated!! ");
        });
    },
    getTasks({ commit }) {
      db.collection("tasks")
        .get()
        .then((tasks) => {
          commit("setTasks", tasks);
        });
    },
  },
  getters: {
    // state에서 data를 get해오는 역할. 필요 없을 때도 있음!
    // 스토어의 상태를 계산된 속성으로 변환해주는 메소드이고,
    // 다른 컴포넌트에서 스토어의 데이터를 가져올 때 유용하게 사용.
  },
  modules: {
    // break up stores to multiple modules. 기능 복잡해지면 사용.
    // (이 프로젝트에선 사용 안한다!)
  },
});
