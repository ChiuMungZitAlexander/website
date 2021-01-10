---
title: '运用directives在vue组件中添加ripple动画效果'
date: '2020-08-09'
tag: 'vue,directives,css,animation'
type: '原创'
---

### 实际效果

![Ripple Effect](../../../static/images/ripple-effect-by-vue-directives/ripple-effect.gif)

### 什么是 directives？

<a href="https://cn.vuejs.org/v2/guide/custom-directive.html" target="_blank">vue 官方文档</a>对 directives 定义是“自定义指令，用来对 DOM 元素进行底层操作”。

简单来说，因为 MVVM 模式是**数据驱动**的，所以不提倡直接操作 DOM。但偶尔会遇到必须操作 DOM，且逻辑基本一致的情况，使用 directives 可以抽象逻辑、提高复用。

v-show 就是一个典型的 directives，本质上 v-show 只是改变 DOM 的 CSS`{ display: none }`，仅此而已。

### 如何做到 ripple 效果？

<br>

##### 1.确定点击/触摸位置

<br>

<pre>
const posX = e.pageX - e.currentTarget.offsetLeft
const posY = e.pageY - e.currentTarget.offsetTop
</pre>

##### 2.绝对定位添加 ripple 层

<br>

<pre>
let spanEl = document.createElement('span');
spanEl.className = 'ripple';
e.currentTarget.appendChild(spanEl);
</pre>

##### 3.CSS 圆形扩散效果

<br>

<pre>
.ripple {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  height: 0;
  opacity: 1;
  position: absolute;
  transform: scale(0);
  width: 0;
}

.rippleEffect {
  animation: rippleDrop .6s linear;
}

@keyframes rippleDrop {
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</pre>

### DEMO

<a href="https://codepen.io/alexanderzhao/pen/NWrrxRy" target="_blank">codepen</a>

### 思考：不使用directives实现的缺点

<br>

1. 需要 ripple 和 non-ripple 两种组件，代码冗余提高，且不够灵活
2. 在生命周期中执行逻辑没有 directives 钩子函数清晰