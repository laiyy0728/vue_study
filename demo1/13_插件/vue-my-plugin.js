/*
    Vue 的自定义插件库
 */

(function () {

    // 需要向外暴露的插件对象
    const MyPlugin = {}

    // 插件对象必须有一个 install 方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // some logic ...
            console.log('Vue 函数对象的方法：myGlobalMethod')
        };

        // 2. 添加全局资源
        Vue.directive('my-directive',function (el, binding) {
            el.textContent = binding.value.toUpperCase()
        })

        // 3、添加实例方法
        Vue.prototype.$myMethod = function () {
            console.log('Vue 实例对象方法：$myMethod')
        }

    }

    window.MyPlugin = MyPlugin

})();