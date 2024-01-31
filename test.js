const icons = {
    user:{
        svg_path:"folan user",
    },
    camera:{
        svg_path:"folan camear",
    },
    plus:{
        svg_path:"folan plus",
    },
    minus:{
        svg_path:"folan minus",
    }
}

const props = {
    name: "user",
    color: "red"
}


const icon = icons[props.name] // for object
// const icon = icons.find(i=>i.) // for array

console.log(icons)
console.log(props)
console.log(icon)
