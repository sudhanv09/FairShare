import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";

import { Plus } from "lucide-solid";
import { Button } from "~/components/ui/button";
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
} from "~/components/ui/text-field";

export function AddEntryModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"ghost"} class="gap-4">
          <Plus class="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New transaction</DialogTitle>
          <DialogDescription>
            Add a new transaction to the grounp
          </DialogDescription>
        </DialogHeader>
        <TextField>
          <TextFieldLabel>Amount</TextFieldLabel>
          <TextFieldInput
            placeholder="5 USD"
            class="col-span-3"
            type="number"
          />
        </TextField>
        <TextField>
          <TextFieldLabel>Description</TextFieldLabel>
          <TextFieldInput
            class="col-span-3"
            type="text"
          />
        </TextField>

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
