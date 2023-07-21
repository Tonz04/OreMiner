<template>
    <div class="grid grid-cols-2 h-screen">
        <div>
            <MenuMain />
        </div>
        <div >
            <OresMain />
        </div>
    </div>
</template>

<script setup lang="ts">
import OresMain from "../components/Ores/OresMain.vue";
import MenuMain from "../components/Menu/MenuMain.vue";
</script>