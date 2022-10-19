---
layout: post
title:  "Authorization and delegation"
date:   2022-10-19 21:30:00 +0100
---
I recently did a write-up, clarifying my thoughts regarding the differences and similiarities between user to user delegation and (user) authorization. Reproduced below translated from Danish:

# Authorization system

Service principals (users/groups/service accounts) are assigned permissions on resources, often grouped in roles.

The ability to manage permissions can be a permission. There is often a hierarchy in resources where permissions are inherited.

## Known examples
### Access Control Lists on File System
| Aspect      | Description                                                                |
|-------------|----------------------------------------------------------------------------|
| Hierarchy   | The root of the file system over the folders/files it contains recursively |
| Permissions | For example "Read" or "Full control"                                       |
| Roles       | Not modeled as the amount of different permissions is low                  |

![ACL](/assets/images/2022-10-19-acl.png)

### Sharepoint folders
| Aspect      | Description                                                    |
|-------------|----------------------------------------------------------------|
| Hierarchy   | The site's root over the folders/files it contains recursively |
| Permissions | For example "Design" or "Restricted View"                      |
| Roles       | Not modeled as the amount of different permissions is low      |

![SharePoint](/assets/images/2022-10-19-sharepoint.png)

### IAM on Azure resources
| Aspect      | Description                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------|
| Hierarchy   | Management group over subscription to the resource group and the individual resources                |
| Permissions | For example "Microsoft.Storage/storageAccounts/read" or "Microsoft.DataProtection/backupVaults/read" |
| Roles       | "Owner", "DNS Zone Contributor"                                                                      |

![Azure](/assets/images/2022-10-19-azure.png)

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

# Delegation system

Given a set of permissions assigned to a principal (delegator) for a set of resources, a delegation system enables the principal to pass these permissions on to other principals (delegatee), with a number of limitations laid down

- bounded by static, high-level scope "read only" "only basic functionality"
- delimited on low-level dynamic data "field xyz data", "account number 123" etc.

The delegation system might gather up delegations given to a delegatee from multiple delegators to offer a composite view of all data the delegatee is allowed to access. Or it might offer per-delegator impersonated token issuance, similar to OAuth 2.0 (which itself is a delegation system, where the delegatee principal is an application, not a person).

## Known examples:

### Danish SKAT TastSelv access to others

| Aspect    | Description         |
|-----------|---------------------|
| Delegate  | CPR via NemId/MitId |
| Delegatee | CVR or CPR          |
| Boundary  | Static scope        |

![SKAT](/assets/images/2022-10-19-skat.png)

### OAuth 2.0

| Aspect    | Description                      |
|-----------|----------------------------------|
| Delegate  | Resource Owner                   |
| Delegatee | Client application               |
| Boundary  | Scopes, can be static or dynamic |

https://www.rfc-editor.org/rfc/rfc6749