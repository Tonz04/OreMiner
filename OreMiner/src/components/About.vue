<template>
    about
</template>

<script setup lang="ts">
import { SaveStateStoreManager } from "../stores/SaveStateStore";

SaveStateStoreManager.setSaveState({ prova: Math.random() });
const currentSaveState = SaveStateStoreManager.getSaveState();
console.log(currentSaveState)

</script>