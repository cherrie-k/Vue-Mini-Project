<!--template 태그는 컴포넌트의 템플릿 섹션 정의함. 여기서는, class="home"인 div로 구성-->
<template>
  <div class="home">
    <!--Vuetify 라이브러리에서 제공하는 v-list. flat attribute은 아무런 그림자나 elevation 없음을 의미-->
    <v-list class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item>
          <!--v-slot:default로 컨텐트 분배를 위한 slot 정의함. 
        이 slot의 이름은 'default'로 하고, 이건 'active'라는 프로퍼티를 가진 data object 받음-->
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <!--:input-value 속성은 체크박스의 값과 슬롯에 전달된 데이터 객체의 'active' 속성 바인딩함-->
              <v-checkbox :input-value="active" color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
            </v-list-item-content>
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
        { id: 1, title: "wake up" },
        { id: 2, title: "eat oatmeal" },
        { id: 3, title: "morning workout" },
      ],
    };
  },
};
</script>
