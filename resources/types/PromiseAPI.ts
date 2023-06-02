import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration } from '../configuration';

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
import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor } from '../apis/UsersApi';
export class PromiseUsersApi {
  private api: ObservableUsersApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsersApiRequestFactory,
    responseProcessor?: UsersApiResponseProcessor,
  ) {
    this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
  }

  /**
     * Delete User
     * @param id User identifier
     */
  public deleteUser(id: number, _options?: Configuration): Promise<void> {
    const result = this.api.deleteUser(id, _options);
    return result.toPromise();
  }

  /**
     * Get User
     * @param id User identifier
     */
  public getUser(id: number, _options?: Configuration): Promise<UploadUser200Response> {
    const result = this.api.getUser(id, _options);
    return result.toPromise();
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
  public getUsersList(pageLimit?: number, pageNumber?: number, pageOrder?: 'asc' | 'desc', filterName?: string, filterAge?: Array<string>, filterRole?: Array<string>, _options?: Configuration): Promise<GetUsersList200Response> {
    const result = this.api.getUsersList(pageLimit, pageNumber, pageOrder, filterName, filterAge, filterRole, _options);
    return result.toPromise();
  }

  /**
     * Update User
     * @param id User identifier
     * @param uploadUserRequest 
     */
  public updateUser(id: number, uploadUserRequest?: UploadUserRequest, _options?: Configuration): Promise<void> {
    const result = this.api.updateUser(id, uploadUserRequest, _options);
    return result.toPromise();
  }

  /**
     * Upload User
     * @param uploadUserRequest 
     */
  public uploadUser(uploadUserRequest?: UploadUserRequest, _options?: Configuration): Promise<UploadUser200Response> {
    const result = this.api.uploadUser(uploadUserRequest, _options);
    return result.toPromise();
  }


}



