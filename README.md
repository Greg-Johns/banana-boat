# Banana Boat

## Using Unstated for global state in React apps

Let's say you need to build a bannana boat rental app. Your into React so you ```creact-react-app bannana-boat``` and take a look at the mockup the UX department sent over.

<pic of comps>

Looking past the corny graphics the UI showes 'Jane' 4 similar looking controls. One of them is active while the other have a checkBox for activation. For each 'active' boat control Jane can select up to 6 people as well as input the number of bananas each boat will take. Bob runs a full service banana banana boat operation not one of those BYOBananas banana boat shops. 

Right, well. We'll need a reusable stateful Boat component to keep track of if the boat is selected and if so how many people/bananas the user is planing for. Notice the 'if' in that last sentence, that means some component logic to determine behaviour in this case diabling inputs and changing some CSS properties and by 'keep track of' means the components local state.

We'll also need to keep global state on all the Boat components and their local state. Their are a lot of solutions and paterns for managing global state in React apps but let's look at one that came out from Jamie 
Builds that uses the context API to make for a simple state managment solution that extends on React's own setState().

Unstated gives use three componet primative for working with global app state, Containters, Providers, and Subscribers. 

## Containers 
Containers give us a place to setup some application state along with methods to update that state.
From the docs:
`Container is a very simple class which is meant to look just like React.Component but with only the state-related bits: this.state and this.setState`
`setState() in Container mimics React’s setState() method as closely as possible.`

So calling setState() in the Container will cause any component subscribed to re-render. One refreashing difference is Unstated's Container setState() returns a promise so you can use `async` and `await` in your methods.

## Providers
Providers components are used to store the container instances and allow it's children to subscribe to the instances. Providers should wrap your top most component that will subscribe to a container.


## Subscribers
Subscribers are components that take a `to` render prop to pass state and methods from the Container into your component. Note: The `to` prop takes an array so you can pass multiple state container instances to the component.

With that let's turn back to our banana boat app and set up a Container for our global state and methods we will need for updating.

BoatContainer code
Refresh logic

this give us a boats array where each item in the array has a enabled boolean a peopleCount and bananaCount property. As well I've added method for setPeopleCount, setBananaCount, disable/enableBoats and a calcTotals. We want the state to presist on the user refreshing the browser so along with setting the state our methods also save to localStorage. That way we can check if localStorage is present when the component is instantiated and just hydrate our state from their.

We will import this into the BoatCard component along with Unstateds Subscribe component. With this we use the Subscriber in our render() method and pass the BoatsContainer to it's `to` render prop.

```
<Subscribe to={[BoatsContainer]}>
        {boatLoad => (
                <jsx />
        )}
</Subscribe>
```
Now we have access to BoatsContainers state and methods through our boatLoad variable.

In our main App comoponent we will need to Subscribe to BoatsContainer to access the boat totals and finnaly we wrap it all in Unstated's Provider component to get it all working. As the app grows we could add to BoatsContainer or separate app state out to more logical state Containers to use where needed.

Overall this give us a easy React like way to manage state in React apps and keeps things simple.

To try this out localy clone this repo and use yarn or npm to run the scripts.

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.

Thanks for checking this repo out and let me know if you have any questions, sugestions or comments.
