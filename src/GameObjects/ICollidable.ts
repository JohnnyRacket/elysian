import { CollidableGameObject } from './CollidableGameObject';
export interface ICollidable{
    collide(object: CollidableGameObject);
}