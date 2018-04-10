import { IExportVisitor } from "./IExportVisitor";

//for exporting for hyper-generic saving and networking

export interface IExportable{
    export(exporter: IExportVisitor);
}