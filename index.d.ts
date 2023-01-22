/*!
    @e53e04ac/key-value-storage/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

export declare namespace KeyValueStorage {

    type Self<T extends object> = {
        readonly get: {
            (key: string): Promise<null | T>;
        };
        readonly set: {
            (key: string, value: T): Promise<void>;
        };
        readonly remove: {
            (key: string): Promise<void>;
        };
    };

}

export declare type KeyValueStorage<T extends object> = KeyValueStorage.Self<T>;
