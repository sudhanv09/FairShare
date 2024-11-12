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
import Plus from "lucide-solid/icons/plus";
import Trash from "lucide-solid/icons/trash";
import { createSignal, For, Show } from "solid-js";
import { useParams } from "@solidjs/router";

export function AddMemberModal() {
  const [member, setMember] = createSignal([{ name: "", email: "" }]);
  const roomId = useParams().id;

  const addField = () => {
    const newMember = {
      name: "",
      email: "",
    };
    setMember([...member(), newMember]);
  };

  const removeField = (idx: number) => {
    let val = [...member()]
    val.splice(idx, 1)
    setMember(val)
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Plus class="h-4 w-4" />
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Members</DialogTitle>
          <DialogDescription>Add participants to your group</DialogDescription>
        </DialogHeader>
        <For each={member()}>
          {(item, index) => (
            <div class="flex gap-6">
              <div class="grid gap-4 py-4">
                <TextField class="grid grid-cols-4 items-center gap-4">
                  <TextFieldLabel class="text-right">Name</TextFieldLabel>
                  <TextFieldInput
                    value={item.name}
                    class="col-span-3"
                    type="text"
                  />
                </TextField>
                <TextField class="grid grid-cols-4 items-center gap-4">
                  <TextFieldLabel class="text-right">Email</TextFieldLabel>
                  <TextFieldInput
                    value={item.email}
                    placeholder="Optional"
                    class="col-span-3"
                    type="email"
                  />
                </TextField>
              </div>
              <Show when={member().length > 2}>
                <Button
                  variant="ghost"
                  class="mt-4"
                  onClick={() => removeField(index())}
                >
                  <Trash class="h-4" />
                </Button>
              </Show>
            </div>
          )}
        </For>

        <DialogFooter>
          <Button onClick={addField} type="submit">
            Add more
          </Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
