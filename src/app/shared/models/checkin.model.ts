export class Checkin {
  constructor(
    public user: string,
    public title: string,
    public description: string,
    public rating: {
      type: Number,
      min: 1,
      max: 5
    },
    public cord: {
      lat: Number,
      lng: Number
    }
  ) {}
}
