import { createClient } from 'next-sanity'

// import {  } from '../env'

export const client = createClient({
  projectId:'vny669ac',
  dataset:'production',
  token:'sk7lieGgmtxyRP2vYeN9c1mpcSWwMXtxEdhc1P9xUMiLtn29lvweu0e8iAmB6MAH3cuJAWCZRA1n77BhJ5X9Gs7QLE8nKTnNNrtmfTMGHuUFR0Ut6N0EeMw3QdwSCpWqo00rKgQxnTZ18LkEVraxhS002QarkAnRLAb9uDLJ3Sx4xuExO0vM',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: "2025-02-09"

})
