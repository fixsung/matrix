/*
 * @Author: songyzh
 * @Date: 2022-06-16 11:07:23
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-17 16:18:07
 * @Description:
 */
type Tuple = [number, string]

interface IPerson {
  name: string
  age: number
}

interface IMember {
  [key: string]: string | number
}
class Person implements IPerson {
  name!: string
  age!: number
}
const obj: IPerson = {
  name: 'guang',
  age: 18
}

interface sayHello {
  (name: string): string
}

const say: sayHello = (name: string) => {
  return name + 'key'
}

// 类型运算

// extends ? :
type isTwo<T> = T extends 2 ? true : false

type res = isTwo<2>

// infer
type First<T extends unknown[]> = T extends [infer T, ...infer R] ? T : never
type first = First<[1, 2, 3, 4]>

// reflect
type MapType<T> = { [K in keyof T as `${K & string}t`]: `#${T[K] & string}` }
type map = MapType<{ a: 'hello'; b: 'world' }>

type PopArr<T extends unknown[]> = T extends []
  ? []
  : T extends [...infer Rest, unknown]
  ? Rest
  : never

type TrimStrRight<Str extends string> = Str extends `${infer Rest}${
  | ' '
  | '\n'
  | '\r'}`
  ? TrimStrRight<Rest>
  : Str

type TrimStrLeft<Str extends string> = Str extends `${
  | ' '
  | '\n'
  | '\r'}${infer Rest}`
  ? TrimStrLeft<Rest>
  : Str

type Trim<Str extends string> = TrimStrRight<TrimStrLeft<Str>>

type he = Trim<' hello '>

type zip<
  One extends [unknown, unknown],
  Other extends [unknown, unknown]
> = One extends [infer OneFirst, infer OneSecond]
  ? Other extends [infer OtherFirst, infer OtherSecond]
    ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
    : []
  : []

type zipType = zip<[1, 2], ['a', 'b']>

type customRecord<K extends string | number | symbol, T> = { [P in K]: T }

type ToReadOnly<T> = { readonly [K in keyof T]: T[K] }
type ToPartial<T> = { [K in keyof T]?: T[K] }
type ToMutable<T> = { -readonly [Key in keyof T]: T[Key] }
type ToRequired<T> = { [K in keyof T]-?: T[K] }

type deepPromiseVauleType<P extends Promise<unknown>> = P extends Promise<
  infer ValueType
>
  ? ValueType extends Promise<unknown>
    ? deepPromiseVauleType<ValueType>
    : ValueType
  : never
type deepPromiseResult = deepPromiseVauleType<
  Promise<Promise<Promise<Record<string, any>>>>
>

type ReverseArr<T extends unknown[]> = T extends [...infer rest, infer last]
  ? [last, ...ReverseArr<rest>]
  : []
type re = ReverseArr<[1, 2, 3, 4, 5]>
type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
type Include<Arr extends unknown[], FindItem> = Arr extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<First, FindItem> extends true
    ? true
    : Include<Rest, FindItem>
  : false

type isClude = Include<[1, 2, 3, 4, 5], 1>

type BuildArray<
  length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = Arr['length'] extends length ? Arr : BuildArray<length, Ele, [...Arr, Ele]>

type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>
]['length']

type Substract<
  Num1 extends number,
  Num2 extends number
> = BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest]
  ? Rest['length']
  : never

type Union = 'a' | 'b' | 'c'

type StrUnion = `${Union}-`

type UpperCaseA<Item extends string> = Item extends 'a' ? Uppercase<Item> : Item
type UpA = UpperCaseA<Union>

type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never
type union = IsUnion<Union>

// 数组类型变联合类型
type ArrUnion = ['a', 'b'][number]

type CustomOmit<T, k extends keyof any> = Pick<T, Exclude<keyof T, k>>

type t = Exclude<'a' | 'v' | 't', 'v'>
