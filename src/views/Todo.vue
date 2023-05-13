<!--template 태그는 컴포넌트의 템플릿 섹션 정의함. 여기서는, class="home"인 div로 구성-->
<template>
  <div class="home">
    <!--Vuetify 라이브러리에서 제공하는 v-list. flat attribute은 아무런 그림자나 elevation 없음을 의미-->
    <v-list class="pt-1" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{
            'blue lighten-5':
              task.done /* task.done이 true일 때만 blue property를 가짐*/,
          }"
        >
          <!--v-slot:default로 컨텐트 분배를 위한 slot 정의함. 
        이 slot의 이름은 'default'로 하고, 이건 'active'라는 프로퍼티를 가진 data object 받음-->
          <template v-slot:default>
            <v-list-item-action>
              <!--:input-value 속성이 true일 때 체크함-->
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click.stop="deleteTask(task.id)" icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
// script 태그 안에서 컴포넌트의 JavaScript 부분 정의
export default {
  name: "Home",
  data() {
    return {
      tasks: [
        { id: 1, title: "wake up", done: false },
        { id: 2, title: "eat oatmeal", done: false },
        { id: 3, title: "morning workout", done: false },
      ],
    };
  },

  methods: {
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
