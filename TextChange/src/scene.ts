// GENERATED BY DCL-EDIT
// DO NOT MODIFY

const screenFrame2 = new Entity("Screen Frame")
engine.addEntity(screenFrame2)
const screenFrame2transform = new Transform({
  position: new Vector3(10.331, 1, 8.087),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 1.75, 2.75)
})
screenFrame2.addComponentOrReplace(screenFrame2transform)
const screenFrame2boxShape = new BoxShape()
screenFrame2.addComponentOrReplace(screenFrame2boxShape)

const screen3 = new Entity("Screen")
engine.addEntity(screen3)
const screen3transform = new Transform({
  position: new Vector3(10.197, 1, 8.087),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.25, 1.5, 2.5)
})
screen3.addComponentOrReplace(screen3transform)
const screen3boxShape = new BoxShape()
screen3.addComponentOrReplace(screen3boxShape)

const screenText4 = new Entity("screen text")
engine.addEntity(screenText4)
const screenText4transform = new Transform({
  position: new Vector3(10.0504, 1, 8.06666),
  rotation: new Quaternion(0, 0.7071066, 0, 0.707107),
  scale: new Vector3(1, 1, 1)
})
screenText4.addComponentOrReplace(screenText4transform)

export let scene = {
  screenFrame:{
    entity: screenFrame2,
    transform: screenFrame2transform,
    boxShape: screenFrame2boxShape,
  },
  screen:{
    entity: screen3,
    transform: screen3transform,
    boxShape: screen3boxShape,
  },
  screenText:{
    entity: screenText4,
    transform: screenText4transform,
  },
}

