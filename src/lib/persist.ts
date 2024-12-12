import { createStore } from "solid-js/store";
import { Room, Member, Entry } from "./types";
import { makePersisted } from "@solid-primitives/storage";

const initialState: Room[] = [];

export const [store, setStore] = makePersisted(createStore(initialState), {name: "fsRoom"});


export const addRoom = (room: Room) => {
    setStore([...store, room]);
};

export const deleteRoom = (roomId: string) => {
    setStore(store.filter((room) => room.id !== roomId));
};

export const getRoomById = (roomId: string): Room | undefined => {
    return store.find((room) => room.id === roomId);
};