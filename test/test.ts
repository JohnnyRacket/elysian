import * as elysian  from "../src/index";

elysian.create('myCanvas', 900, 200);

elysian.GameEngine.register( new elysian.GameObjects.ActiveObject(100,100,50,50,0,'test'));