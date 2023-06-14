import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiDeleteUserRequest {
    /**
     * User identifier
     * @type number
     * @memberof UsersApideleteUser
     */
    id: number
}

export interface UsersApiGetUserRequest {
    /**
     * User identifier
     * @type number
     * @memberof UsersApigetUser
     */
    id: number
}

export interface UsersApiGetUsersListRequest {
    /**
     * 
     * @type number
     * @memberof UsersApigetUsersList
     */
    pageLimit?: number
    /**
     * The number of a page to return.
     * @type number
     * @memberof UsersApigetUsersList
     */
    pageNumber?: number
    /**
     * 
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof UsersApigetUsersList
     */
    pageOrder?: 'asc' | 'desc'
    /**
     * Name of User
     * @type Array&lt;string&gt;
     * @memberof UsersApigetUsersList
     */
    filterName?: Array<string>
    /**
     * Age of user
     * @type Array&lt;number&gt;
     * @memberof UsersApigetUsersList
     */
    filterAge?: Array<number>
    /**
     * Role of user. True if admin
     * @type Array&lt;boolean&gt;
     * @memberof UsersApigetUsersList
     */
    filterRole?: Array<boolean>
}

export interface UsersApiUpdateUserRequest {
    /**
     * User identifier
     * @type number
     * @memberof UsersApiupdateUser
     */
    id: number
    /**
     * 
     * @type UploadUserRequest
     * @memberof UsersApiupdateUser
     */
    uploadUserRequest?: UploadUserRequest
}

export interface UsersApiUploadUserRequest {
    /**
     * 
     * @type UploadUserRequest
     * @memberof UsersApiuploadUser
     */
    uploadUserRequest?: UploadUserRequest
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete User
     * @param param the request object
     */
    public deleteUser(param: UsersApiDeleteUserRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUser(param.id,  options).toPromise();
    }

    /**
     * Get User
     * @param param the request object
     */
    public getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<UploadUser200Response> {
        return this.api.getUser(param.id,  options).toPromise();
    }

    /**
     * List Users
     * @param param the request object
     */
    public getUsersList(param: UsersApiGetUsersListRequest = {}, options?: Configuration): Promise<GetUsersList200Response> {
        return this.api.getUsersList(param.pageLimit, param.pageNumber, param.pageOrder, param.filterName, param.filterAge, param.filterRole,  options).toPromise();
    }

    /**
     * Update User
     * @param param the request object
     */
    public updateUser(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<void> {
        return this.api.updateUser(param.id, param.uploadUserRequest,  options).toPromise();
    }

    /**
     * Upload User
     * @param param the request object
     */
    public uploadUser(param: UsersApiUploadUserRequest = {}, options?: Configuration): Promise<UploadUser200Response> {
        return this.api.uploadUser(param.uploadUserRequest,  options).toPromise();
    }

}
