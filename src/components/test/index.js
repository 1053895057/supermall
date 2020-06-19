// import Test from './test.vue'
// Test.install=function(Vue){
//     Vue.component(Test.name,Test)
// }
// export default Test

import Test from './test.js'
Test.install=function(Vue){
    Vue.component(Test.name,Test)
}
export default Test