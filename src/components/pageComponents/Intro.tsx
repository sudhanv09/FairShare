import { TextField, TextFieldInput } from "~/components/ui/text-field"
import { Button } from "~/components/ui/button"
import { createSignal } from "solid-js"


export default function Intro() {
    const [name, setName] = createSignal("")
    console.log(name())
    return (
        <main class="text-center space-y-8">
            <div>
                <h1 class="text-2xl font-bold">Get started</h1>
                <p class="text-md text-neutral-500">Create a room and invite your friends</p>
            </div>
            <div>
                <TextField class="flex w-full max-w-sm items-center space-x-4">
                    <TextFieldInput
                        type="text"
                        id="groupname"
                        placeholder="Thailand"
                        class="text-center"
                        value={name()}
                        onInput={(e: Event) => setName((e.target as HTMLInputElement).value)}
                     />

                    <Button as="a" href={`/room/${name()}`}>Create</Button>
                </TextField>
            </div>
        </main>
    )
}