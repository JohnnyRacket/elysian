import { RenderEngine } from "./RenderEngine";
import { GameEngine } from "./GameEngine";
import { CollisionManager } from "./CollisionManager";
import { ClickableManager } from "./ClickableManager";

export class Bootstrap{

      public static create(canvasId: string, width: number, height: number){
        const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById(canvasId);
        const context: CanvasRenderingContext2D = canvas.getContext("2d");
        canvas.height = height;
        canvas.width = width;
        
        const gameEngine = GameEngine.getInstance();
        const renderEngine = RenderEngine.getInstance();


        const collisionManager = CollisionManager.getInstance();
        const clickableManager = ClickableManager.getInstance();
        clickableManager.canvas = canvas;
        
        let scale = 1;
        function resize(){
            //  if(window.innerHeight < height ) canvas.height = window.innerHeight;
            //  else canvas.height = height;
            //  if(window.innerWidth < width) canvas.width = window.innerWidth;
            //  else canvas.width = width;
            // let yScale = canvas.height/height;
            // let xScale = canvas.width/width;
            // scale = (xScale <= yScale)? xScale : yScale;
            // context.scale(scale, scale);
            // renderEngine.scale = scale;
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