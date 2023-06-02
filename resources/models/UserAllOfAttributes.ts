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
/**
 * 
 * @export
 * @interface UserAllOfAttributes
 */
export interface UserAllOfAttributes {
    /**
     * Name of user
     * @type {string}
     * @memberof UserAllOfAttributes
     */
    name: string;
    /**
     * Age of user
     * @type {number}
     * @memberof UserAllOfAttributes
     */
    age: number;
    /**
     * User creation time
     * @type {string}
     * @memberof UserAllOfAttributes
     */
    createdAt: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserAllOfAttributes
     */
    role: boolean;
}

/**
 * Check if a given object implements the UserAllOfAttributes interface.
 */
export function instanceOfUserAllOfAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "age" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function UserAllOfAttributesFromJSON(json: any): UserAllOfAttributes {
    return UserAllOfAttributesFromJSONTyped(json, false);
}

export function UserAllOfAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAllOfAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'age': json['age'],
        'createdAt': json['created_at'],
        'role': json['role'],
    };
}

export function UserAllOfAttributesToJSON(value?: UserAllOfAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'age': value.age,
        'created_at': value.createdAt,
        'role': value.role,
    };
}

