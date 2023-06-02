import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration } from '../configuration';
import { Observable, of, from } from '../rxjsStub';
import { mergeMap, map } from  '../rxjsStub';
import { CreateUser } from '../models/CreateUser';
import { CreateUserAllOf } from '../models/CreateUserAllOf';
import { CreateUserAllOfAttributes } from '../models/CreateUserAllOfAttributes';
import { CreateUserKey } from '../models/CreateUserKey';
import { Errors } from '../models/Errors';
import { ErrorsErrorsInner } from '../models/ErrorsErrorsInner';
import { GetUsersList200Response } from '../models/GetUsersList200Response';
import { GetUsersList400Response } from '../models/GetUsersList400Response';
import { UpdateUser } from '../models/UpdateUser';
import { UpdateUserAllOf } from '../models/UpdateUserAllOf';
import { UpdateUserAllOfAttributes } from '../models/UpdateUserAllOfAttributes';
import { UpdateUserKey } from '../models/UpdateUserKey';
import { UploadUser200Response } from '../models/UploadUser200Response';
import { UploadUserRequest } from '../models/UploadUserRequest';
import { User } from '../models/User';
import { UserAllOf } from '../models/UserAllOf';
import { UserAllOfAttributes } from '../models/UserAllOfAttributes';
import { UserKey } from '../models/UserKey';

import { UsersApiRequestFactory, UsersApiResponseProcessor } from '../apis/UsersApi';
export class ObservableUsersApi {
  private requestFactory: UsersApiRequestFactory;
  private responseProcessor: UsersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsersApiRequestFactory,
    responseProcessor?: UsersApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
  }

  /**
     * Delete User
     * @param id User identifier
     */
  public deleteUser(id: number, _options?: Configuration): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteUser(id, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
      pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (const middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUser(rsp)));
      }));
  }

  /**
     * Get User
     * @param id User identifier
     */
  public getUser(id: number, _options?: Configuration): Observable<UploadUser200Response> {
    const requestContextPromise = this.requestFactory.getUser(id, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
      pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (const middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUser(rsp)));
      }));
  }

  /**
     * List Users
     * @param pageLimit 
     * @param pageNumber The number of a page to return.
     * @param pageOrder 
     * @param filterName Name of User
     * @param filterAge Age of user
     * @param filterRole Role of user. True if admin
     */
  public getUsersList(pageLimit?: number, pageNumber?: number, pageOrder?: 'asc' | 'desc', filterName?: string, filterAge?: Array<string>, filterRole?: Array<string>, _options?: Configuration): Observable<GetUsersList200Response> {
    const requestContextPromise = this.requestFactory.getUsersList(pageLimit, pageNumber, pageOrder, filterName, filterAge, filterRole, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
      pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (const middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsersList(rsp)));
      }));
  }

  /**
     * Update User
     * @param id User identifier
     * @param uploadUserRequest 
     */
  public updateUser(id: number, uploadUserRequest?: UploadUserRequest, _options?: Configuration): Observable<void> {
    const requestContextPromise = this.requestFactory.updateUser(id, uploadUserRequest, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
      pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (const middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUser(rsp)));
      }));
  }

  /**
     * Upload User
     * @param uploadUserRequest 
     */
  public uploadUser(uploadUserRequest?: UploadUserRequest, _options?: Configuration): Observable<UploadUser200Response> {
    const requestContextPromise = this.requestFactory.uploadUser(uploadUserRequest, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
      pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (const middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
        }
        return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadUser(rsp)));
      }));
  }

}
