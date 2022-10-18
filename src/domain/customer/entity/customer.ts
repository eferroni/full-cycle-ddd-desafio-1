import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import Address from "../value-object/address";

export default class Customer extends Entity {
  private _name: string = "";
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    super();
    this._id = id;
    this._name = name;
    this.validate();

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  get name(): string {
    return this._name;
  }

  validate() {
    if (this.id.length == 0) {
      this.notification.addError({
        context: "customer",
        message: "Id is required",
      });
    }
    if (this._name.length == 0) {
      this.notification.addError({
        context: "customer",
        message: "Name is required",
      });
    }
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  changeAddress(address: Address): void {
    this._address = address;
    this.validate();
  }

  isActive(): boolean {
    return this._active;
  }

  activate(): void {
    if (this._address == undefined) {
      throw new Error("Address is required");
    }
    this._active = true;
  }

  deactivate(): void {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }

  get Address(): Address {
    return this._address;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  addRewardPoints(points: number): void {
    if (points < 0) {
      throw new Error("Points must be greater or equal to 0");
    }
    this._rewardPoints += points;
  }
}
