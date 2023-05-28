import { defineStore } from 'pinia'
import { getRandomPerson } from 'randomize-person'

const useStore = defineStore('person', {
    state: () => ({
      person: null,
    }),
    getters: {
        getPerson({ person }) {
            if (!person) return
            return person
        },
    },
    actions: {
        loadPerson() {
            const person = getRandomPerson()
            this.person = person
        },
    },
})

export default useStore