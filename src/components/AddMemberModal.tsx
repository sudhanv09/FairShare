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
import { store, setStore } from "~/lib/persist";
import type { Member } from "~/lib/types";

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
    let val = [...member()];
    val.splice(idx, 1);
    setMember(val);
  };

  const handleInputChange = (
    index: number,
    field: "name" | "email",
    value: string
  ) => {
    const updatedMembers = [...member()];
    updatedMembers[index][field] = value;
    setMember(updatedMembers);
  };

  const saveChanges = () => {
    const newMembers: Member[] = member().map((m) => ({
      name: m.name,
      email: m.email,
      entries: [],
      balance: 0,
    }));

    const updated = [...store];
    const roomIndex = updated.findIndex((room) => room.id === roomId);

    updated[roomIndex] = {
      ...updated[roomIndex],
      members: [...updated[roomIndex].members, ...newMembers],
    };

    setStore(updated);
    setMember([{ name: "", email: "" }]);
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
                    onInput={(e) => 
                      handleInputChange(index(), "name", e.currentTarget.value)
                    }
                  />
                </TextField>
                <TextField class="grid grid-cols-4 items-center gap-4">
                  <TextFieldLabel class="text-right">Email</TextFieldLabel>
                  <TextFieldInput
                    value={item.email}
                    placeholder="Optional"
                    class="col-span-3"
                    type="email"
                    onInput={(e) => 
                      handleInputChange(index(), "email", e.currentTarget.value)
                    }
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
          <Button type="submit" onClick={saveChanges}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
