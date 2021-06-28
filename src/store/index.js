import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:{
            name: 'Md.Shariful Islam Khan',
            email: 'sharifislamkhan24@gmail.com',
            title: 'I am a Junior Software Engineer',
            image: 'sk.png'
        }

    },
    getters: {
        GetUser(state) {
            return state.user;
        }
    }
    
});