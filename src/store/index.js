import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 애플리케이션의 데이터를 포함하는 중앙 집중화된 상태 객체.
    // 여러 컴포넌트에서 공유되는 데이터 저장.
    tasks: [
      { id: 1, title: "Add a new task!", done: false },
      { id: 2, title: "Add a newer task!", done: false },
      { id: 3, title: "Add a newest task!", done: false },
    ],
  },
  mutations: {
    // 상태를 변경하는 메소드.
    // 직접적인 상태 변경은 반드시 mutations를 통해서만 이루어져야 함.
    // 동기적인 작업 수행.
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(), // id는 unique해야하기 때문에
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
      // push 한 이후엔 인풋칸 placeholder에 있던 newTaskTitle을 비워줌
      // this.newTaskTitle = "";
    },
  },
  actions: {
    // 비동기적인 작업이나 복잡한 로직 처리를 위해 사용되는 메소드.
    // mutations를 호출하거나, 다른 actions를 호출하여
    // 비동기 동작을 처리하거나 외부 API와의 통신 등 수행.
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
