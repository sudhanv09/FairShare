import { Room } from "~/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { For } from "solid-js";
import { AddEntryModal } from "./AddEntryModal";

export function EntryList(room: { room: Room | undefined }) {
  return (
    <Table>
      <TableHeader>
        <AddEntryModal />
      </TableHeader>
      <TableBody>
        <For each={room.room?.transactions}>{(item) => (
            <TableRow>
                <TableCell>{item.amount}</TableCell>
            </TableRow>
        )}</For>
      </TableBody>
    </Table>
  );
}
