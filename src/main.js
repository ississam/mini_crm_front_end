import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



createApp(App).use(router).use(router).mount('#app')

// router.beforeEach((to, from, next) => {
// 	console.log("localStorage.email");
// 	//   if ((localStorage.email)) {
// 	//         next();
// 	//   } else {
// 	// 	next({
// 	// 		path: "/login",
// 	// 		replace: true,
// 	// 	});
// 	//   }
// });
