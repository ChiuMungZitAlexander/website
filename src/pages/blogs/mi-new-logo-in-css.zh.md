---
title: '用CSS画一个小米的新logo'
date: '2021-03-31'
tag: 'css'
type: '原创'
---

### 前情提示

小米今天换新logo了，据说花了200万。
![](../../assets/images/mi-new-logo-in-css/mi-logo.png)

雷布斯总能在宣传上给我们整点新花样。
![](../../assets/images/mi-new-logo-in-css/new-pattern.jpeg)

网上更是炸翻了天，说一行代码，就值200万？
![](../../assets/images/mi-new-logo-in-css/code-to-logo.gif)

要不是说雷布斯是个懂营销的程序员呢，普普通通换个logo，小米立马上热搜。一想到小米汽车也要上线了，不得不服雷布斯这波还是有点东西的。

### 事情真的那么简单？

外行看热闹，内行看门道。

这次的设计师**原研哉(はら けんや)**你可能不熟悉。
![](../../assets/images/mi-new-logo-in-css/hara.jpg)

但是他的设计你肯定知道。没错，他就是无印良品的艺术总监。
![](../../assets/images/mi-new-logo-in-css/muji.jpg)

一个logo值200万，逼着我又去仔细研究了一下。果不其然，发现了端倪。

首先，这次的logo并不是一行代码那么简单的圆角处理。对比下图。
![](../../assets/images/mi-new-logo-in-css/compare.jpg)

我这36K纯氪金狗眼都看出了二者的区别。简单来说，左边是圆角，右边是明显不是一般的圆角。

又去看了一下设计理念，这次logo用的是笛卡尔坐标系下的Lamé曲线。也被称为超椭圆。函数图像如下。
![](../../assets/images/mi-new-logo-in-css/function.png)
![](../../assets/images/mi-new-logo-in-css/graph.jpg)

那么问题来了，既然不是一行CSS的问题，那如何用CSS画超椭圆呢？

### CSS实现超椭圆

