<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Logo from './components/Logo.vue'
import { ref } from 'vue';

const drawer = ref(false);
</script>

<template>
	<v-app>
		<v-navigation-drawer app v-model="drawer">
			<Logo first="Lan" last="Hub"></Logo>
			<v-divider></v-divider>
			<v-list density="compact" nav>
				<v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
				<v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>App 標題</v-toolbar-title>
			<v-btn text to="/" class="mr-2">Home</v-btn>
			<v-btn text to="/about">About</v-btn>
			<v-spacer></v-spacer>
		</v-app-bar>

		<v-main>
			<!-- 主要內容區域 -->
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<style scoped></style>
