/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { ADCOperationsImpl, ADCCatalogsImpl } from "./operations";
import { ADCOperations, ADCCatalogs } from "./operationsInterfaces";
import { DataCatalogRestClientOptionalParams } from "./models";

export class DataCatalogRestClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;
  catalogName: string;

  /**
   * Initializes a new instance of the DataCatalogRestClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param catalogName The name of the data catalog in the specified subscription and resource group.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    catalogName: string,
    options?: DataCatalogRestClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }
    if (catalogName === undefined) {
      throw new Error("'catalogName' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DataCatalogRestClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-datacatalog/3.0.0`;
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
    this.catalogName = catalogName;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2016-03-30";
    this.aDCOperations = new ADCOperationsImpl(this);
    this.aDCCatalogs = new ADCCatalogsImpl(this);
  }

  aDCOperations: ADCOperations;
  aDCCatalogs: ADCCatalogs;
}
