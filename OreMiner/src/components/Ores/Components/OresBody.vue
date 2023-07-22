<template>
    <div class="flex-grow">
        <div class="flex justify-center items-center cursor-pointer"
            @click="LevelManager.OnOreClick(gameState, gameState.currentLevel, true)">
            <img :src="gameState.currentLevel.oreImage" class="h-3/4 w-3/4" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, inject } from 'vue';

import GameState, { GameStateProvideModule } from '../../../models/GameState';
import LevelManager from "../../../services/LevelManager";

const gameState = inject(GameStateProvideModule) as Ref<GameState>;
gameState.value.currentLevel = LevelManager.GetLevel(gameState.value);
</script>