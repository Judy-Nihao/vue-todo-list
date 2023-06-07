<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const name = ref("");

const input_content = ref("");
const input_category = ref(null);

//status 是提醒文字reminder的 class
const status = ref("");


// sort()裡面放函式當排序驗證條件
// 若 b-a 計算結果為「正值」，陣列排序就倒著排，意即較晚新增的todo，會排在陣列的最前面。
// 透過 todo 的createdAt 的時間毫秒數去做數字加減
const todos_asc = computed(() =>
  todos.value.sort((a,b) => {
      return b.createdAt - a.createdAt
    })
)


const addTodo = () => { 
  // trim 是排除空格，若排除空格後仍為空，表示沒有輸入東西
  // 或是沒有選擇待辦類別 
  // 其中之一的情況就什麼都不做
  if(input_content.value.trim() === '' || input_category.value === null){
    //切換status的值
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

//清除全部清單項目
const clearAll = () =>{
  todos.value =[];
}

// 清除已完成的項目，意即只列出未完成的項目
const clearCompleted = () =>{
  todos.value = todos.value.filter(todo => todo.done == false)
}

// 只要陣列 todos 有異動，也就是新增或是刪除項目時，就把陣列內容存進localStorage
// 這條 watch 是寫在 funciton addToDo 外面，裡面 todos 做 push 時，watch 感測不到
// 必須加上 options 條件 deep:true 
// 表示無論 todos 在何處，即使是被包在 function 裡面，只要 todos 有異動，deep 都會抓到，然後觸發 watch 
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

 <main class="container">
    <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" placeholder="輸入名字" v-model="name">
      </h2>
    </section>
    <section class="create-todo">
      <form @submit.prevent="addTodo">
        <h4>建立待辦事項</h4>
        <input 
          type="text" 
          placeholder="例如：寫一篇筆記" 
          v-model="input_content" />
        <h4>選擇類別</h4>
        
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
        <button class="add-todo"><span>新增</span><font-awesome-icon icon="fa-solid fa-circle-plus" /></button>
        <p :class="`reminder ${status}`">請輸入待辦事項＋選擇類別</p>
      </form> 
    </section>
    
    <section class="todo-list">
      <h4>待辦清單</h4>
      <button class="clear" @click="clearAll()">清除全部</button>
      <button class="clear completed" @click="clearCompleted()">清除已完成項目</button>
      <div class="list">
        <!-- 引號外雙內單。
          v-for 渲染列表，
          v-bind 綁定 class，
          因為我們要動態判斷後，再放一個 class 上去，
          todo-item 是固定的 class 名稱，後面要再放一個樣式名稱叫做 done，
          只有當 todo.done 取到的值為 true 時，才會放上 done 這個樣式名，也就是待辦事項完成時才會有的樣式。 -->
        <div v-for="todo in todos_asc" :class="`todo-item ${todos_asc.done && 'done'}`">

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
            <button class="delete" @click="removeTodo(todo)"><font-awesome-icon icon="fa-regular fa-trash-can" /></button>
          </div>
        </div>
      </div>
    </section>
 </main> 

</template>
