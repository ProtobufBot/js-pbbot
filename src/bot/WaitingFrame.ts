import {onebot} from "../proto/proto";
import IFrame = onebot.IFrame;

export default interface WaitingFrame {
  resolve: (value: IFrame | PromiseLike<IFrame>) => void
  reject: (reason?: any) => void
  echo: string
}
