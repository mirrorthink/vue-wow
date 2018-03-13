# Vue-wow

## Features

* Ispire by wow.js Reveal CSS animation as you scroll down a page

## Usage

```bash
# install
$ npm install  v-wow
```

```html
<div class="class="holder fadeInUp"" v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s'}"></div>
```

```css
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-timing-function: ease-out;
}
```
