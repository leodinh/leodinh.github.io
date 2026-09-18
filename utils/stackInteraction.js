import { STACK_WORK } from './aboutPage.js';

export function getWorkSkills(id) {
    return STACK_WORK.find((work) => work.id === id)?.skills ?? [];
}

export function activeStackWork(state) {
    return state.focused ?? state.hovered ?? state.selected ?? null;
}

export function stackInteraction(state, action) {
    switch (action.type) {
        case 'hover':
            return { ...state, hovered: action.id };
        case 'focus':
            return { ...state, focused: action.id };
        case 'toggle':
            return { ...state, selected: state.selected === action.id ? null : action.id };
        case 'blur':
            return { ...state, focused: null, selected: null };
        default:
            return state;
    }
}
