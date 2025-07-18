<script lang="ts">
import type { KubernetesProviderConnection } from '@podman-desktop/api';

import type { IConfigurationPropertyRecordedSchema } from '/@api/configuration/models.js';
import type { ProviderKubernetesConnectionInfo } from '/@api/provider-info';

import type { IProviderConnectionConfigurationPropertyRecorded } from './Util';

export let properties: IConfigurationPropertyRecordedSchema[] = [];
export let providerInternalId: string | undefined = undefined;
export let kubernetesConnectionInfo: ProviderKubernetesConnectionInfo | undefined = undefined;

let tmpProviderContainerConfiguration: IProviderConnectionConfigurationPropertyRecorded[] = [];
function updateTmpProviderContainerConfiguration(value: IProviderConnectionConfigurationPropertyRecorded[]): void {
  tmpProviderContainerConfiguration = value;
}

$: Promise.all(
  properties.map(async configurationKey => {
    return {
      ...configurationKey,
      value: configurationKey.id
        ? await window.getConfigurationValue(
            configurationKey.id,
            kubernetesConnectionInfo as unknown as KubernetesProviderConnection,
          )
        : undefined,
      connection: kubernetesConnectionInfo?.name ?? '',
      providerId: providerInternalId ?? '',
    };
  }),
)
  .then(value => updateTmpProviderContainerConfiguration(value.flat()))
  .catch((err: unknown) => console.error('Error collecting providers', err));

$: providerConnectionConfiguration = tmpProviderContainerConfiguration.filter(
  configurationKey => configurationKey.value !== undefined,
);
</script>

<div class="h-full text-[var(--pd-table-body-text)]">
  {#if kubernetesConnectionInfo}
    <div class="flex pl-8 py-4 flex-col w-full text-sm">
      <div class="flex flex-row mt-5">
        <span class="font-semibold min-w-[150px]">Name</span>
        <span aria-label={kubernetesConnectionInfo.name}>{kubernetesConnectionInfo.name}</span>
      </div>
      {#each providerConnectionConfiguration as connectionSetting (connectionSetting.id)}
        <div class="flex flex-row mt-5">
          <span class="font-semibold min-w-[150px]">{connectionSetting.description}</span>
          <span>{connectionSetting.value}</span>
        </div>
      {/each}
      <div class="flex flex-row mt-5">
        <span class="font-semibold min-w-[150px]">Type</span>
        <span aria-label="kubernetes">Kubernetes</span>
      </div>
      <div class="flex flex-row mt-5">
        <span class="font-semibold min-w-[150px]">Endpoint</span>
        <span aria-label={kubernetesConnectionInfo.endpoint.apiURL}>{kubernetesConnectionInfo.endpoint.apiURL}</span>
      </div>
    </div>
  {/if}
</div>
