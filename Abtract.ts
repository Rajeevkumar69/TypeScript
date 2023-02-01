abstract class TakePhoto {
  // camera:string
  constructor(public camera: string, public filter: string) {}

  abstract getSepia(): void;
  getReal(): number {
    return 8;
  }
}

// const rajeev = new TakePhoto("SONY", "Test");

//  We can't create an object of abstract class in typescript

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia");
  }
}

// const chamcham = new Instagram("SONY", "Test");
