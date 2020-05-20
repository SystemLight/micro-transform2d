# transform2d

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
let t2d = new Transform2D(tou.el)
t2d.setRotate(rotate).setTranslate(5, 5);
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

# Resources

You can read [transform2d Documentation](https://github.com/SystemLight/micro-transform2d) online for more information.

# License

micro-transform2d uses the MIT license, see LICENSE file for the details.
