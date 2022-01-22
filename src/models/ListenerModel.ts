export class ListenerModal {
  private listeners: (() => void)[] = [];

  /**
   * Update listeners called on property update.
   * @param listeners
   */
  addUpdateListener(...listeners: (() => void)[]): void {
    this.listeners.push(...listeners);
  }

  removeListeners() {
    this.listeners = [];
  }

  triggerListeners(): void {
    this.listeners.forEach((d) => d());
  }
}
