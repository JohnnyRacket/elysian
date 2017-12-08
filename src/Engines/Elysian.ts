import { RenderEngine } from "./RenderEngine";
import { GameEngine } from "./GameEngine";
import { CollisionManager } from "./CollisionManager";
import { ClickableManager } from "./ClickableManager";

export class Elysian{
    private static _instance: Elysian = new Elysian();
    
      private constructor() {
          if(Elysian._instance){
              throw new Error("Error: Instantiation failed: Use Elysian.getInstance() instead of new.");
          }
          Elysian._instance = this;
      }
   
      public static getInstance(): Elysian
      {
          return Elysian._instance;
      }

      public create(){
        const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
        const context: CanvasRenderingContext2D = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        
        const gameEngine = GameEngine.getInstance();
        const renderEngine = RenderEngine.getInstance();


        const collisionManager = CollisionManager.getInstance();
        const clickableManager = ClickableManager.getInstance();
        clickableManager.canvas = canvas;
        
        let scale = 0;
        function resize(){
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            let yScale = canvas.height/480;
            let xScale = canvas.width/320;
            scale = (xScale <= yScale)? xScale : yScale;
            context.scale(scale, scale);
            renderEngine.scale = scale;
        }
        resize();
        
        window.addEventListener('resize', resize);

        renderEngine.scale = scale;
        renderEngine.setCanvas(canvas, context);

        gameEngine.addService(collisionManager);
        renderEngine.addService(clickableManager);

        renderEngine.start();
        gameEngine.start();
      }
}