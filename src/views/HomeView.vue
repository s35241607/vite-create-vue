<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { useCounterStore } from '../stores/counter.js'

const exampleStore = useCounterStore(); // 替換成您的Store名稱


</script>

<template>
	<main>
		<TheWelcome />
	</main>
</template>
