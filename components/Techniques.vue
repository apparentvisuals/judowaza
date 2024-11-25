<template>
    <div class="flex flex-wrap w-full" :class="right ? 'flex-row-reverse' : 'flex-row'">
        <div class="flex-1">
            <slot name="image" />
        </div>
        <div class="flex-1 pl-2">
            <p v-if="right">right</p>
            {{ right }}
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps(['left', 'right']);
</script>