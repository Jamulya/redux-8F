import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <App />
  </Provider>
   
);


// let counterDisplay = document.getElementById('counter-display')
// let incrementBtn = document.getElementById('increment')
// let decrementBtn = document.getElementById('decrement')

// incrementBtn.addEventListener('click', () => {
//   let value = counterDisplay.value
//   // let newValue = value + 1; //01
//   let newValue = Number(value) + 1; //'0' + 1 = 01
//   counterDisplay.value = newValue;
// })
// decrementBtn.addEventListener('click', () => {
//   let value = counterDisplay.value
//   let newValue = Number(value) - 1; //'0' + 1 = 01
//   counterDisplay.value = newValue;
// })

// import {createStore} from 'redux';

// const reducer = (state = 0, action)=> {
//   switch(action.type){
//     case 'INC':
//       return state + 1
//     case 'DEC':
//       return state -1
//       default:
//         return state
//   }
// }



// const store = createStore(reducer)

// const increment = {
//   type: 'INC'
// }
// const decrement = {
//   type: 'DEC'
// }

// console.log('--1--', store.getState());
// store.dispatch(increment)

// let counterDisplay = document.getElementById('counter-display')
// let incrementBtn = document.getElementById('increment')
// let decrementBtn = document.getElementById('decrement')

// incrementBtn.addEventListener('click', ()=> {
//   store.dispatch(increment)
//   let value = store.getState()
//   counterDisplay.value = value;
// })
// decrementBtn.addEventListener('click', ()=> {
//   store.dispatch(decrement)
//   let value = store.getState()
//   counterDisplay.value = value;
// })


// incrementBtn.addEventListener('click', ()=> {store.dispatch(increment)})
// decrementBtn.addEventListener('click', ()=> {store.dispatch(decrement)})
// store.subscribe(()=> {counterDisplay.value = store.getState()})



