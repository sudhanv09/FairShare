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
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { createSignal } from "solid-js";

export function AddEntryModal() {
  const [payer, setPayer] = createSignal("");
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
          <TextFieldInput class="col-span-3" type="text" />
        </TextField>
        <div class="flex items-center gap-8">
          <Label>Split</Label>
          <ToggleGroup defaultValue={"a"}>
            <ToggleGroupItem value="a">Equally</ToggleGroupItem>
            <ToggleGroupItem value="b">Custom</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div class="flex-col">
          <Label>Payer</Label>
          <Select
            value={payer()}
            onChange={setPayer}
            options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
            placeholder="Select Payer"
            itemComponent={(props) => (
              <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
            )}
          >
            <SelectTrigger aria-label="Fruit" class="w-[180px]">
              <SelectValue<string>>
                {(state) => state.selectedOption()}
              </SelectValue>
            </SelectTrigger>
            <SelectContent />
          </Select>
        </div>

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
