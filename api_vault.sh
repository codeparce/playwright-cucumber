#!/bin/bash
set -e

echo "⚙️ Adquiriendo el token desde la api de vault"
HCP_API_TOKEN=$(curl --location "https://auth.idp.hashicorp.com/oauth2/token" \
--header "Content-Type: application/x-www-form-urlencoded" \
--data-urlencode "client_id=$HCP_CLIENT_ID" \
--data-urlencode "client_secret=$HCP_CLIENT_SECRET" \
--data-urlencode "grant_type=client_credentials" \
--data-urlencode "audience=https://api.hashicorp.cloud" | jq -r .access_token 2>try_error.log)

echo "⚙️ Consultando y extrayendo secretos"
curl --location  "https://api.cloud.hashicorp.com/secrets/2023-11-28/organizations/03b81824-6d4b-4019-abaa-86332c738862/projects/c474f5ec-7fbc-42a1-b748-508d8f130e39/apps/secrets-db/secrets:open" \
--request GET \
--header "Authorization: Bearer $HCP_API_TOKEN" | jq -r '.secrets[] | "\(.name)=\(.static_version.value)"' > .env 2>try_error.log