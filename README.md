I completed the concept of react use state in which I create a state that store and track the property name color and the setColor function that update the color property
# what can state hold ? 
The useState hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
# example is in the app.jsx file now  
so in next step I completed the learning of use multiple useState in the MultipleUseState.jsxfile
# one more thing like
I also saparate the OneUseState.jsx for use only one useState into file
# second thing like
saparate the MultiPleState.jsx for use MultipleUseState.jsx file

# why I write multiple useState in example: 

because I want to learn things like one thing is useState contains many type of items like string, number, objects , arrays so thats why I implement that thing

one more thing like we also created multiple usestates into one component

# so can we do things of multiple useState with only one useState : 

so the answer is yes 
we will do this with the help of an object

so for this i create new component that name is MultipleUseStateAlt

because it is alternatiive of this 

# When state is updated, the entire state gets overwritten.

means if we use two usestates 

const [brand, setBrand] = useState("ford")
const [model, setModel] = useState("Model")

now i want to update brand

setBrand("BMW")

so here model still same but brand changed

in another example that purely define the our man heading concept like how if we update the state than it overwrite the previous one

suppse we create a state: 

const[car, setCar] = useState({
    brand: "ford",
    model: "mustang",
    year: "0234"
    color: "pink"
})

is i want to change the color 

so my mind says like this: 

setCar({color: "blue"})

so basicly it didnt give an error but it is wrong way like it overrite whole previous object

like the object we have:
{
    brand: "ford",
    model: "mustang",
    year: "0234"
    color: "pink"
}

become: 
{
    color: "blue"
}

👉 Notice what happened:

✅ color is updated

❌ brand, model, and year are GONE (because the whole state object was replaced).

so what is the correct way to doing:

setcolor(prevCar =>({
...prevCar,  // spread all previous properties
color: "red" // overrite only color
}) )

so now one more important thing is clear like 
i have one doubt that is like that prevCar why it is a currentState so
the answer is 

whenever we want to change the state 

we have two option 

1. setCar({color: "black"})
2. pass the function 

setCar(prevState => ({...prevState,color:"yellow"}) )

so my doubt is remove like if we want to change the state the whole functino is like to change the state and the prevState is a current state that is passed by react itself with their memory system as argument like if we put here any name argument that is our currentState and that is the object or any thing like string , variable, numbers , array everything can be

so that's how we overcome the problem of overwriten in state with the help of spread , arrow function and argument,