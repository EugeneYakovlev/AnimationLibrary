# AnimationLibrary
Web app for creating animation.

[LIVE VERSION](https://eugeneyakovlev.github.io/AnimationLibrary/)

With this app you can easily create cross-browser animations for you to use in your projects.
There are some animations presets for blocks and text.

In src folder you can find library of animations. Default and minified versions.

# Usage
1. Include the stylesheet on your document's `<head>`

```
<head>
  <link rel="stylesheet" href="css/animation.css">
</head>
```

2. Add style created in app to your block in **css** file

```
.animationClass {
  animation: bounce-in-right 1s ease-in-out 0s 1 normal both;
}
```

or in **html** file

```
<div class="animationBlock" style="animation: bounce-in-right 1s ease-in-out 0s 1 normal both;"></div>
```

