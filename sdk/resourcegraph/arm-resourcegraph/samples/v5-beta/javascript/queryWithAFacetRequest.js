/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesFacetQuery.json
 */
const { ResourceGraphClient } = require("@azure/arm-resourcegraph");
const { DefaultAzureCredential } = require("@azure/identity");

async function queryWithAFacetRequest() {
  const query = {
    facets: [
      { expression: "location", options: { top: 3, sortOrder: "desc" } },
      {
        expression: "properties.storageProfile.osDisk.osType",
        options: { top: 3, sortOrder: "desc" },
      },
      {
        expression: "nonExistingColumn",
        options: { top: 3, sortOrder: "desc" },
      },
      {
        expression: "resourceGroup",
        options: { top: 3, sortBy: "tolower(resourceGroup)", sortOrder: "asc" },
      },
      {
        expression: "resourceGroup",
        options: { top: 3, filter: "resourceGroup contains 'test'" },
      },
    ],
    query:
      "Resources | where type =~ 'Microsoft.Compute/virtualMachines' | project id, name, location, resourceGroup, properties.storageProfile.osDisk.osType | limit 5",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

queryWithAFacetRequest().catch(console.error);
