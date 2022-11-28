import { createStore } from "vuex"
import { getRandomPerson } from 'randomize-person'

const store = createStore({
    state: {
        person: null,
    },
    mutations: {
        setPerson(state, { person }) {
            state.person = person
        },
    },
    getters: {
        person({ person }) {
            if (!person) return
            return person
        },
    },
    actions: {
        loadPerson({ commit }) {
            const person = getRandomPerson()
            commit({ type: 'setPerson', person })
            return person
        },
    },
})

export default store