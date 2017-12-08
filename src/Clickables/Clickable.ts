import { Dimensionable } from '../Shared/Dimensionable';
export interface Clickable{
    //this is a view construct
    click();
    hover();
    getGlobalX(): number;
    getGlobalY(): number;
    getWidth(): number;
    getHeight(): number;
    //perhaps make a hoverable subclass

}