import { ICamera } from "./ICamera";
import { IViewObject } from "../ViewObjects/IViewObject";
import { ComposableView } from "../ViewComposition/ComposableView";

export abstract class Camera implements ICamera{

    //TODO: add code to re-order objects in case its needed, i.e move forward, move to fornt, to back, backward
    
    protected activeViewObjects: IViewObject[] = [];
    protected backgroundViewObjects: IViewObject[] = [];

    public addActiveObject(object: IViewObject) { this.activeViewObjects.push(object); }
    public addBackgroundObject(object: IViewObject){ this.backgroundViewObjects.push(object); }

    public removeActiveObject(object: IViewObject){
        this.activeViewObjects = this.activeViewObjects.filter( observer => {
            if(observer != object) return observer;
        });
        if(object instanceof ComposableView){ //TODO: this code needs to be tested
            this.activeViewObjects.forEach(observer => {
                (observer as ComposableView).remove(object);
            })
        }
    }
    public removeBackgroundObject(object: IViewObject){
        this.backgroundViewObjects = this.backgroundViewObjects.filter( observer => {
            if(observer != object) return observer;
        });
        if(object instanceof ComposableView){ //TODO: this code needs to be tested
            this.backgroundViewObjects.forEach(observer => {
                (observer as ComposableView).remove(object);
            })
        }
    }
    public removeObject(object: IViewObject){ //less efficient, for lazy coders, or some weird scenario
        this.backgroundViewObjects = this.backgroundViewObjects.filter( observer => {
            if(observer != object) return observer;
        });
        if(object instanceof ComposableView){ //TODO: this code needs to be tested
            this.backgroundViewObjects.forEach(observer => {
                (observer as ComposableView).remove(object);
            })
        }
        this.backgroundViewObjects = this.backgroundViewObjects.filter( observer => {
            if(observer != object) return observer;
        });
        if(object instanceof ComposableView){ //TODO: this code needs to be tested
            this.backgroundViewObjects.forEach(observer => {
                (observer as ComposableView).remove(object);
            })
        }
    }

    public abstract draw(context: CanvasRenderingContext2D, width: number, height: number);
}