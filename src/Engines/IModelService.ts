export interface IModelService{
    add(object: Object);//possibly change these to game objects
    remove(object: Object);
    tick();
}