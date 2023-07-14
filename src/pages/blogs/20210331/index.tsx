import { useTranslation } from "react-i18next";
import {
  Stack,
  Title,
  Group,
  Badge,
  Text,
  Image,
  Code,
  Anchor,
  List,
} from "@mantine/core";

import Template from "../template";

const CODE_BLOCK_1 = `.super-ellipse {
  border-radius: 30% / 2%;
  height: 220px;
  position: relative;
  width: 220px;
}`;

const CODE_BLOCK_2 = `.super-ellipse {
  height: 220px;
  position: relative;
  width: 220px;
}

.super-ellipse::after,
.superellipse::before {
  background-color: red;
  content: "";
  position: absolute;
  z-index: -1;
}

.super-ellipse::before {
  border-radius: 2% / 30%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.super-ellipse::after {
  border-radius: 30% / 2%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}`;

const CODE_BLOCK_3 = `.super-ellipse {
  height: 220px;
  position: relative;
  width: 220px;
}

.super-ellipse::after,
.superellipse::before {
  background-color: red;
  content: "";
  position: absolute;
  z-index: -1;
}

.super-ellipse::before {
  border-radius: 2% / 30%;
  bottom: 33px;
  left: 0;
  right: 0;
  top: 33px;
}

.super-ellipse::after {
  border-radius: 30% / 2%;
  bottom: 0;
  left: 33px;
  right: 33px;
  top: 0;
}`;

const CODE_BLOCK_4 = `.super-ellipse {
  background-color: #ff6700;
  border-radius: 20%;
  height: 220px;
  position: relative;
  width: 220px;
}

.super-ellipse::after,
.superellipse::before {
  background-color: #ff6700;
  content: "";
  position: absolute;
  z-index: -1;
}

.super-ellipse::before {
  border-radius: 2% / 30%;
  bottom: 33px;
  left: -2px;
  right: -2px;
  top: 33px;
}

.super-ellipse::after {
  border-radius: 30% / 2%;
  bottom: -2px;
  left: 33px;
  right: 33px;
  top: -2px;
}`;

const CODE_BLOCK_5 = `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = 240;
const height = 240;
const calcY = x => ((width / 2)**3 - x**3)**(1 / 3)

ctx.setTransform(1, 0, 0, 1, width / 2 + 8, height / 2 + 8);
ctx.strokeStyle = '#ff6700';
ctx.moveTo(-width / 2, 0);

for (let i = -width / 2; i <= width / 2; i++) {
  const j = calcY(Math.abs(i));
  ctx.lineTo(i, j);
  ctx.stroke();
}


for (let i = width / 2; i >= -width / 2; i--) {
  const j = -calcY(Math.abs(i));
  ctx.lineTo(i, j);
  ctx.stroke();
}`;

const CODE_BLOCK_6 = `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = 240;
const height = 240;
const calcY = x => ((width / 2)**3 - x**3)**(1 / 3)

ctx.setTransform(1, 0, 0, 1, width / 2 + 8, height / 2 + 8);
ctx.beginPath()
ctx.moveTo(width / 2 + 8, 0);

for (let i = -width / 2; i <= width / 2; i++) {
  const j = calcY(Math.abs(i));
  ctx.bezierCurveTo(i, j, i, j, i, j);
}

for (let i = width / 2; i >= -width / 2; i--) {
  const j = -calcY(Math.abs(i));
  ctx.bezierCurveTo(i, j, i, j, i, j);
}

ctx.closePath();
ctx.fillStyle = '#ff6700';
ctx.fill();`;

