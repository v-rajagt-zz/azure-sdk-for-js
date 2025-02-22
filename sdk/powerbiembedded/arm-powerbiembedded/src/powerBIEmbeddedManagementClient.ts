/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { WorkspaceCollectionsImpl, WorkspacesImpl } from "./operations";
import { WorkspaceCollections, Workspaces } from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  PowerBIEmbeddedManagementClientOptionalParams,
  GetAvailableOperationsOptionalParams,
  GetAvailableOperationsResponse
} from "./models";

export class PowerBIEmbeddedManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the PowerBIEmbeddedManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Gets subscription credentials which uniquely identify a Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: PowerBIEmbeddedManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PowerBIEmbeddedManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-powerbiembedded/2.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2016-01-29";
    this.workspaceCollections = new WorkspaceCollectionsImpl(this);
    this.workspaces = new WorkspacesImpl(this);
  }

  /**
   * Indicates which operations can be performed by the Power BI Resource Provider.
   * @param options The options parameters.
   */
  getAvailableOperations(
    options?: GetAvailableOperationsOptionalParams
  ): Promise<GetAvailableOperationsResponse> {
    return this.sendOperationRequest(
      { options },
      getAvailableOperationsOperationSpec
    );
  }

  workspaceCollections: WorkspaceCollections;
  workspaces: Workspaces;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAvailableOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.PowerBI/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
