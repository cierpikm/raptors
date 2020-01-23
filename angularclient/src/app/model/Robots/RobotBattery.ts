import {BatteryType} from "../type/BatteryType";
export class RobotBattery{
  id: string;
  name: string;
  type: BatteryType;

  constructor(name: string, type: BatteryType) {
    this.name = name;
    this.type = type;
  }


}
