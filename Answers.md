1. What problem does the context API help solve?
Context API is a state management feature that we can use in React to not have to pass down every state from the parent component to a child component. It helps us have access to all the state in our app, regardless how nested we are.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`action`is what we want to do when we trigger an element in our browser.
`reducer`is a function which takes two arguments – the current state and an action – and returns a new state object based on both arguments.
`store` a place where all our states are stores and where all state changes are handled.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, and component state is local. We use application state when we want our props to be use globally, and component state when we want to pass down a specific props to a child component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk let us make API calls from our action creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
I like Redux, because we have very simple step to follow in order to apply it. We can distinctely design what we need (state), what we want to do (action), one function (our reducer), and inject it into our app globally. 
