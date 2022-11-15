import { type } from "jquery";

export var 이름 = 'kim';
export var 나이 = 20;
export type Name = string;

namespace 네임스페이스 {
    export type Name1 = string|number;
}

let 변수 :네임스페이스.Name1 = 'kim';

export type Car2 = {
    wheel : number,
    model : string
  }
export interface Bike1 {
    wheel : 2,
    model : string
  }

export type 아무거나 = (a? :object) => void