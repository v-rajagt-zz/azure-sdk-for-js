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
 * This sample demonstrates how to Returns the list of data connections of the given Kusto database.
 *
 * @summary Returns the list of data connections of the given Kusto database.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2021-08-27/examples/KustoDataConnectionsListByDatabase.json
 */
import { KustoManagementClient } from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";

async function kustoDatabasesListByCluster() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoclusterrptest4";
  const databaseName = "KustoDatabase8";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataConnections.listByDatabase(
    resourceGroupName,
    clusterName,
    databaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

kustoDatabasesListByCluster().catch(console.error);
