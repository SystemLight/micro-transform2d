# micro-transform2d

[![NPM version](https://img.shields.io/npm/v/micro-transform2d.svg)](https://www.npmjs.com/package/micro-transform2d)

A tool for quickly setting CSS Transform  
NPM page: https://www.npmjs.com/package/micro-transform2d

# Installation

```
npm install micro-transform2d --save
```

# User Guide

```
import {Transform2D} from "micro-transform2d";
let t2d = new Transform2D(tou.el);
t2d.setRotate(rotate).setTranslate(5, 5);
```

```
注意变换是有顺序区分的，如果你要求变换安装一定顺序请初始化时这样操作
import {Transform2D} from "micro-transform2d";
let t2d = new Transform2D(tou.el);
Translate会在rotate之前执行
t2d.setTranslate().setRotate();
```

```
设置相对值
import {Transform2D} from "micro-transform2d";
let t2d = new Transform2D(tou.el);
t2d.setTranslate(x, y, true);

注意setScale的开启相对值设置时是基于当前大小进行伸缩
如当前是1，传入1.5，伸缩值为1.5，
如当前是2，传入0.5，伸缩值为1，
除此之外setScale的relative参数不是接收布尔值，而是接收number或者函数

当设置relative为number时，基于这个值进行收缩，
当设置relative为函数时时，接收一个数组为当前元素的收缩值和传入的sca值，返回sca值为想要设置的收缩值
通过函数可以更加灵活控制sca值
t2d.setScale(scale, function (val) {
    let sca = relativeSca * val[1];
    return sca < 0.6 ? 0.6 : sca;
});

除了setScale之外，其余方法relative参数均为布尔值，相对于元素当前偏移值增加传入值
```

# Note

- new Transform2D(el)
    - el: DOM对象
    
- getMatrix() : 获取Matrix属性，返回是一个大小为6的数组，代表变换矩阵
- setMatrix([1,0,0,1,0,0]) : 设置Matrix属性
- getTranslate() : 获取偏移translate
- setTranslate(x,y) : 设置偏移translate
- getScale() : 获取缩放比例
- setScale(sca) : 设置缩放比例，原比例是1
- getRotate() : 获取旋转角度
- setRotate(angle) : 设置旋转角度
- getSkew() : 获取斜切属性
- setSkew(xAngle,yAngle) : 设置斜切属性

- radian2angle() : 弧度转角度
- angle2radian() : 角度转弧度
- transform() : 获取transform属性
- setTransform(result: RegExpMatchArray | null, val: string) : 

- reset() : 清除变换顺序用于重新初始变换应用顺序

- origin() : 获取变换原点
- setOrigin() : 设置变换原点

# Resources

You can read [transform2d Documentation](https://github.com/SystemLight/micro-transform2d) online for more information.

# License

micro-transform2d uses the MIT license, see LICENSE file for the details.
