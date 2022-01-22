export declare class ListenerModal {
    private listeners;
    addUpdateListener(...listeners: (() => void)[]): void;
    removeListeners(): void;
    triggerListeners(): void;
}
