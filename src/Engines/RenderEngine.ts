import { ReferenceManager } from './ReferenceManager';
import { IViewService } from './IViewService';
import { IViewObject } from '../ViewObjects/IViewObject';
import { ComposableView } from '../ViewComposition/ComposableView';

export class RenderEngine{

    private observers: IViewObject[] = [];
    private services: IViewService[] = [];
    private isRunning: boolean = false;
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private referenceManager: ReferenceManager =  new ReferenceManager();
    private _scale: number = 1;
    public get scale(): number{
        return this._scale;
    }
    public set scale(scale: number){
        this._scale = scale;
    }

    private static _instance: RenderEngine = new RenderEngine();
  
    private constructor() {
        if(RenderEngine._instance){
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        RenderEngine._instance = this;
    }
 
    public static getInstance(): RenderEngine
    {
        return RenderEngine._instance;
    }

    public setCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D,){
        this.context = context;
        this.canvas = canvas;
    }
    /*
    * starts the render loop
    */
    public start(){
        this.isRunning = true;
        requestAnimationFrame(() => {this.run();});
    }

    /*
    * stops the render loop
    */
    public stop(){
        this.isRunning = false;
    }

    /*
    * controls the timing at which the tick is called,
    * for visuals we will rely on the screenrefreshrate from the browser
    */
    private run(){
        //do the timing and call tick a lot
        if(this.isRunning){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.tick();
            requestAnimationFrame(() => {this.run();});
        }
        
    }

    /*
    * updates all of the view objects
    */
    private tick(){
        this.observers.forEach((obj: IViewObject, index) => obj.draw(this.context, this.canvas.width, this.canvas.height));
    }

    /*
    * register a view object to be updated by the game engine
    */
    public register(obj: IViewObject){
        this.observers.push(obj);
    }

    /*
    * unregister a view object to be updated by the game engine
    */
    public unregister(obj: IViewObject){
        this.observers = this.observers.filter( observer => {
            if(observer != obj) return observer;
        });
        if(obj instanceof ComposableView){ //TODO: this code needs to be tested
            this.observers.forEach(observer => {
                (observer as ComposableView).remove(obj);
            })
        }
        this.services.forEach(service => {
            service.remove(obj);
        });
    }

    public addService(obj: IViewService){
        this.services.push(obj);
    }

    public addReferenceToStage(object: Object, stage: string){
        this.referenceManager.addReferenceToStage(object, stage);
    }

    public getReferencesForStage(stage: string){
        return this.referenceManager.getReferencesForStage(stage);
    }
}