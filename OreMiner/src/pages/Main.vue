<template>
    <div class="grid grid-cols-2 h-screen">
        <div>
            <MenuMain />
        </div>
        <div>
            <OresMain />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, provide, ref } from "vue";

import OresMain from "../components/Ores/OresMain.vue";
import MenuMain from "../components/Menu/MenuMain.vue";

import GameManager from "../services/GameManager";
import GameState, { GameStateProvideModule } from "../models/GameState";

const gameState: Ref<GameState> = ref(GameManager.InitializeGameState());
provide(GameStateProvideModule, gameState);
</script>