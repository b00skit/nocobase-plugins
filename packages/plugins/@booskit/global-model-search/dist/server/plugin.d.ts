import { Plugin } from '@nocobase/server';
export declare class GlobalModelSearchPlugin extends Plugin {
    afterAdd(): void;
    beforeLoad(): void;
    load(): Promise<void>;
    install(): Promise<void>;
    afterEnable(): Promise<void>;
    afterDisable(): Promise<void>;
    remove(): Promise<void>;
}
export default GlobalModelSearchPlugin;
