<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
        v-model.trim="post.title"
        type="text"
        placeholder="Название"
    />
    <my-input
        v-model.trim="post.body"
        type="text"
        placeholder="Описание"
    />
    <my-button
        style="align-self: flex-end; margin-top: 15px;"
        @click="cratePost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    cratePost(){
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}
</style>