import {defineStore} from 'pinia'
import {Player} from '@/classes/player/player'
import {ref} from "vue";

export const usePlayerStore = defineStore('player', () => {
    const player = ref<Player | null >(null)

    const createPlayer = () => {
        player.value = new Player()
    }

    return {player, createPlayer}
})
