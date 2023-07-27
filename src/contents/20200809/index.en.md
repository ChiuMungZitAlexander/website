---
slug: "/20200809"
title: "Implement ripple effect by directives on Vue components"
date: "2020-08-09"
tag: "vue,directives,css,animation"
type: "tech"
thumbnail: "./thumbnail.jpeg"
locale: "en"
---

### Final Effect

![](./ripple-effect.gif)

### What is directives?

<a href="https://cn.vuejs.org/v2/guide/custom-directive.html" target="_blank">Vue docs</a>defines directives as "some low-level DOM access on plain elements".

In short, due to the **data-driven** of MVVM, it is not recommended to manipulate DOM. However, occasionally, it cannot be avoided to manipulate DOM with the same logic in different conditions. Now, using directives will abstract the logic and improve the reusability.

`v-show` is one of the typical directives. Essentially, `v-show` just alters the CSS`{ display: none }` of DOM, nothing more.

### How to implement ripple effect?

#### 1. Locate the click/touch

```
const posX = e.pageX - e.currentTarget.offsetLeft
const posY = e.pageY - e.currentTarget.offsetTop
```

#### 2. Create the ripple layer by absolute position

```
let spanEl = document.createElement('span');
spanEl.className = 'ripple';
e.currentTarget.appendChild(spanEl);
```

#### 3. Create diffusion effect by CSS

```
.ripple {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  height: 0;
  opacity: 1;
  position: absolute;
  transform: scale(0);
  width: 0;
}

.ripple-effect {
  animation: ripple-drop .6s linear;
}

@keyframes ripple-drop {
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
```

### DEMO

<a href="https://codepen.io/alexanderzhao/pen/NWrrxRy" target="_blank">codepen</a>

### Thinking: Cons of not using directives

1. Two kinds of components - ripple and non-ripple components, will be needed, which increases the redundancy and is not agile enough.

2. The logic execution in the life cycle is not as clear as using directives hooks.