export class StagedReference{
    public object: Object;
    public stage: string;

    constructor(object: Object, stage: string){
        this.object = object;
        this.stage = stage;
    }
}