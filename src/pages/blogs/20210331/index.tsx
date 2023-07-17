import { useTranslation } from "react-i18next";
import {
  Stack,
  Title,
  Group,
  Text,
  Image,
  Code,
  Anchor,
  List,
} from "@mantine/core";

import Badge from "../../../components/badge";
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

const CODE_BLOCK_7 = `registerPaint(
  "superEllipse",
  class {
    paint(ctx) {
      const width = 256;
      const height = 256;
      const calcY = (x) => ((width / 2) ** 3 - x ** 3) ** (1 / 3);

      ctx.setTransform(1, 0, 0, 1, width / 2, height / 2);
      ctx.beginPath();

      for (let i = -width / 2; i <= width / 2; i++) {
        const j = calcY(Math.abs(i));
        ctx.bezierCurveTo(i, j, i, j, i, j);
      }

      for (let i = width / 2; i >= -width / 2; i--) {
        const j = -calcY(Math.abs(i));
        ctx.bezierCurveTo(i, j, i, j, i, j);
      }

      ctx.closePath();
      ctx.fillStyle = "#ff6700";
      ctx.fill();
    }
  }
);
`;

const CODE_BLOCK_8 = `<script>
  CSS.paintWorklet.addModule("paint.js");
</script>
`;

const CODE_BLOCK_9 = `<style>
@supports (background-image: paint(id)) {
  #box {
    background-image: paint(superEllipse);
    height: 256px;
    width: 256px;
  }
}
</style>`;

const CODE_BLOCK_10 = `registerPaint(
  "superEllipse",
  class {
    // custom properties
    static get inputProperties() {
      // n - the exponent of Lame curve
      return ["--n"];
    }

    paint(ctx, geom, props) {
      const { height, width } = geom;
      const exp = props.get("--n")?.[0] || 3;

      const calcY = (x) => ((width / 2) ** exp - x ** exp) ** (1 / exp);

      ctx.setTransform(1, 0, 0, 1, width / 2, height / 2);
      ctx.beginPath();

      for (let i = -width / 2; i <= width / 2; i++) {
        const j = calcY(Math.abs(i));
        ctx.bezierCurveTo(i, j, i, j, i, j);
      }

      for (let i = width / 2; i >= -width / 2; i--) {
        const j = -calcY(Math.abs(i));
        ctx.bezierCurveTo(i, j, i, j, i, j);
      }

      ctx.closePath();
      ctx.fillStyle = "#ff6700";
      ctx.fill();
    }
  }
);`;

