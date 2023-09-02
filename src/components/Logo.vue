<script setup>
const prop = defineProps({
	first: {
		type: String,
		required: true
	},
	last: {
		type: String,
		requierd: true
	}
})
</script>
<template>
	<div class="logo">
		<div class="first">{{ first }}</div>
		<div class="last">{{ last }}</div>
	</div>
</template>
<style scoped>
.logo {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	margin: 1rem;
	font-size: 60px;
	font-weight: 700;
	font-family: Arial, Helvetica, sans-serif;
}

.first {
	color: white;
}

.last {
	color: black;
	background-color: #ff9000;
	border-radius: 7px;
	padding: 5px 10px;
}
</style>