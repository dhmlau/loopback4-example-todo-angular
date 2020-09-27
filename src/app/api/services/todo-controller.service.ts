/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { NewTodo } from '../models/new-todo';
import { Todo } from '../models/todo';
import { TodoPartial } from '../models/todo-partial';

@Injectable({
  providedIn: 'root',
})
export class TodoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation todoControllerFindTodoById
   */
  static readonly TodoControllerFindTodoByIdPath = '/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findTodoById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTodoById$Response(params: {
    id: number;
    items?: boolean;

  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodoControllerService.TodoControllerFindTodoByIdPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('items', params.items, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findTodoById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTodoById(params: {
    id: number;
    items?: boolean;

  }): Observable<Todo> {

    return this.findTodoById$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

  /**
   * Path part for operation todoControllerReplaceTodo
   */
  static readonly TodoControllerReplaceTodoPath = '/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceTodo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceTodo$Response(params: {
    id: number;
      body?: Todo
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoControllerService.TodoControllerReplaceTodoPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `replaceTodo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceTodo(params: {
    id: number;
      body?: Todo
  }): Observable<void> {

    return this.replaceTodo$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation todoControllerDeleteTodo
   */
  static readonly TodoControllerDeleteTodoPath = '/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTodo()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTodo$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoControllerService.TodoControllerDeleteTodoPath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTodo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTodo(params: {
    id: number;

  }): Observable<void> {

    return this.deleteTodo$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation todoControllerUpdateTodo
   */
  static readonly TodoControllerUpdateTodoPath = '/todos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTodo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTodo$Response(params: {
    id: number;
      body?: TodoPartial
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoControllerService.TodoControllerUpdateTodoPath, 'patch');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateTodo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTodo(params: {
    id: number;
      body?: TodoPartial
  }): Observable<void> {

    return this.updateTodo$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation todoControllerFindTodos
   */
  static readonly TodoControllerFindTodosPath = '/todos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findTodos()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTodos$Response(params?: {
    filter?: any;

  }): Observable<StrictHttpResponse<Array<Todo>>> {

    const rb = new RequestBuilder(this.rootUrl, TodoControllerService.TodoControllerFindTodosPath, 'get');
    if (params) {

      rb.query('filter', params.filter, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Todo>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findTodos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTodos(params?: {
    filter?: any;

  }): Observable<Array<Todo>> {

    return this.findTodos$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Todo>>) => r.body as Array<Todo>)
    );
  }

  /**
   * Path part for operation todoControllerCreateTodo
   */
  static readonly TodoControllerCreateTodoPath = '/todos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTodo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTodo$Response(params?: {
      body?: NewTodo
  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodoControllerService.TodoControllerCreateTodoPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createTodo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTodo(params?: {
      body?: NewTodo
  }): Observable<Todo> {

    return this.createTodo$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

}
