# cyberdg — Machine Downtime & Item Issue Tracker for TallyPrime

A TDL (Tally Definition Language) add-on for **TallyPrime** that adds:

- **Machine-wise item issue** — record stock items issued for consumption at a
  specific machine.
- **Machine downtime entry** — log downtime events per machine (from/to time,
  duration, reason, remarks).
- **Reports** — a Machine Item Issue Register and a Machine Downtime Report,
  both added to the Gateway of Tally under **Machine Reports**.

The TDL source is in [`TDL/MachineDowntimeTracker.tdl`](TDL/MachineDowntimeTracker.tdl).

## How it works

| Feature | Built on | Notes |
|---|---|---|
| Machine master | Cost Centre, under a Cost Category called `Machines` | Reuses Tally's native Create/Alter/Display screens. Cost Centre **Name** = machine name, **Alias** = machine code. |
| Machine Item Issue | Voucher Type `Machine Item Issue`, parented to `Stock Journal` | Record issued items under *Source (Consumption)*; leave *Destination* blank. One machine per voucher, selected in the header. |
| Machine Downtime Entry | Voucher Type `Machine Downtime Entry`, parented to `Journal` | Captures Machine, From/To time, Duration (minutes), Reason, Remarks. Posts a self-offsetting ₹0 entry to a dedicated memo ledger so it never touches real books. |
| Machine Item Issue Register | Custom report | Columnar: Date, Vch No, Machine, Item, Qty, Rate, Value, Reason. |
| Machine Downtime Report | Custom report | Columnar: Date, Vch No, Machine, From, To, Minutes, Reason, Remarks. |

## Installation

1. Copy `TDL/MachineDowntimeTracker.tdl` to a folder accessible from the
   TallyPrime machine.
2. In TallyPrime: `F1` (Help) → `TDL & Add-On` → `F4` (Manage Local TDLs) →
   set **Load TDL files on startup** to `Yes`, and add the full path to
   `MachineDowntimeTracker.tdl` under **List of TDL files**.
3. Restart TallyPrime (or reload TDLs) and open the company.

## One-time setup (inside the company)

1. **Cost Category** — `Alt+G` (Go To) → `Create` → `Cost Category`, name it
   exactly `Machines`. (Enable **Cost Centres** and **More than ONE Cost
   Category** under `F11` → Accounting Features if not already on.)
2. **Machines** — use the new **Create Machine** item on the Gateway of Tally
   (or `Alt+G` → `Create` → `Cost Centre`) to add one Cost Centre per machine
   under the `Machines` category. Put the machine's short code in **Alias**.
3. **Memo ledger** — create a ledger named exactly `Machine Downtime (Memo)`
   under the group `Suspense Account`. This is the ledger the Downtime Entry
   voucher posts its (zero-value) self-offsetting entry to.
4. **Allow zero-valued transactions** — `F11` → `Accounting Features` →
   set **Allow Zero-Valued Transactions** to `Yes`. This lets the Downtime
   Entry voucher save without affecting your books.

## Using it

- **Issue items to a machine**: `Alt+G` → `Create Voucher` → select
  `Machine Item Issue`. Pick the Machine, Reason and Remarks in the header,
  then list the items issued under Source (Consumption).
- **Log downtime**: `Alt+G` → `Create Voucher` → select
  `Machine Downtime Entry`. Fill in Machine, From/To time (24-hr `HH:MM`),
  Duration (minutes), Reason and Remarks, then accept through the (hidden,
  zero-value) ledger entry.
- **Reports**: Gateway of Tally → `Machine Reports` → choose
  `Machine Item Issue Register` or `Machine Downtime Report`.

## Testing & troubleshooting

This TDL was authored without a live TallyPrime instance to compile against,
so validate it in a sandbox/test company before relying on it in production:

- If the TDL fails to load, check `F1` → `TDL & Add-On` for the compile error
  line, and cross-check the field/part names below.
- If the **Machine / Reason / Remarks fields don't appear** on the voucher
  screen, the anchor `Field: Narration Field` inside `Part: Voucher Type Sub
  Form` may be named differently in your TallyPrime release. Try anchoring to
  another stable field on that screen instead (e.g. `Field: Vch Ref Field`),
  or ask your Tally partner to confirm the exact part/line names via
  `Ctrl+Alt+T` (TDL trace) in debug mode.
- If UDF field numbers `9061-9069` clash with another TDL already loaded,
  renumber the `[System: UDF]` block in the `.tdl` file.
- The Machine Downtime Report currently ships as a chronological detail
  register only. For a machine-wise rolled-up summary (total minutes, event
  counts), export the register to Excel and summarise there, or extend
  `[Collection: Machine Downtime Vouchers]` with a `Group By` + aggregate
  Part once you've confirmed the exact aggregate function names supported by
  your TallyPrime release.

## Repository layout

```
TDL/
  MachineDowntimeTracker.tdl   # the add-on, single file
README.md                      # this file
```
