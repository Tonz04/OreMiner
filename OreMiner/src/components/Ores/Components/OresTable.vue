<template>
    <div class="flex-grow">
        <div class="flex flex-col place-content-end h-full">
            <div class="flex gap-x-2 place-content-center">
                <div v-for="ore of gameState.ores">
                    <div class="border border-white rounded-lg w-20 h-12 flex gap-x-2 justify-center items-center">
                        <img :src="'images/' + OreType[ore.oreType] + '.png'" class="h-5 w-5" />
                        <div>
                            {{ ore.quantity }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';

import GameState, { GameStateProvideModule } from '../../../models/GameState';
import { OreType } from '../../../models/Ores/OreType';

const gameState = inject(GameStateProvideModule) as Ref<GameState>;
</script>