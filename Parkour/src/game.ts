import { Platform } from "./platform";
import { scene } from "./scene";

scene.platform.entity.addComponent(new Platform(scene.platform.transform,new Vector3(0,5,0)))

scene.platform2.entity.addComponent(new Platform(scene.platform2.transform,new Vector3(-7,0,0)))

