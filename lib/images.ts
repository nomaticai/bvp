/**
 * Placeholder imagery.
 *
 * These are the Google Stitch demo photos used until the client supplies the
 * real Airbnb (a0.muscache.com) photo URLs for each listing.
 *
 *   TODO(pre-launch): replace every entry here with real listing photos and,
 *   per Section 6 of the brief, re-host them on Supabase Storage / own CDN
 *   rather than hot-linking a third-party CDN long-term.
 */
import type { PropertyPhoto } from "./types";

const B = "https://lh3.googleusercontent.com/aida-public/";

function ph(id: string, altText: string): PropertyPhoto {
  return { url: B + id, altText, isPlaceholder: true };
}

export const IMG = {
  sunsetPoolVilla: ph(
    "AB6AXuBc8fdewpBXLiDKG_ov2COGxPFObmBvyOi81_4t-xWAi3th1EBxyx5OG-gvdUxtJj4j87KAnNA-pjtTVlTs4lCMjJiIRtZiHeDvYqwIyWyJ6qhGB_pIYRNpGwZ0mEwnXbgw1XHs1t6q9dgudp1omCEzG7dWNnyHakiv-gUlz6E4H7nQlFSTl4th8IqEkgjEYjMJE8647774TS22s9ErYWq1aTdSWugDfqCM6PRu6aNSdv2GGORLj4R44fpFtagZKYeP6m2Fny0xAR_i",
    "Oceanfront villa terrace with an infinity pool glowing at golden-hour sunset over the Atlantic.",
  ),
  livingRoomOcean: ph(
    "AB6AXuCc3IsHF0CRl0i9y58D81ZEMqaKIfQXRZGohjPdbofCYwGlhsxUYWHOBxxsBEjsEEEHbknvMuZb_QZMbbZ_rOGgbLDCq_iFc0CfAXk28vHbAXvpw10sAR6yaHpGmiJRe05_sQZV_3iicx_1jkkjs5UQKlrkS6LQvLvUn0d1yZt_GqLc0AMM_yw3YyxSa_JAvKT4zpvFNEscKvBjc6NPwSI5n_gYnTjtFKZsDoiY6KdrVz6xqOjB8ZH8sQVuIc-g41l7sv7M1HPx0AT9",
    "Bright minimalist living room with floor-to-ceiling windows and panoramic ocean views.",
  ),
  kitchenNavy: ph(
    "AB6AXuBeHiotpH6LAu6pzR2XJbpNEx0PNjrTZrV6Vljc1iauygrNiuPENY3nEw52OoC95pseO6wiI7gTj4FYezAkK4yzVtWRLu-GLZQXguFXq_5Ktn0b9kbUVMmQpTpxMUTVrgaulK8zmg7ok8qb0scbu1ffcxEdYw48WZ54wchAjkIKbFhUA5NAmoRx3UhOGe0zUwypSpX5Dmn7OYExPI8QJ2Ff9bAb5JYZOmiSAq7Ac4RVhJGC7TRwjxOclzCPrc2ba1wTDtWACDTW2oep",
    "Modern coastal kitchen with white marble counters, navy cabinetry, and an ocean-view breakfast bar.",
  ),
  bedroomKing: ph(
    "AB6AXuB5hgG1UqxFNdhWlJ2OAyjpTqvtxk16TyqhR-gtRUxRw0YLybNS93ouKDZWHNu5p8YYNBg0cwXrP_zqTS08bDoKDqEyyYbVAXOC47pwmoBLW1qxO8i3zMrI_kdx7KEpC53pf95CXEDaAaJVx2bCRQd0Is71CbyYswpnfm9CLr_7B8fVya1kzYxJojdl5DrfT4cCJAAztAj9Blj-2hyH-ZoZGIHw9OwFB6CW2sAUKfjmYksmm2BwbVgICw1uCHzYS-zG_y0ZNv3baZ_T",
    "Serene bedroom with crisp white linens, a light-oak headboard, and soft morning light.",
  ),
  balconyDusk: ph(
    "AB6AXuAcf4AIWN8J_UYmYmQ44vLZgF0lcxrxnvnRLy5TWoiUrBFucR-JgPyRTke6ABMUXwNIvgO-dW0_Ri0zKOJgowI5h70ZEWKWPDqjlqB4WojnSDd69di09rraJ5A6LYtSifc9v2W63H7JWf8H0oLwot6czNGPr1W1NkHYQl0XpLttTwM4PQXGSKE6ufFBPdKwGBZFDmCH3NeK5idEqTm7BJBmvzJSiCXbDwWH3tMZGBOwfVjk-US8GbWBuTeflamZPZFmaErT2U2vCs_a",
    "Private balcony at dusk with designer chairs overlooking the Hilton Head coastline.",
  ),
  beachHouse: ph(
    "AB6AXuDueDCY-Q2At3DpgVl545AFKo-Z9G7flOJ79uFtMFZiRJqrBdsEwHrH8VqZVSdR3DASkgIvZwErhYWyxY2HJk29ZIwt_GGGuPT4sYE4oSr6f3oqMsHWVheaF5hO9B5eAxR_UVtykSiXdZ_EsCEHmkvcK7d_JRJ2hNWQiq0XG172OHNo5WgLvCtskWsIrm7AFohRSWwRYYCMRSRmfOX18FvxOwnIJv2oK-7sWNxsuFPrgnH2qnXWDvhQBIhTNd4w2xt5m5QV28XLyWa_",
    "White-sand beach with a modern cedar-clad beach house framed by sea oats and palms.",
  ),
  kitchenLight: ph(
    "AB6AXuA0IF6H205TVbYunTHmrq8s4clswUIxLoTxnhBZyKt_lzDJVrpP5htpJglqYqcs4urLAdbb3iVRX5TyNl3fTP8w1nEixLSn5cXmQI8e2EUT76zCuZXaizJJsarMHja-O8kkTyQuoOp5gQ1NvY-7XaXfSPn488bCLSXX1potoVd5yntDSBnk7l5_y98QUpLLQYKvlpYiQqhJTT2KZr9zXzAzv-6wkz40TWdhCiw0NI4REi7pVsT0hZVaTl8nGUTAcp08IJBq4t1j1CAw",
    "Light-filled coastal kitchen with marble counters and oak cabinetry overlooking a pool.",
  ),
  bedroomDrift: ph(
    "AB6AXuCvW5dmNpM12oIuY6fgUm1kI4wYa6Ab549oNu2B3cZLoZaLw6hjjaKUw80CR0zLqLfyvGyrfGEk4--s2jjW-tRyNdKEAiV_ekoMda-FgMIec4pcieTSEu72sT24kBN742kPC910QX_uSglNJS1VcfWXvWsht7x2bptZJFq2F3WhCe4bngik7RkusEWk4zrVQGFwouOCRU6oDBNvSGwX4zHETU_4uYLrnbrhZUZG-Gobg9tMjwOHoHudfBY6fwzoxL_jw5xUrTIKcj1H",
    "Airy master bedroom with a driftwood bed frame and sliding doors to a dune-side balcony.",
  ),
  loungeNight: ph(
    "AB6AXuCvMm7IB6GOljgLsf3RlJRWMi2Vv86jAZ81SO7Mg53kHkvx11CwpK9tjTn45KKjtRhH29fAc_Lr3nv-q1n5cjqUmCJU4Gh5ixRR1JDInyG-wK7l-_nJ1eebs0jTidx4D6IWVLq6hlx_OH_xOQnEg9UGusnxn5ciUgoTha-HOnkYEpttcLB-NbhXCeGdcvTtmwrEconR_uuJksZYFwcj8O6feg-vbcDTfS02AFjgN6MHW5iytULJJQcqcqKU4tMGaadTwddrYKirZ379",
    "Modern outdoor lounge with an infinity pool and fire pit under a starry coastal sky.",
  ),
  bathroomSpa: ph(
    "AB6AXuD4GeiZ74BNpxnoiIn8rSiXs3jthdhdP3wq36aWHc7z1JEsJArO8NkxhKCSXvTtX-8pleezb_AuJ_XQxgiWTCLdZQzpFxnJARCK6n4e8BTmptvnjI819wcXUEqnZ1FYcrdTitAlsyjWg_mO_eopVYfk3lJ6ZfqVLYlhbJPrjj5el_N9qYPEkc6t6hP4xZdMBLwS9HlBa0d30SWj7-aX7_X6zz4Q9kdgyvNJF0f1aewYczLKB2rJV6YWL6iMP2wS3Cbf1A9reRzWGKf2",
    "Spa-like bathroom with a freestanding soaking tub set before a dune-view window.",
  ),
  livingRoomVaulted: ph(
    "AB6AXuAinFbG_Rxees1xxlZytweEl1dlIgOT3yCFChdsR6fMkIW9Vza1UnFXO_paTEn2Ha-V36MEOi6Us0bJ1gJPCGN9Jh4c-iE87Kx3PTi3DRjVp8igNNSWMiLAtxtwzO6ByuTlsnbC1_DSBH6o9PMRhvMv0NvzYJqq2bhPelOe1jvs6d9c0xlOxQknFUWR-y_kfsn-4qtqTjiRSYGseJgXPTqFKUKeY55bPq9YJudjEtWEzBbpc9pufyDb1hn-RpZRTCo-MSplKYUD6lrY",
    "Open-plan living room with vaulted white-beam ceilings and doors to a garden patio.",
  ),
  seasideAerial: ph(
    "AB6AXuAndIsvkvGPMl1eSCiDudk5rkn70kTDMyca8UKzIO_Ie71D1IAjjivh6dxAwwpNj6fGY66jjeW5-BXWVZdIONxHu1cYaPiR213kzP1qkTpgaayT0EiRs6Vft9MMAVe-XX0EXWce9wXEZEm35thPyak8YTbNTA91t0LOrM9ss_IOKMTj3F1TnZGn5SX5TXB_jZXZvuo0MZtsrCUhip4TQVTsG9y9npsjoL18LjPbbcKkrFxnckwmLZ7mdbkeEz1Bam9X5Ie4S_Ddmz5d",
    "Aerial view of a beachfront villa community with pools beside a white-sand beach.",
  ),
  seaPinesEstate: ph(
    "AB6AXuAjNbCQUz4i092JEj8IHtG5nsf9hIvXvuevS2bqhqHt9ZmMu17dKIb2efM_q6q55bl_GOrgaa-g3VOcaMsv_kp0QUVS_cynbeXe1c07uvsjpNYQQ4aV5bPSwv1pCDv4a8n9P6PlW-Psi38B33R2r0xmjjpvU5E84VRhnr_MPJvjbdZkq-Ox5DAlRfu0jGgmPM6Ri40tOvZN9w39CHWrjPAIh3nP800RmPAVJOkuJGL9wzJf2XT8c_BxwJKfNVmD3F83-7Y08xfWjcwW",
    "Secluded Sea Pines estate tucked among ancient oaks draped in Spanish moss.",
  ),
  heroSunset: ph(
    "AB6AXuAMb1M-293zwlCjRg6j0djZQIHeFQTVPe-zvQvKBM5_0Md_kKG0zEGkPjf1TmzxcG7ShfPZ68T6GgEiTjiyfVMV9GzNuVFR7CV7Pl3UoZPjKcBnCLnTAlpPbYink025Mc-RXhtUplhloh_sJ-xTsqnIdbxaXuRDTysz4PD5n2YZ3UWIrIOrz74qFyuZaYHxvXS5ETNiYdPNRT3q6S4QaH-ivdDh3dhkVLOnsQnjE5YY9dOfGy1QLv7CejB433zpz4DyMrzlZdH3dE7x",
    "Golden-hour view from a luxury beachfront property with an infinity pool meeting the ocean.",
  ),
  hostHeadshot: ph(
    "AB6AXuAxrrmbaDuXf37NFPACMlv7RCqjx6Op9KcL84e37PvExoH7i4OQNc34KGQZb9JsXcfd70GVIPENlfZEkN7XhyyCpec3M-nDAi252zsBAg9z5QcJhmSeSrOF_XrkkCNwlIhJRarzX2co96u0krZO3Ur_KvlscV34HnZdzHIVBcLSBmh72nxuU_JUYOowZfUS4fDtU_jpXylT_qi_ZPiGrTwVO7EuQUoMhOYi1ipYQ9AlEv478-3t6gdkjcHG0xcI3IGOnP06JHNVmAVm",
    "Warm, welcoming portrait of the host in a bright coastal setting.",
  ),
  mapPlaceholder: ph(
    "AB6AXuBXtECe2Vd310bGnfq6Mm3R2BQKNif4eziSlqPYFmvoITSM7rjtNgU-MGphQNaVOK-WsubMvRh6NjHJieRdZuzcdUpzQCMuuREHptXCJBfUXwJ5Roah_kvzKXVucTkEy61-rj9zona0y1M1iv9e2OK9wku-02dEu3CvLmKhqvQvkN-ipFrZWVPLCSSmALE80zqKwl3zixzGNERVqCqkUvjH6_SFkA7Z6n647DS2gVFpYe_eOjf4QF-Vs4gZ8509Alu3V4T8cBJc-ge2",
    "Map of the Hilton Head Island area (community-level location).",
  ),
};
