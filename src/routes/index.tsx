import { TextField, TextFieldInput } from "~/components/ui/text-field";
import { Button } from "~/components/ui/button";
import { createSignal, For, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { store, addRoom } from "~/lib/persist";
import { nanoid } from "nanoid";
import { Separator } from "~/components/ui/separator";

export default function Home() {
  const [room, setRoom] = createSignal("");
  const roomId = nanoid(6);
  const nav = useNavigate();

  const saveRoom = () => {
    addRoom({
      id: roomId,
      name: room(),
      currency: "USD",
      members: [],
      transactions: [],
      created: new Date(),
    });

    nav(`/room/${roomId}`, { replace: true });
  };

  return (
    <main class="container flex flex-col justify-center items-center h-dvh space-y-8">
      <div class="text-center">
        <h1 class="max-6-xs text-6xl font-thin uppercase">Get started</h1>
        <p class="text-neutral-400">Create a room and add your friends</p>
      </div>
      <TextField class="grid w-full max-w-sm items-center gap-1.5">
        <TextFieldInput
          type="text"
          placeholder="Thailand"
          value={room()}
          onInput={(ev: Event) =>
            setRoom((ev.target as HTMLInputElement).value)
          }
        />
        <Button onClick={saveRoom}>Create</Button>
      </TextField>
      <Show when={store.length > 0}>
        <div class="text-left">
          <h1 class="text-2xl tracking-tight text-left pb-6">Recent</h1>
          <For each={store} fallback={<div>Loading...</div>}>
            {(item) => (
              <div >
                <div class="flex gap-56">
                  <div>
                    <a href={`/room/${item.id}`} class="text-lg">{item.name}</a>
                    <p class="text-sm text-neutral-400">
                      {item.members.length} members
                    </p>
                  </div>
                  <p class="text-sm text-neutral-400">{new Date(item.created).toLocaleDateString()}</p>
                </div>

                <Separator class="h-[0.5px]" />
              </div>
            )}
          </For>
        </div>
      </Show>
    </main>
  );
}
