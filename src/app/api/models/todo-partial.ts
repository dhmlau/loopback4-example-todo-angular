/* tslint:disable */

/**
 * (tsType: Partial<Todo>, schemaOptions: { partial: true })
 */
export interface TodoPartial {
  desc?: string;
  id?: number;
  isComplete?: boolean;
  remindAtAddress?: string;
  remindAtGeo?: string;
  tag?: any;
  title?: string;
}
