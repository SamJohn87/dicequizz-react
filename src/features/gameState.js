import { createContext } from "react";

export const initialState = {
    isLoading: true,
    errMsg: '',
    gameStarted: false,
    dice: [],
    timer: 0,
    trivia: null,
    category: 'general_knowledge',
    numQuestions: 50,
    questionIdx: null,
    showAnswer: false,
    points: 0,
    listPlayers: []
};

export const listReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GAME': //add the trivia questions to the game state
            return {
                ...state,
                isLoading: false,
                errMsg: '',
                trivia: action.payload
            };
        case 'ERR_MSG':
            return {
                ...state,
                isLoading: false,
                errMsg: action.payload
            };
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                category: action.payload[0],
                numQuestions: action.payload[1]
            };
        case 'ADD_PLAYER':
            return {
                ...state,
                listPlayers: [...state.listPlayers, {
                    id: state.listPlayers.length,
                    name: action.payload,
                    points: 0,
                    isPlaying: false
                }]
            };
        case 'START_GAME':
            return {
                ...state,
                gameStarted: true
            };
        case 'NEXT_QUESTION':
            return {
                ...state,
                dice: [],
                timer: 0,
                listPlayers: state.listPlayers.map((player) => ({ ...player, isPlaying: false }))
            }
        case 'IS_PLAYING':
            return {
                ...state,
                listPlayers: state.listPlayers.map((player) =>
                    player.id === action.payload ? { ...player, isPlaying: true } : player
                )
            };
        case 'ROLL_DICE': //each time dice are rolled new question is shown and timer is define
            return {
                ...state,
                timer: (action.payload[0] + action.payload[1]),
                dice: [action.payload[0], action.payload[1]],
                questionIdx: state.questionIdx != null ? state.questionIdx + 1 : 0,
                showAnswer: false
            };
        case 'SHOW_ANSWER':
            return {
                ...state,
                showAnswer: !state.showAnswer
            };
        case 'ADD_POINTS':
            return {
                ...state,
                listPlayers: state.listPlayers.map((player) =>
                    player.id === action.payload ? { ...player, points: (player.points + state.timer) } : player
                )
            };
        case 'RESET_GAME':
            return initialState;
        default:
            return state;
    }
};

export const gameContext = createContext();