export = index;
declare function index(dataBuffer: any, options?: any): Promise<ResultData>;
declare interface ResultData {
  numpages: number;
  numrender: any;
  info: any;
  metadata: any;
  version: string;
  text: string;
}
