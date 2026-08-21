// no-class-assign: クラス名に再代入している
export class Widget {}

Widget = class {} as typeof Widget
