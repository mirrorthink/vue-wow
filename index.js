export default {
    /**
     * install function
     * @param  {Vue} Vue
     * @param  {object} options  lazyload options
     */
    install(Vue, options = {}) {
        Vue.directive("wow", {
            bind(el, binding) {
                let animateCofig = binding.value;
                el.style.visibility = "hidden";
                el.style["animation-name"] = "none";
                let offsetTop = function(element) {
                    var top;
                    while (element.offsetTop === void 0) {
                        element = element.parentNode;
                    }
                    top = element.offsetTop;
                    while ((element = element.offsetParent)) {
                        top += element.offsetTop;
                    }
                    return top;
                };
                let isVisible = function(el) {
                    var top, viewBottom, viewTop;
                    viewTop = window.pageYOffset;
                    viewBottom = viewTop + window.innerHeight;
                    top = offsetTop(el);
                    return top <= viewBottom;
                };
                let isShow = function(el, animateCofig) {
                    if (isVisible(el)) {
                        el.style.visibility = "visible";
                        for (name in animateCofig) {
                            el.style[name] = animateCofig[name];
                        }
                        window.removeEventListener("scroll", fandelScroll);
                    }
                };
                var lastClick = Date.now();
                let fandelScroll = function() {
                    var rate = 100;
                    if (Date.now() - lastClick >= rate) {
                        isShow(el, animateCofig);
                        lastClick = Date.now();
                    }
                };
                setTimeout(function() {
                    isShow(el, animateCofig);
                }, 1);
                var scrolling = false;

                window.addEventListener("scroll", fandelScroll);
            }
        });
    }
};