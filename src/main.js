import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashCan,faCirclePlus)

// createApp(App).mount('#app')

// 要先註冊 fontAwesome 元件再註冊 #app，才能把 icon 引入畫面
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')