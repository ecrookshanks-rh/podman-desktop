<script lang="ts">
import type { ProviderDetectionCheck } from '@podman-desktop/api';

import type { CheckStatus, ProviderInfo } from '/@api/provider-info';

import PreflightChecks from './PreflightChecks.svelte';
import ProviderCard from './ProviderCard.svelte';
import ProviderDetectionChecksButton from './ProviderDetectionChecksButton.svelte';
import ProviderInstallationButton from './ProviderInstallationButton.svelte';

export let provider: ProviderInfo;

let detectionChecks: ProviderDetectionCheck[] = [];
let preflightChecks: CheckStatus[] = [];
</script>

<ProviderCard provider={provider}>
  <svelte:fragment slot="content">
    <div class="flex flex-col grow">
      <div class="flex flex-row items-center flex-row space-x-10 grow flex-nowrap">
        <p class="text-[var(--pd-content-text)] grow text-center" aria-label="Suggested Actions">
          Could not find an installation. To start working with containers, {provider.name} needs to be detected/installed.
        </p>
        <div class="flex space-x-2 w-full lg:w-1/3 justify-center">
          <ProviderDetectionChecksButton onDetectionChecks={(checks): ProviderDetectionCheck[] => (detectionChecks = checks)} provider={provider} />
          <ProviderInstallationButton onPreflightChecks={(checks): CheckStatus[] => (preflightChecks = checks)} provider={provider} />
        </div>
      </div>
      {#if detectionChecks.length > 0}
        <div class="flex flex-col mt-5 px-5 pt-5 pb-0 rounded-lg bg-[var(--pd-invert-content-card-bg)]">
          {#each detectionChecks as detectionCheck, index (index)}
            <div class="flex flex-col">
              <p class="mb-4 items-center list-inside">{detectionCheck.status ? '✅' : '❌'} {detectionCheck.name}</p>
              {#if detectionCheck.details}
                Details: <p class="text-[var(--pd-content-text)] w-full break-all">{detectionCheck.details}</p>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
      <PreflightChecks preflightChecks={preflightChecks} />
    </div>
  </svelte:fragment>
</ProviderCard>
