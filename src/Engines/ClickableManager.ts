import { RenderEngine } from './RenderEngine';
import { ClickHandler } from '../Clickables/ClickHandlers/ClickHandler';
import { IViewService } from './IViewService';
import { Clickable } from '../Clickables/Clickable';

export class ClickableManager implements IViewService{

    private clickables: Clickable[] = [];
    public clickInterceptor: ClickHandler;
    private _canvas: HTMLCanvasElement;
    public set canvas(canvas: HTMLCanvasElement){
        this._canvas = canvas;
        this._canvas.addEventListener('click', (evt) => {
            this.clickEvents(evt);
        },false);
    }

    private static _instance: ClickableManager = new ClickableManager();
    
      private constructor() {
          if(ClickableManager._instance){
              throw new Error("Error: Instantiation failed: Use ClickableManager.getInstance() instead of new.");
          }
          ClickableManager._instance = this;
          //this.register(this.collisionManager);
          //add collision manager to the ticks, add functions for adding and removing stuff
      }
   
      public static getInstance(): ClickableManager
      {
          return ClickableManager._instance;
      }


    private get scale(){
        return RenderEngine.getInstance().scale;
    }

    add(object: Object) {
        try{
            this.clickables.push(object as Clickable);
        }catch (err){
            console.log("You can only add objects of type Clickable to the ClickableManager");
        }
    }
    remove(object: Object) {
        let clickable = object as Clickable;
        this.clickables = this.clickables.filter(element => {
            if(element != clickable) return element;
        });
    }


    private clickEvents(event: MouseEvent){
        //console.log(event.x, event.y)
        let x = event.x / this.scale;
        let y = event.y / this.scale;
        if(this.clickInterceptor) this.clickInterceptor.handle(event);
        else{
            this.clickables.forEach((obj: Clickable, index) => {
                if(x  >= obj.getGlobalX() && x <= (obj.getGlobalX() + obj.getWidth()) &&
                    y >= obj.getGlobalY() && y <= (obj.getGlobalY() + obj.getHeight())) {
                        console.log("click match found ", obj);
                        obj.click();
                    };
                ///obj.click()
            });
        }
    }


    public addClickable(clickable: Clickable){
        this.clickables.push(clickable);
    }
}