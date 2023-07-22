<template>
    <div class="h-full">
        <div class="h-full flex place-content-center">
            <div class="w-full m-2 border border-white">
                <div class="flex flex-col h-full">
                    <OresHeader />
                    <OresBody />
                    <OresTable />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, inject } from 'vue';

import GameState, { GameStateProvideModule } from '../../models/GameState';

import OresHeader from "./Components/OresHeader.vue";
import OresBody from "./Components/OresBody.vue";
import OresTable from "./Components/OresTable.vue";

const gameState = inject(GameStateProvideModule) as Ref<GameState>;
</script>