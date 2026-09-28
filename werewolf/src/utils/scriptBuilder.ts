import {
    CHARACTER_BY_ID,
    START_TEXT,
    START_DURATION,
    START_AUDIO,
    END_TEXT,
    END_DURATION,
    END_AUDIO,
} from "./characters.ts";

export function scriptBuilder(selectedIds: number[]): {
    texts: string[];
    durations: number[];
    audios: any[];
} {
    const texts: string[] = [START_TEXT];
    const durations: number[] = [START_DURATION];
    const audios: any[] = [START_AUDIO]

    for (const id of selectedIds) {
        const character = CHARACTER_BY_ID[id];
        if (!character) {
            console.warn(`No character found for id "${id}"`);
            continue;
        }

        if (
            character.textArray.length !== character.durationArray.length ||
            character.textArray.length !== character.audioArray.length
        ) {
            console.warn(
                `Mismatched array lengths for character "${character.name}"`
            );
        }

        texts.push(...character.textArray);
        durations.push(...character.durationArray);
        audios.push(...character.audioArray);
    }

    texts.push(END_TEXT);
    durations.push(END_DURATION);
    audios.push(END_AUDIO)

    return { texts, durations, audios };
}