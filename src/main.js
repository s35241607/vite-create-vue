import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(
	createVuetify({
		icons: {
			defaultSet: "mdi", // This is already the default value - only for display purposes
		},
		components,
		directives,
		theme: {
			defaultTheme: "dark",
		},
	})
);

// 在應用程式中使用 app.use 設定全域屬性
app.config.globalProperties.$api = axios.create({
	baseURL: "https://api.example.com",
	timeout: 10000,
});

app.mount("#app");
