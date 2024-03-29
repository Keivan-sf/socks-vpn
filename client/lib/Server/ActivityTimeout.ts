export class ActivityTimeout {
  private timer: null | NodeJS.Timeout = null;

  constructor(
    public timeout: number,
    public onTimeout: () => void,
  ) {}

  refresh() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.onTimeout();
    }, this.timeout);
  }
}
