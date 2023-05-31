/* tslint:disable */
/* eslint-disable */
/**
 * users-svc
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserAllOfAttributes } from './UserAllOfAttributes';
import {
    UserAllOfAttributesFromJSON,
    UserAllOfAttributesFromJSONTyped,
    UserAllOfAttributesToJSON,
} from './UserAllOfAttributes';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    type: UserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     * 
     * @type {UserAllOfAttributes}
     * @memberof User
     */
    attributes: UserAllOfAttributes;
}


/**
 * @export
 */
export const UserTypeEnum = {
    Users: 'users'
} as const;
export type UserTypeEnum = typeof UserTypeEnum[keyof typeof UserTypeEnum];


/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': UserAllOfAttributesFromJSON(json['attributes']),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': UserAllOfAttributesToJSON(value.attributes),
    };
}
