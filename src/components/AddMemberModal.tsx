import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "~/components/ui/text-field";
import { Plus } from "lucide-solid";

export function AddMemberModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Plus class="h-4 w-4" />
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Members</DialogTitle>
          <DialogDescription>
            Add participants to your group
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <TextField class="grid grid-cols-4 items-center gap-4">
            <TextFieldLabel class="text-right">Name</TextFieldLabel>
            <TextFieldInput
              value="Pedro Duarte"
              class="col-span-3"
              type="text"
            />
          </TextField>
          <TextField class="grid grid-cols-4 items-center gap-4">
            <TextFieldLabel class="text-right">Username</TextFieldLabel>
            <TextFieldInput value="@peduarte" class="col-span-3" type="text" />
          </TextField>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