const Blog20210331 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Template>
      <Stack style={{ overflow: "hidden" }}>
        <Title order={1}>{t("20210331.title")}</Title>
        <Group mb="xs" noWrap>
          <Badge type="tech">{t("tech")}</Badge>
          <Badge type="min_read">12 {t("min_read", { count: 12 })}</Badge>
        </Group>
        <Title order={3}>{t("20210331.sec1.title")}</Title>
        <Text>{t("20210331.sec1.p1")}</Text>
        <Image maw={120} mx="auto" src="/blogs/20210331/00.png" />
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
          <Text>
            How to use <Code>border-radius</Code> to have a ellipsed corner
            which has different axis length? Let's go back to docs.
          </Text>
        ) : (
          <Text>
            那么用<Code>border-radius</Code>
            怎么能实现一个轴长不等的椭圆角呢？这个时候我们回归文档看一下。
          </Text>
        )}
        {i18n.language === "en" ? (
          <Text>
            There is a line of small text on MDN docs referred to{" "}
            <Code>border-raiuds</Code>{" "}
            <b>
              followed optionally by "/" and one, two, three, or four or values.
              This is used to set an additional radius, so you can have
              elliptical corners.
            </b>
          </Text>
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
        {i18n.language === "en" ? (
          <Text>
            Here comes the Red Cross, which is actually very similiar. At last,
            we set <Code>border-radius</Code> and color of parent node, and tune
            the position of pseudo elements. Oh, don't forget the Mi's color.
          </Text>
        ) : (
          <Text>
            虽然像红十字会的标志，但其实很接近了。我们最后给父元素一个
            <Code>border-radius</Code>
            并上色看看，再微调一下伪元素的位置。哦，别忘了小米的配色。
          </Text>
        )}
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
          <Text>
            The reason is there is no overlapping between elliptic curve and
            non-quadratic Lamé curve in Cartesian coordinate system. Therefore,
            no matter how you adjust <Code>border-radius</Code> you cannot have
            a non-quadratic Lamé curve.
          </Text>
        ) : (
          <Text>
            原因在于，椭圆曲线与非二次幂的Lamé曲线在图像上根本不可能重合，因此无论你怎么调整
            <Code>border-radius</Code>都不可能实现非二次幂的Lamé曲线。
          </Text>
        )}
        <Image maw={360} mx="auto" src="/blogs/20210331/13-1.png" />
        <Image maw={360} mx="auto" src="/blogs/20210331/13.png" />
        <Text>{t("20210331.sec4.p3")}</Text>
        {i18n.language === "en" ? (
          <Text>
            My intuition was telling me using <Code>canvas</Code> . Consider the
            idea of calculus, to link all the possible points.
          </Text>
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
          <Text>
            Suddenly a troll shouts: <Code>canvas</Code> is not CSS.
          </Text>
        ) : (
          <Text>
            这时候突然闯进一只杠精嚷道：<Code>canvas</Code>
            者不为CSS也。
          </Text>
        )}
        <Text>{t("20210331.sec5.p2")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/16.jpeg" />
        {i18n.language === "en" ? (
          <Text>
            <Code>canvas</Code>
            是HTML元素，的确。那到底有没有一种CSS方法能够让我们去像
            <Code>canvas</Code>这样自定义地绘制路径呢？
          </Text>
        ) : (
          <Text>
            <Code>canvas</Code> is indeed HTML element. So is there any method
            to define drawing path in CSS like in <Code>canvas</Code>?
          </Text>
        )}
        <Text>{t("20210331.sec5.p4")}</Text>
        <Text>{t("20210331.sec5.p5")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/17.jpeg" />
        {i18n.language === "en" ? (
          <Text>
            CSS Houdini provides 6 sets of APIs, of which the Paint API could
            work. We can use Paint API to define properties of{" "}
            <Code>background</Code>, then to have ellipse effect by sheltering.
            Steps are as below:
          </Text>
        ) : (
          <Text>
            CSS Houdini主要提供了6组API，其中Paint
            API可以满足需求。我们可以使用Paint API自定义<Code>background</Code>
            的属性值，进而通过遮罩的方式来实现超椭圆的效果。步骤如下：
          </Text>
        )}
        <List type="ordered">
          {i18n.language === "en" ? (
            <List.Item w="calc(100% - 20px)">
              Define <Code>paint.js</Code>
            </List.Item>
          ) : (
            <List.Item w="calc(100% - 20px)">
              声明一个<Code>paint.js</Code>开发绘制方法
            </List.Item>
          )}
          {i18n.language === "en" ? (
            <Text>
              <Code>registerPaint</Code> is inherited method. The first argument
              is the Houdini name to be registered. Here we call it{" "}
              <Code>suerEllipse</Code>. The second argument is a class, which
              contains <Code>paint</Code> method. The logic of the method is
              basically the same as how to do with <Code>canvas</Code>.
            </Text>
          ) : (
            <Text>
              <Code>registerPaint</Code>
              是内置方法，第一个参数表示需要注册的Houdini的名称，这里我们就叫
              <Code>suerEllipse</Code>。第二参数需要传入一个类，且包含
              <Code>paint</Code>方法。其内容和<Code>canvas</Code>
              的实现基本一致。
            </Text>
          )}
          <Code block my="md">
            {CODE_BLOCK_7}
          </Code>
          {i18n.language === "en" ? (
            <List.Item w="calc(100% - 20px)">
              Register methods in <Code>paint.js</Code> by{" "}
              <Code>paintWorklet</Code>
            </List.Item>
          ) : (
            <List.Item w="calc(100% - 20px)">
              通过<Code>paintWorklet</Code>注册<Code>paint.js</Code>中的方法
            </List.Item>
          )}
          <Code block my="md">
            {CODE_BLOCK_8}
          </Code>
          {i18n.language === "en" ? (
            <List.Item w="calc(100% - 20px)">
              Add <Code>paint.js</Code> to the <Code>background-image</Code>{" "}
              properties of target DOM and fulfill superellipse by sheltering
            </List.Item>
          ) : (
            <List.Item w="calc(100% - 20px)">
              为某个元素的<Code>background-image</Code>添加包含
              <Code>paint.js</Code>提供方法的属性值并用运用遮罩实现超椭圆
            </List.Item>
          )}
          <Code block my="md">
            {CODE_BLOCK_9}
          </Code>
        </List>
        <Text>{t("20210331.sec5.p10")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/18.png" />
        <Title order={3}>{t("20210331.sec6.title")}</Title>
        <Text>{t("20210331.sec6.p1")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/19.png" />
        <Text>{t("20210331.sec6.p2")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/20.jpeg" />
        {i18n.language === "en" ? (
          <Text>
            The <Code>paint</Code> of class inside <Code>registerPaint</Code>{" "}
            have other three parameters like{" "}
            <Code>paint(ctx, geom, props, args)</Code>, besides
            <Code>ctx</Code> .
          </Text>
        ) : (
          <Text>
            <Code>registerPaint</Code>接入的class中的<Code>paint</Code>函数除了
            <Code>ctx</Code>之外，还有另外三个参数，形如
            <Code>paint(ctx, geom, props, args)</Code>。
          </Text>
        )}
        <List>
          {i18n.language === "en" ? (
            <List.Item w="calc(100% - 20px)">
              <Code>ctx</Code> is the context of <Code>canvas</Code> drawing
            </List.Item>
          ) : (
            <List.Item w="calc(100% - 20px)">
              <Code>ctx</Code>可以认为是<Code>canvas</Code>的绘制上下文
            </List.Item>
          )}
          <List.Item w="calc(100% - 20px)">{t("20210331.sec6.p5")}</List.Item>
          <List.Item w="calc(100% - 20px)">{t("20210331.sec6.p6")}</List.Item>
          {i18n.language === "en" ? (
            <List.Item w="calc(100% - 20px)">
              The fourth paramter is the extra array of paramters to be used in{" "}
              <Code>paint</Code> (Chrome 89+)
            </List.Item>
          ) : (
            <List.Item w="calc(100% - 20px)">
              第四个参数是在css中调用<Code>paint</Code>时的参数数组。(Chrome
              89+)
            </List.Item>
          )}
        </List>
        <Text>{t("20210331.sec6.p8")}</Text>
        <Code block>{CODE_BLOCK_10}</Code>
        <Text>{t("20210331.sec6.p9")}</Text>
        <Anchor
          href="https://chiumungzitalexander.github.io/superellipse-css-houdini/"
          target="_blank"
        >
          Demo
        </Anchor>
        <Image maw={360} mx="auto" src="/blogs/20210331/21.gif" />
        <Text>{t("20210331.sec6.p10")}</Text>
        <Text>{t("20210331.sec6.p11")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210331/22.png" />
      </Stack>
    </Template>
  );
};

export default Blog20210331;
