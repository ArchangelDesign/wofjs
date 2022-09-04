class WofState {

    private static instance: WofState;

    private startTime: Date;

    public static getInstance(): WofState
    {
        if (this.instance instanceof WofState) {
            return this.instance;
        }

        this.instance = new WofState();
        return this.instance;
    }

    public getRuntimeInSeconds(): number
    {
        let d: Date = new Date();

        return (d.getTime() - this.startTime.getTime()) / 1000;
    }

    private constructor() {
        this.startTime = new Date();
    }
}

export {WofState};