// export default {
//     install(Vue){
//         Vue.directive('Square',(el,binding)=>{
//             el.innerHTML = Math.pow(binding.value,2);
//         });
//         Vue.directive('sqrt',(el,binding)=>{
//             el.innerHTML = Math.sqrt(binding.value);
//         })
//     }
// }

VueMathPlugin = {
    install(Vue){
        Vue.directive('Square',(el,binding)=>{
            el.innerHTML = Math.pow(binding.value,2);
        });
        Vue.directive('sqrt',(el,binding)=>{
            el.innerHTML = Math.sqrt(binding.value);
        })
    }
}