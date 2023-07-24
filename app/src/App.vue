<script setup>
  import { ref } from 'vue';
  import PostForm from './components/PostForm.vue';
  import PostList from './components/PostList.vue';

  let posts = ref([
    { id: 1, title: 'Пост о java script 1', body: 'java script универсальный ЯП',},
    { id: 2, title: 'Пост о java script 2', body: 'java script универсальный ЯП',},
    { id: 3, title: 'Пост о java script 3', body: 'java script универсальный ЯП',},
    { id: 4, title: 'Пост о java script 4', body: 'java script универсальный ЯП',},
  ]);
  console.log(posts);
  let dialogVisible = ref(false);
  const createPost = post => {
    posts.value.push(post);
    dialogVisible = false;
  }
  const removePost = post => posts = posts.value.filter(p => p.id !== post.id);
  const showDialog = () => dialogVisible = true;

  console.log(dialogVisible)
</script>

<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
        @click="showDialog"
        style="margin-top: 10px; margin-bottom: 10px;"
    >
      Создать пользователя
    </my-button>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>