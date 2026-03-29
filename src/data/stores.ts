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
        name: 'TANISHQ — INDIRANAGAR',
        distance: '2.3 km',
        address: '100 Feet Road, Indiranagar, Bengaluru',
        available: ['p1', 'p3', 'p5', 'p6'],
      },
      {
        name: 'TANISHQ — KORAMANGALA',
        distance: '18 km',
        address: 'Forum Mall, Koramangala, Bengaluru',
        available: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
      },
    ],
  },
  '560034': {
    stores: [
      {
        name: 'MALABAR GOLD — MALLESHWARAM',
        distance: '5 km',
        address: 'Sampige Road, Malleshwaram, Bengaluru',
        available: ['p2', 'p7'],
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

  for (const store of cityData.stores) {
    const matched = cartIds.filter(id => store.available.includes(id));
    const pct = matched.length / cartIds.length;

    if (pct === 1) {
      return { scenario: 'A' as const, store, matched };
    }

    if (pct > 0) {
      const fullStore = cityData.stores.find(s =>
        cartIds.every(id => s.available.includes(id))
      );
      return {
        scenario: 'B' as const,
        partialStore: store,
        matched,
        unmatched: cartIds.filter(id => !store.available.includes(id)),
        fullStore: fullStore || null,
      };
    }
  }

  return { scenario: 'C' as const, similarProducts: true };
}
