# n2ex

vue ssr v2ex，because it depends on nuxt so called n2ex

## Performance

* Lighthouse [100/100](http://orkj5d055.bkt.clouddn.com/n2ex-sehiddtque.now.sh_2017-06-26_18-43-12.html) - Webpagetest

## Features

* Ispire by wow.js Reveal CSS animation as you scroll down a page

## Usage

````bash
# install
$ npm install  v-wow
 ```html
<div class="class="holder fadeInUp"" v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s'}"></div>
````

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
