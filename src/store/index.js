import { createStore } from 'vuex'
import { VueCookieNext } from "vue-cookie-next";
import Router from '../router'
import router from "../router";

export default createStore({
  state: {
    isGame: true,

    round: 1,
    win: 0,

    play: null,
    botPlay: null
  },

  actions: {
    goRouteGame() {
      Router.push('/game')
    },

    startGame({ dispatch }) {
      let cookie = {
        "round": 1,
        "win": 0
      }

      VueCookieNext.setCookie('game', JSON.stringify(cookie))

      dispatch('goRouteGame')
    },

    resumeGame({ state }) {
      let cookie = VueCookieNext.getCookie('game')

      state.round = cookie.round
      state.win = cookie.win
    },

    isGame({ state }) {
      let cookie = VueCookieNext.getCookie('game')
      if (cookie)
        state.isGame = false
    },

    parseResponse({ state }, { play, user }) {
      if (play === 'stone')
        if (user == 'player')
          state.play = 1
        else
          state.botPlay = 1

      else if (play === 'paper')
        if (user == 'player')
          state.play = 2
        else
          state.botPlay = 2

      else if (play === 'scissors')
        if (user == 'player')
          state.play = 3
        else
          state.botPlay = 3

      else if (play == 1)
        if (user == 'player')
          state.play = 'Pierre'
        else
          state.botPlay = 'Pierre'

      else if (play == 2)
        if (user == 'player')
          state.play = 'Papier'
        else
          state.botPlay = 'Papier'

      else if (play == 3)
        if (user == 'player')
          state.play = 'Ciseaux'
        else
          state.botPlay = 'Ciseaux'
    },

    async getPlay({ state, dispatch }, play) {
      await dispatch('parseResponse', { play: play, user: 'player' })

      await dispatch('botPlay')

      await dispatch('saveResult', { player: state.play, bot: state.botPlay })
      dispatch('whoWin')
    },

    async botPlay({ state }) {
      state.botPlay = await Math.floor(Math.random() * Math.floor(3)) + 1
    },

    async saveResult({ state, dispatch }, { player, bot }) {
      console.log(player)
      console.log(bot)
      await dispatch('parseResponse', { play: player, user: 'player' })
      await dispatch('parseResponse', { play: bot, user: 'bot' })

      console.log(state.play)
      console.log(state.botPlay)
      localStorage.setItem('player', state.play)
      localStorage.setItem('bot', state.botPlay)
    },

    whoWin({ state }) {
      state.isWin = true

      if (state.play == state.botPlay)
        state.isWin = null

      if ((state.play === 1 && state.botPlay === 2) || (state.play === 2 && state.botPlay === 3) || (state.play === 3 && state.botPlay === 1))
        state.isWin = false

      router.push('result')
    },

    continueGame({ state, dispatch }) {
      let cookie = VueCookieNext.getCookie('game')

      if (state.isWin != null) {
        cookie.round += 1
        state.round = cookie.round
      }

      if (state.isWin == true) {
        cookie.win += 1
        state.win = cookie.win
      }

      VueCookieNext.setCookie('game', JSON.stringify(cookie))
      if (cookie.win == 3 || (cookie.round - 1) - cookie.win == 3)
        router.push('finish')
      else
        dispatch('goRouteGame')
    },

    returnMenu() {
      VueCookieNext.removeCookie('game')
      router.push('/')
    }
  }
})
