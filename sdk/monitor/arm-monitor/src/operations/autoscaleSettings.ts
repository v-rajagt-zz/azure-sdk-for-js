/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AutoscaleSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  AutoscaleSettingResource,
  AutoscaleSettingsListByResourceGroupNextOptionalParams,
  AutoscaleSettingsListByResourceGroupOptionalParams,
  AutoscaleSettingsListBySubscriptionNextOptionalParams,
  AutoscaleSettingsListBySubscriptionOptionalParams,
  AutoscaleSettingsListByResourceGroupResponse,
  AutoscaleSettingsCreateOrUpdateOptionalParams,
  AutoscaleSettingsCreateOrUpdateResponse,
  AutoscaleSettingsDeleteOptionalParams,
  AutoscaleSettingsGetOptionalParams,
  AutoscaleSettingsGetResponse,
  AutoscaleSettingResourcePatch,
  AutoscaleSettingsUpdateOptionalParams,
  AutoscaleSettingsUpdateResponse,
  AutoscaleSettingsListBySubscriptionResponse,
  AutoscaleSettingsListByResourceGroupNextResponse,
  AutoscaleSettingsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AutoscaleSettings operations. */
export class AutoscaleSettingsImpl implements AutoscaleSettings {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class AutoscaleSettings class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Lists the autoscale settings for a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AutoscaleSettingsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AutoscaleSettingResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AutoscaleSettingsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AutoscaleSettingResource[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AutoscaleSettingsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AutoscaleSettingResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the autoscale settings for a subscription
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AutoscaleSettingsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AutoscaleSettingResource> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: AutoscaleSettingsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AutoscaleSettingResource[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: AutoscaleSettingsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AutoscaleSettingResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the autoscale settings for a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AutoscaleSettingsListByResourceGroupOptionalParams
  ): Promise<AutoscaleSettingsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Creates or updates an autoscale setting.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param parameters Parameters supplied to the operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    autoscaleSettingName: string,
    parameters: AutoscaleSettingResource,
    options?: AutoscaleSettingsCreateOrUpdateOptionalParams
  ): Promise<AutoscaleSettingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, autoscaleSettingName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes and autoscale setting
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    autoscaleSettingName: string,
    options?: AutoscaleSettingsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, autoscaleSettingName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets an autoscale setting
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    autoscaleSettingName: string,
    options?: AutoscaleSettingsGetOptionalParams
  ): Promise<AutoscaleSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, autoscaleSettingName, options },
      getOperationSpec
    );
  }

  /**
   * Updates an existing AutoscaleSettingsResource. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param autoscaleSettingResource Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    autoscaleSettingName: string,
    autoscaleSettingResource: AutoscaleSettingResourcePatch,
    options?: AutoscaleSettingsUpdateOptionalParams
  ): Promise<AutoscaleSettingsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        autoscaleSettingName,
        autoscaleSettingResource,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Lists the autoscale settings for a subscription
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AutoscaleSettingsListBySubscriptionOptionalParams
  ): Promise<AutoscaleSettingsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AutoscaleSettingsListByResourceGroupNextOptionalParams
  ): Promise<AutoscaleSettingsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AutoscaleSettingsListBySubscriptionNextOptionalParams
  ): Promise<AutoscaleSettingsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/autoscalesettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoscaleSettingResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/autoscalesettings/{autoscaleSettingName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AutoscaleSettingResource
    },
    201: {
      bodyMapper: Mappers.AutoscaleSettingResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.autoscaleSettingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/autoscalesettings/{autoscaleSettingName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.autoscaleSettingName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/autoscalesettings/{autoscaleSettingName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoscaleSettingResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.autoscaleSettingName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/autoscalesettings/{autoscaleSettingName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AutoscaleSettingResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.autoscaleSettingResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.autoscaleSettingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/autoscalesettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoscaleSettingResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoscaleSettingResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoscaleSettingResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
