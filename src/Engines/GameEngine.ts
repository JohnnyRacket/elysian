import { IModelService } from './IModelService';
import { ReferenceManager } from './ReferenceManager';
import { IGameObject } from '../GameObjects/GameObject.interface';

/*
* This class is a Singleton
*/

export class GameEngine{
    /*
     * Member variables
     */
    private interval;
    private isRunning: boolean = false;
    private observers: IGameObject[] = [];
    private tickLength: number = 33;
    private referenceManager: ReferenceManager = new ReferenceManager();
    private services: IModelService[] = [];

    private static _instance: GameEngine = new GameEngine();
  
    private constructor() {
        if(GameEngine._instance){
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        GameEngine._instance = this;
        //this.register(this.collisionManager);
        //add collision manager to the ticks, add functions for adding and removing stuff
    }
 
    public static getInstance(): GameEngine
    {
        return GameEngine._instance;
    }

    /*
    * Starts the game loop
    */
    public start(){
        //start loop the calls tick on a set interval
        this.isRunning = true;
        this.run();
    }

    /*
    * stops the game loop
    */
    public stop(){
        //stop looping
        this.isRunning = false;
        clearInterval(this.interval);
    }

    /*
    * runs the game loop and sets the timing
    */
    private run(){
        this.interval = setInterval(() => {this.tick();}, this.tickLength);
    }

    /*
     * Tick represents the passing of time in the game
     * and is used to progress the game through it's sequence
     */
    public tick(){
        this.observers.forEach((obj: IGameObject, index) => obj.tick());
        this.services.forEach((obj: IModelService, index) => obj.tick());
        //this.controllerManager.controllers.forEach((obj: IGameObject, index) => obj.tick());
        //GameMap.getInstance().printPositions();
    }

    /*
     * Register adds game objects to the list of observers
     * to be updated throught the game as time passes
     */
    public register(obj: IGameObject){
        this.observers.push(obj);
    }
    /*
     * Unregister removes game objects from being updated as time
     * progresses in the game
     */
    public unregister(obj: IGameObject){
        obj.dispose();
        this.observers = this.observers.filter( observer => {
            if(observer != obj) return observer;
        });
        
        this.services.forEach(service => {
            service.remove(obj);
        });
    }

    public addService(obj: IModelService){
        this.services.push(obj);
    }

    public addReferenceToStage(object: Object, stage: string){
        this.referenceManager.addReferenceToStage(object, stage);
    }

    public getReferencesForStage(stage: string){
        return this.referenceManager.getReferencesForStage(stage);
    }
}
