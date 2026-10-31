# Event catalog

Every event uses the envelope in `packages/shared/src/events.ts`. Payloads are additive; removing a field needs a new version.

| Event                     | Version | Published by             | Consumed by              | Data                      |
| ------------------------- | ------- | ------------------------ | ------------------------ | ------------------------- |
| `reservation.checked_out` | 1       | integrations             | operations, finance, crm | `reservationId`, `roomId` |
| `room.status_changed`     | 1       | operations, integrations | operations               | `roomId`, `from`, `to`    |
| `task.completed`          | 1       | operations               | operations, hr           | `taskId`, `roomId`        |
