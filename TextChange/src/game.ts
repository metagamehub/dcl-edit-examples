import {scene} from 'scene';

// Create mats
let frameMat = new Material
frameMat.albedoColor = Color4.Gray()

let screenMat = new Material
screenMat.albedoColor = Color4.Black()

// Set mats
scene.screenFrame.entity.addComponent(frameMat)
scene.screen.entity.addComponent(screenMat)

// Setup text
let text = new TextShape("lorem ipsum")
text.fontSize = 3
scene.screenText.entity.addComponent(text)

// Setup click event
let clickListener = new OnPointerDown(
    (event)=>{
        text.value = "next text"
    }
    ,{
        button: ActionButton.POINTER
    })
scene.screen.entity.addComponent(clickListener) // add to the screen and not to the text. Text has no hit box
