import { ReferenceManager } from './Engines/ReferenceManager';
import { HorizontalCenterPositioningDecorator } from './ViewObjects/PositioningDecorators/HorizontalCenterPositioningDecorator';
import { ClickableManager } from './Engines/ClickableManager';
import { HorizontalCenterDecorator } from './ViewComposition/Decorators/HorizontalCenterDecorator';
import { TopLeftDrawingStrategy } from './DrawingStrategies/TopLeftDrawingStrategy';
import { ComposableView } from './ViewComposition/ComposableView';
import { CollisionManager } from './Engines/CollisionManager';
import { GameEngine } from './Engines/GameEngine';
import { RenderEngine } from './Engines/RenderEngine';
import { VerticalCenterDecorator } from "./ViewComposition/Decorators/VerticalCenterDecorator";
import { CenterDrawingStrategy } from './DrawingStrategies/CenterDrawingStrategy';

/*
 * Fetch our environment for our game and configure
 */
const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
const context: CanvasRenderingContext2D = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const gameEngine = GameEngine.getInstance();
const renderEngine = RenderEngine.getInstance();

let scale = 0;
function resize(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let yScale = canvas.height/480;
    let xScale = canvas.width/320;
    scale = (xScale <= yScale)? xScale : yScale;
    console.log(scale);
    context.scale(scale, scale);
    renderEngine.scale = scale;
}
resize();

window.addEventListener('resize', resize);

/*
 * Declare game engines (constant because they will not be changed, also are singletons)
 */ 

renderEngine.scale = scale;
renderEngine.setCanvas(canvas, context);
//gameEngine.start();
renderEngine.start();

//services
let collisionManager = CollisionManager.getInstance();
let clickManager = ClickableManager.getInstance();
clickManager.canvas = canvas;

gameEngine.addService(collisionManager);//should be added first for consistent behaviour (no issue if its not really though)

renderEngine.addService(clickManager);
//factories

//create a composable view for game area to exist in
let gameArea = new ComposableView(0,0,320,480);

let test2 = new VerticalCenterDecorator(gameArea);
let test = new HorizontalCenterDecorator(test2);
renderEngine.register(test);


