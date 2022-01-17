@Component("Platform")
export class Platform{
    public startPos:Vector3
    public endPos:Vector3
    public moveTime: number = 2
    public waitTime: number = 1

    private currentTime: number = 0

    public constructor(startPositionTransform: Transform, direction:Vector3){
        this.startPos = startPositionTransform.position.clone()
        this.endPos = this.startPos.add(direction)
    }

    /***
     * @returns new position of platform
     */
    public step(dt: number):Vector3{
        this.currentTime += dt
        this.currentTime %= (this.moveTime*2)+(this.waitTime*2)

        if(this.currentTime<this.moveTime){
            // move forward
            let currentMoveTime = this.currentTime
            let currentMoveTimeNormalized = currentMoveTime/this.moveTime
            return Vector3.Lerp(this.startPos,this.endPos,currentMoveTimeNormalized)
        }else if(this.currentTime<this.moveTime+this.waitTime){
            // wait
            return this.endPos
        }else if(this.currentTime<this.moveTime*2+this.waitTime){
            // move back
            let currentMoveTime = this.currentTime - this.moveTime - this.waitTime
            let currentMoveTimeNormalized = currentMoveTime/this.moveTime
            return Vector3.Lerp(this.endPos,this.startPos,currentMoveTimeNormalized)
        }else{
            // wait
            return this.startPos
        }
    }
}

class PlatformSystem implements ISystem{
    update(dt: number){
        for(const entity of engine.getComponentGroup(Platform).entities){
            let p = entity.getComponent(Platform)
            let t = entity.getComponent(Transform)

            t.position = p.step(dt)
        }
    }
}

engine.addSystem(new PlatformSystem)