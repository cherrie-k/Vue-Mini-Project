<!--template 태그는 컴포넌트의 템플릿 섹션 정의함. 여기서는, class="home"인 div로 구성-->
<template>
  <div class="home">
    <!--v-model은 데이터와 입력 요소를 양방향으로 바인딩하는 디렉티브임.
    사용하면 입력 요소의 값을 데이터에 바인딩하고, 데이터의 변경이 입력 요소에 반영되게 할 수 있음
    주로 상용자 입력을 받는 폼 요소(input, select, textarea)와 함께 사용
    v-model 디렉티브 사용하면 폼 요소의 값과 Vue 인스턴스의 데이터 속성이 자동으로 동기화됨-->
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Append"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>

    <!--Vuetify 라이브러리에서 제공하는 v-list. flat attribute은 아무런 그림자나 elevation 없음을 의미.
    v-list에 v-if="tasks.length"를 더해서 tasks array에 무언가가 있어야지만 v-list를 띄우게 함-->
    <v-list v-if="$store.state.tasks.length" class="pt-1" flat>
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{
            'red lighten-5':
              task.done /* task.done이 true일 때만 red property를 가짐*/,
          }"
        >
          <!--v-slot:default로 컨텐트 분배를 위한 slot 정의함. 
        이 slot의 이름은 'default'로 하고, 이건 'active'라는 프로퍼티를 가진 data object 받음-->
          <template v-slot:default>
            <v-list-item-action>
              <!--:input-value 속성이 true일 때 체크함-->
              <v-checkbox
                :input-value="task.done"
                color="red lighten-2"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click.stop="deleteTask(task.id)" icon>
                <v-icon color="red lighten-3">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="no-task">
      <v-icon size="100" color="pink lighten-2">mdi-check</v-icon>
      <div class="text-h5 pink--text">No tasks!</div>
    </div>
  </div>
</template>

<script>
// script 태그 안에서 컴포넌트의 JavaScript 부분 정의
export default {
  name: "Home",
  data() {
    return {
      newTaskTitle: "" /* 새로 입력되는 task 값*/,
    };
  },

  methods: {
    addTask() {
      let newTask = {
        id: Date.now(), // id는 unique해야하기 때문에
        title: this.newTaskTitle,
        done: false,
      };
      this.tasks.push(newTask);
      // push 한 이후엔 인풋칸 placeholder에 있던 newTaskTitle을 비워줌
      this.newTaskTitle = "";
    },

    doneTask(id) {
      // 전달받은 id와 일치하는 task 찾음
      // fiter는 iteration을 돌며 주어진 조건 (task.id === id)와 만족하는 task를 찾는다
      let task = this.tasks.filter((task) => task.id === id)[0];
      // 주의해야 할 점: task는 단일 object가 아니라 array of object를 반환하기 때문에, 꼭 [0]를 붙여서 하나만 반환하게 해야함
      task.done = !task.done;
    },

    deleteTask(id) {
      // 넘겨받은 id와 일치하지 않는 id를 가진 애들 찾기
      this.tasks = this.tasks.filter((task) => task.id !== id);
      // 넘겨받은 id랑 일치하는 애 빼고 나머지가 this.tasks로 넘겨짐
      // 그렇게 넘겨진 애들만 v-for에 의해 렌더링됨
    },
  },
};
</script>

<style>
.no-task {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.45;
}
</style>
