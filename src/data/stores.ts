export interface Store {
  name: string;
  distance: string;
  address: string;
  available: string[];
}

export interface PincodeData {
  stores: Store[];
}

export const storeData: Record<string, PincodeData> = {
  '560001': {
    stores: [
      {
        name: 'AURUM — INDIRANAGAR',
        distance: '2.3 km',
        address: '100 Feet Road, Indiranagar, Bengaluru',
        available: ['p1', 'p3', 'p5', 'p6'],
      },
      {
        name: 'AURUM — KORAMANGALA',
        distance: '18 km',
        address: 'Forum Mall, Koramangala, Bengaluru',
        available: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
      },
    ],
  },
  '560034': {
    stores: [
      {
        name: 'AURUM — MALLESHWARAM',
        distance: '5 km',
        address: 'Sampige Road, Malleshwaram, Bengaluru',
        available: ['p2', 'p7'],
      },
      {
        name: 'AURUM — KORAMANGALA',
        distance: '18 km',
        address: 'Forum Mall, Koramangala, Bengaluru',
        available: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
      },
    ],
  },
  '110001': {
    stores: [],
  },
};

export function checkAvailability(pincode: string, cartIds: string[]) {
  const cityData = storeData[pincode];

  if (!cityData || cityData.stores.length === 0) {
    return { scenario: 'C' as const, similarProducts: true };
  }

  // First check if any store has 100% availability
  const fullStore = cityData.stores.find(s =>
    cartIds.every(id => s.available.includes(id))
  );

  if (fullStore) {
    // Check if it's the nearest store (first in list)
    const nearestStore = cityData.stores[0];
    const nearestMatched = cartIds.filter(id => nearestStore.available.includes(id));
    const nearestPct = nearestMatched.length / cartIds.length;

    if (nearestPct === 1) {
      // Nearest store has everything — Scenario A
      return { scenario: 'A' as const, store: fullStore, matched: cartIds };
    } else {
      // Nearest is partial, but a farther store has 100% — Scenario B
      return {
        scenario: 'B' as const,
        partialStore: nearestStore,
        matched: nearestMatched,
        unmatched: cartIds.filter(id => !nearestStore.available.includes(id)),
        fullStore,
      };
    }
  }

  // No store has 100% — check for partial
  for (const store of cityData.stores) {
    const matched = cartIds.filter(id => store.available.includes(id));
    if (matched.length > 0) {
      return {
        scenario: 'B' as const,
        partialStore: store,
        matched,
        unmatched: cartIds.filter(id => !store.available.includes(id)),
        fullStore: null,
      };
    }
  }

  return { scenario: 'C' as const, similarProducts: true };
}
