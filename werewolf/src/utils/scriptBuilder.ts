import {
    CHARACTER_BY_ID,
    START_TEXT,
    START_DURATION,
    END_TEXT,
    END_DURATION,
} from "./characters.ts";

export function scriptBuilder(selectedIds: number[]): {
    texts: string[];
    durations: number[];
} {
    const texts: string[] = [START_TEXT];
    const durations: number[] = [START_DURATION];

    for (const id of selectedIds) {
        const character = CHARACTER_BY_ID[id];
        if (!character) {
            console.warn(`No character found for id "${id}"`);
            continue;
        }

        if (character.textArray.length !== character.durationArray.length) {
            console.warn(
                `Mismatched array lengths for character "${character.name}"`
            );
        }

        texts.push(...character.textArray);
        durations.push(...character.durationArray);
    }

    texts.push(END_TEXT);
    durations.push(END_DURATION);

    return { texts, durations };
}