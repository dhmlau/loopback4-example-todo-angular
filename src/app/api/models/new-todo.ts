/* tslint:disable */

/**
 * (tsType: Omit<Todo, 'id'>, schemaOptions: { title: 'NewTodo', exclude: [ 'id' ] })
 */
export interface NewTodo {
  desc?: string;
  isComplete?: boolean;
  remindAtAddress?: string;
  remindAtGeo?: string;
  tag?: any;
  title: string;
}
