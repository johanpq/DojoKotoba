import { Type } from "@angular/core";

export interface GameListType {
  title: string,
  description: string,
  image: string,
  component: Type<any>
}