const Blog20210331 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Template>
      <Stack>
        <Title order={1}>{t("20210331.title")}</Title>
        <Group mb="xs" noWrap>
          <Badge color="indigo" variant="light">
            {t("tech")}
          </Badge>
          <Badge color="gray" variant="light">
            12 {t("min_read", { count: 12 })}
          </Badge>
        </Group>
        <Title order={3}>{t("20210331.sec1.title")}</Title>
        <Text>{t("20210331.sec1.p1")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/00.png" />
        <Text>{t("20210331.sec1.p2")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/0.jpeg" />
        <Text>{t("20210331.sec1.p3")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/1.gif" />
        <Text>{t("20210331.sec1.p4")}</Text>
        <Title order={3}>{t("20210331.sec2.title")}</Title>
        <Text>{t("20210331.sec2.p1")}</Text>
        <Text>{t("20210331.sec2.p2")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/2.jpg" />
        <Text>{t("20210331.sec2.p3")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/3.jpg" />
        <Text>{t("20210331.sec2.p4")}</Text>
        <Text>{t("20210331.sec2.p5")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/4.jpeg" />
        <Text>{t("20210331.sec2.p6")}</Text>
        <Text>{t("20210331.sec2.p7")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/5-1.png" />
        <Image maw={360} mx="auto" src="/blogs/20210331/5.jpeg" />
        <Title order={3}>{t("20210331.sec3.title")}</Title>
        <Text>{t("20210331.sec3.p1")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/6.png" />
        <Text>{t("20210331.sec3.p2")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/7.png" />
        {i18n.language === "en" ? (
          <Text></Text>
        ) : (
          <Text>
            那么用<Code>border-radius</Code>
            怎么能实现一个轴长不等的椭圆角呢？这个时候我们回归文档看一下。
          </Text>
        )}
        {i18n.language === "en" ? (
          <Text></Text>
        ) : (
          <Text>
            MDN关于<Code>border-raiuds</Code>有这么一小行字{" "}
            <b>
              followed optionally by "/" and one, two, three, or four or values.
              This is used to set an additional radius, so you can have
              elliptical corners.
            </b>
            。我就不翻译了，北京海淀区幼儿园的英语句型。
          </Text>
        )}
        <Text>{t("20210331.sec3.p5")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/8.png" />
        <Text>{t("20210331.sec3.p6")}</Text>
        <Code block>{CODE_BLOCK_1}</Code>
        <Image maw={360} mx="auto" src="/blogs/20210331/9.png" />
        <Text>{t("20210331.sec3.p7")}</Text>
        <Code block>{CODE_BLOCK_2}</Code>
        <Image maw={360} mx="auto" src="/blogs/20210331/10.png" />
        <Text>{t("20210331.sec3.p8")}</Text>
        <Code block>{CODE_BLOCK_3}</Code>
        <Image maw={360} mx="auto" src="/blogs/20210331/11.png" />
        <Text>{t("20210331.sec3.p9")}</Text>
        <Code block>{CODE_BLOCK_4}</Code>
        <Image maw={360} mx="auto" src="/blogs/20210331/12.png" />
        <Text>{t("20210331.sec3.p10")}</Text>
        <Anchor
          href="https://codepen.io/alexanderzhao/pen/jOyyNKR"
          target="_blank"
        >
          Demo
        </Anchor>
        <Title order={3}>{t("20210331.sec4.title")}</Title>
        <Text>{t("20210331.sec4.p1")}</Text>
        {i18n.language === "en" ? (
          <Text></Text>
        ) : (
          <Text>
            原因在于，椭圆函数曲线与非二次幂的Lamé曲线在图像上根本不可能重合，因此无论你怎么调整
            <Code>border-radius</Code>都不可能实现非二次幂的Lamé曲线。
          </Text>
        )}
        <Image maw={360} mx="auto" src="/blogs/20210331/13-1.png" />
        <Image maw={360} mx="auto" src="/blogs/20210331/13.png" />
        <Text>{t("20210331.sec4.p3")}</Text>
        {i18n.language === "en" ? (
          <Text></Text>
        ) : (
          <Text>
            直觉告诉我应该用<Code>canvas</Code>
            。可以利用微积分的思想，将所有图像上的点绘制出来并连接。
          </Text>
        )}
        <Text>{t("20210331.sec4.p5")}</Text>
        <Code block>{CODE_BLOCK_5}</Code>
        <Image maw={360} mx="auto" src="/blogs/20210331/14.png" />
        <Text>{t("20210331.sec4.p6")}</Text>
        <Code block>{CODE_BLOCK_6}</Code>
        <Image maw={360} mx="auto" src="/blogs/20210331/15.png" />
        <Title order={3}>{t("20210331.sec5.title")}</Title>
        {i18n.language === "en" ? (
          <Text></Text>
        ) : (
          <Text>
            这时候突然闯进一只杠精嚷道：<Code>canvas</Code>
            者不为CSS也。
          </Text>
        )}
        <Text>{t("20210331.sec5.p2")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/16.jpeg" />
        {i18n.language === "en" ? (
          <Text></Text>
        ) : (
          <Text>
            <Code>canvas</Code>
            是HTML元素，的确。那到底有没有一种CSS方法能够让我们去像
            <Code>canvas</Code>这样自定义地绘制路径呢？
          </Text>
        )}
        <Text>{t("20210331.sec5.p4")}</Text>
        <Text>{t("20210331.sec5.p5")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/17.jpeg" />
        {i18n.language === "en" ? (
          <Text></Text>
        ) : (
          <Text>
            CSS Houdini主要提供了6组API，其中Paint
            API可以满足需求。我们可以使用Paint API自定义<Code>background</Code>
            的属性值，进而通过遮罩的方式来实现超椭圆的效果。步骤如下：
          </Text>
        )}
        <List type="ordered">
          {i18n.language === "en" ? (
            <List.Item> </List.Item>
          ) : (
            <List.Item>
              声明一个<Code>paint.js</Code>开发绘制方法
            </List.Item>
          )}
          {i18n.language === "en" ? (
            <List.Item> </List.Item>
          ) : (
            <List.Item>
              通过Houdini注册<Code>paint.js</Code>中的方法
            </List.Item>
          )}
          {i18n.language === "en" ? (
            <List.Item> </List.Item>
          ) : (
            <List.Item>
              为某个元素的<Code>background-image</Code>添加包含
              <Code>paint.js</Code>提供方法的属性值并用运用遮罩实现超椭圆
            </List.Item>
          )}
        </List>
      </Stack>
    </Template>
  );
};

export default Blog20210331;
