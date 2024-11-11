import { createStore } from "solid-js/store";
import { Room, Member, Entry } from "./types";
import { makePersisted } from "@solid-primitives/storage";

const initialState: Room[] = [];

export const [store, setStore] = makePersisted(createStore(initialState), {name: "fsRoom"});


export const addRoom = (room: Room) => {
    setStore([...store, room]);
};

export const updateRoom = (roomId: string, updatedRoom: Partial<Room>) => {
    setStore(
        store.map((room) =>
            room.id === roomId ? { ...room, ...updatedRoom } : room
        )
    );
};

export const deleteRoom = (roomId: string) => {
    setStore(store.filter((room) => room.id !== roomId));
};