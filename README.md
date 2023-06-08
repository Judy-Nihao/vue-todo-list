# 實作紀錄：To-Do List 三重奏之一：Vue+Vite

## 實作網址
gh-pages
https://judy-nihao.github.io/vue-todo-list

GitHub Repo
https://github.com/Judy-Nihao/vue-todo-list/tree/main

## 實作功能

- 輸入清單使用者姓名
- 新增刪除待辦事項
- 已新增事項可打字編輯
- 清除已完成事項、清除全部事項
- 重整頁面紀錄清單狀態
- 手機版調整畫面點擊體驗
- 電腦版設置按鈕 hover 提示

![](https://hackmd.io/_uploads/HJbO2MJwh.jpg)

![](https://hackmd.io/_uploads/rk8_nzyvh.jpg)




## 筆記

「ToDo List 三重奏」是我為了體會原生JS和框架的邏輯差異，以及比較兩大框架 Vue 和 React 自己使用起來的上手程度，來決定往後偏好優先深入研究的對象，我以 ToDo List 的實作當作比較基礎，製作出三個 ToDo List ，兩種框架共同使用 Vite 作為前端建構工具。

框架跟原生JS的邏輯真的很不一樣，初次接觸腦袋打結好幾遍。以前的認知是 HTML 管結構，CSS管樣式，JavaScirpt 管互動與計算，大家分工各做各的，但是一進入到框架，一時之間好像「大家一起上啊！～」在一個 `.vue` 檔案裡面會出現 `<template>` 、 `<script>` 和 `<style>`，乍看長得很眼熟但又多出很多沒見過的「方法」、「函式」、「屬性」等等，以前學到的分開管理彷彿又全部融在一起。漸漸地才知道「元件化」的概念，隨著網站內容越來越龐大，管理和修改就會越來越複雜。元件化的概念，讓每個元件有獨立的骨架、外貌和行為能力，需要動用誰再把那個元件引入就好，如此就可以將龐大的網頁拆分成小模組，如果要針對特定功能進行維護，只要處理與之相關的模組即可，不用全部扯進來，熱門框架崛起，大概是從這樣的使用需求出發？

實作過程中腦袋大放煙火和地震海嘯，先講最終結論，Vue 確實對我來說比較直覺！

感到最驚奇的部分，是在進行「表單 input 」和其他元素的雙向綁定時， `v-model` 語法糖真的很快速直觀，本來原生 JS 要進行的一堆步驟：命名變數抓取DOM元素、取得元素 value、`onchange` 事件監聽，用 `innerHTML` 把抓到的值存進另一個變數等等，居然用一個 `v-model` 就可以把資料雙向綁定同步顯示了，吃了好幾斤有夠飽。

兩種框架其實在精神上都有一些共同的邏輯，例如：變數本身都是不可以修改的 ( immutable )，必須再多包一層東西，透過更改value、或是去陣列解構賦值的方式，去修改變數內容。

而不是像原生 JS 直接使用「等號」賦值。

Vue 是用 `ref()` 

變數的值要用 `ref()` 包起來，要取得 `count` 的值時要寫 `conut.value` ，變數內的值變得像是某種屬性。

```jsx
import { ref } from 'vue'

const count = ref(1)
console.log(count.value) // 1
```

React 則是用 `useState()` 

用解構賦值方式處理變數。「解構賦值」可以把陣列或物件中的資料解開擷取成為獨立變數。

想要更改變數 `count` 存取的值，必須透過函式 `setCount` 去更改。

```jsx
import { useState } from 'react';

// 這是陣列的解構賦值
const [count, setCount] = useState(5);
setCount(10); // count 的值就會變成 10
```

實作過程還有很多細節，兩種框架實作的筆記會陸續增補到 Hack MD 上面。

Hack MD：https://hackmd.io/BBMWEfdKRaKQTwgxdfuLfw?view