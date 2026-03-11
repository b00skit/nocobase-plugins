import { Plugin } from '@nocobase/client';
export declare class GlobalModelSearchClient extends Plugin {
    afterAdd(): Promise<void>;
    beforeLoad(): Promise<void>;
    load(): Promise<void>;
}
export default GlobalModelSearchClient;
