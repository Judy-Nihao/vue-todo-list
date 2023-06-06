<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const name = ref("");

const input_content = ref("");
const input_category = ref(null);

const status = ref("");

console.log(status.value);

// 有todos_asc時，computed => 後面如果再加上 {} 會變成 undefined 不知為何
// 計算屬性 computed：若有需把 data 資料放在畫面上許多地方，又必須做一些處理後再綁定，就可以直接把處理資料的邏輯寫在計算屬性中，
// sort()用匿名函式當排序條件
// 如果是 return b-a 表示排序上是倒著排，也就是比較晚新增的項目，會排在陣列的最前面。

// const todos_asc = computed(() => 
//   todos.value.sort((a,b) => {
//       return b.createdAt - a.createdAt  
//     })
// )

// computed 一定會歸還一個值
// computed 會將結果暫存起來
// 可能因為會有值產生出來，原版教學才會用變數去存取去接起來，單純當個容器
// 但其實主要只是用它去 sort() 陣列 todos 的排序，sort()會影響原陣列，所以 computed 執行後，陣列 todos 就已經改變了
// 並不需要拿 todos_asc 這個變數額外做什麼事情
computed(() => {
  todos.value.sort((a,b) => {
      return b.createdAt - a.createdAt  
    })
})

const addTodo = () => { 
  // trim 是排除空格，若排除空格後仍為空，表示沒有輸入東西
  // 或是沒有選擇待辦類別 
  // 其中之一的情況就什麼都不做
  if(input_content.value.trim() === '' || input_category.value === null){
    status.value = "active";
    return;
  }
  status.value = "";
  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime()
    // 回傳回從1970年1月1日0時0分0秒開始，算至日期物件，其中經過的時間毫秒數
  })

  // 新增完畢就清空 input 欄位，也清空事項類別，讓 radio 回復到未選取狀態
  input_content.value = "";
  input_category.value = null;
};

// 點擊刪除按鈕時，就過濾陣列 todos 裡面的每一項 todo。
// filter 括號內的 t 代表 每一個 todo
// 比對每一個物件 todo 和 目前點擊到的代辦事項 todo 是否吻合
// 比對我使用物件屬性 createdAt 來相比，當作 id 來用去辨識
// 只有不吻合的物件，也就是沒有被點擊到的物件，才會被加回去陣列 todos 之中
// 等於變相刪除了被點擊到的那個 todo  
const removeTodo = todo => {
  todos.value = todos.value.filter(t => t.createdAt !== todo.createdAt)
}

// 只要陣列 todos 有異動，也就是新增或是刪除項目時，就把陣列內容存進localStorage
// 要記得轉純字串
// 但是這條 watch 是寫在funciton addToDo 外面，陣列 push 時 watch 感測不到
// 必須加上options條件 deep:true 
// 表示無論 todos 深處何處，即使是被包在 function 裡面的 todos，只要 todos 有異動，deep 都會抓到，然後觸發 watch 
watch(todos, newVal => {
  localStorage.setItem("todos", JSON.stringify(newVal));
}, { deep: true })

// call a watch function
// 抓資料存進去
// 只要 name 的內容一有異動就執行逗號後面的 function 
// 這裡是監聽標題上的填寫姓名的 input
watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

// 把資料取出來
// 標題：如果沒有資料可取就更新為空字串
// 項目清單陣列：如果沒有資料可取，就更新為空字串
onMounted(() =>{
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos"))|| []
});

</script>

<template>

 <main class="app">
    <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" placeholder="Name Here" v-model="name">
      </h2>
    </section>
    <section class="create-todo">
      <h3>Create a ToDo</h3>
      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input 
          type="text" 
          placeholder="e.g. make a video" 
          v-model="input_content" />
        <h4>Pick a Category</h4>
        
        <div class="options">

          <label>
            <input 
              type="radio" 
              name="category"
              value="business"
              v-model="input_category">
            <span class="bubble business"></span>
            <div>工作</div>
          </label>

          <label>
            <input 
              type="radio" 
              name="category"
              value="personal"
              v-model="input_category">
            <span class="bubble personal"></span>
            <div>私人</div>
          </label>
          
        </div>
        <input type="submit" value="Add todo"/>
        <p :class="`reminder ${status}`">輸入欄位不能為空。記得要選 工作 / 私人</p>
      </form> 
    </section>
    
    <section class="todo-list">
      <h3>TODO LIST</h3>
      <div class="list">
        <!-- 引號外雙內單。
          v-for 渲染列表，
          v-bind 綁定 class，
          因為我們要動態判斷後，再放一個 class 上去，
          todo-item 是固定的 class 名稱，後面要再放一個樣式名稱叫做 done，
          只有當 todo.done 取到的值為 true 時，才會放上 done 這個樣式名，也就是待辦事項完成時才會有的樣式。 -->
        <div v-for="todo in todos" :class="`todo-item ${todo.done && 'done'}`">

          <label>
            <input type="checkbox" v-model="todo.done" />
            <!-- bubble 是固定樣式名稱，另一個樣式名稱等於 todo.category 的值，可能是 business 或是 personal -->
            <span :class="`bubble ${todo.category}`"></span>
          </label>

          <div class="todo-content">
            <!-- 雙向綁定可以讓新增出來的待辦還能被修改，並將異動同步至陣列 todos 中 -->
            <input type="text" v-model="todo.content">
          </div>

          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>
        </div>
      </div>
    </section>
 </main> 

</template>
