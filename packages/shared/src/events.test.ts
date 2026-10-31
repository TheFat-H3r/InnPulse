import { describe, expect, it } from 'vitest';
import { EventEnvelopeSchema } from './events';

const valid = {
  id: 'evt_1',
  type: 'reservation.checked_out',
  version: 1,
  occurredAt: '2026-11-03T08:42:10Z',
  tenantId: 'ten_123',
  propertyId: 'prop_45',
  source: 'integrations.mews',
  correlationId: 'req_8f2c1a',
  data: { reservationId: 'res_981', roomId: 'rm_204' },
};

describe('event envelope', () => {
  it('accepts a valid event', () => {
    expect(EventEnvelopeSchema.parse(valid)).toEqual(valid);
  });

  it('requires tenant and property scope', () => {
    const { tenantId: _t, ...noTenant } = valid;
    expect(() => EventEnvelopeSchema.parse(noTenant)).toThrow();
  });

  it('rejects badly named events', () => {
    expect(() => EventEnvelopeSchema.parse({ ...valid, type: 'CheckedOut' })).toThrow();
  });
});
