import scientist_img from "../assets/scientist.svg";
import conspirator_img from "../assets/conspiracy.svg";
import fakemedia_img from "../assets/fake_media.svg";
import realmedia_img from "../assets/real_media.svg";
import student_img from "../assets/student.svg";
import skeptic_img from "../assets/skeptic.svg";
import teacher_img from "../assets/teacher.pptx.svg";
import citizen_img from "../assets/citizen.svg";

interface Character {
    id: number;
    name: string;
    image: string;
    textArray: string[];
    durationArray: number[];
    require: boolean;
}

export const START_TEXT= "Everyone close your eyes."
export const START_DURATION = 5000
export const END_TEXT = "Now everyone wake up."
export const END_DURATION = 3000

const closeEyesStr = "Now close your eyes."
const scientistStr = "Scientist, open your eyes.\n \n Check the information pile and look at the bottom. You now know if the information is true or false."
const CTStr = "Conspiracy theorists, open your eyes.\n \n You will also check the information pile and look at the bottom.\n \n You will also know if the information is true or false, but you will try to make everyone believe the opposite."
const teacherStr = "Teacher, open your eyes.\n \n Flip over one card in the middle and leave it face up."
const studentStr ="Student, open your eyes.\n \n Swap your card with one of the cards in the middle that is still face down, and look at your new card.\n \n Note who you are now and close your eyes."
const skepticStr ="Skeptic, open your eyes.\n \n Take a look at one card in the middle."
const fakeMediaStr = "Conspiracy theorist, keep your eyes closed but put your thumb up."
const fakeMediaStr2 = "Fake media, open your eyes.\n \n Take a look and see if there are conspiracy theorists who have put their thumbs up."
const realMediaStr = "Real Media, open your eyes.\n \n You may look at another player’s card and return it face down."

export const CHARACTERS: Character[] = [
    { id: 0, name: "Scientist", image: scientist_img, textArray: [scientistStr, closeEyesStr], durationArray: [5000, 5000], require: true },
    { id: 4, name: "Real Media", image: realmedia_img, textArray: [realMediaStr, closeEyesStr], durationArray: [5000, 5000], require: true },
    { id: 1, name: "Conspiracy Theorist", image: conspirator_img, textArray: [CTStr, closeEyesStr], durationArray: [5000, 5000], require: true },
    { id: 2, name: "Conspiracy Theorist", image: conspirator_img, textArray: [], durationArray: [], require: true },
    { id: 3, name: "Fake Media", image: fakemedia_img, textArray: [fakeMediaStr, fakeMediaStr2, closeEyesStr], durationArray: [5000, 5000, 5000], require: true },
    { id: 8, name: "Citizen", image: citizen_img, textArray: [], durationArray: [], require: true },
    { id: 7, name: "Teacher", image: teacher_img, textArray: [teacherStr, closeEyesStr], durationArray: [5000, 5000], require: false },
    { id: 6, name: "Skeptic", image: skeptic_img, textArray: [skepticStr, closeEyesStr], durationArray: [5000, 5000], require: false },
    { id: 5, name: "Student", image: student_img, textArray: [studentStr, closeEyesStr], durationArray: [5000, 5000], require: false },
    { id: 9, name: "Citizen", image: citizen_img, textArray: [], durationArray: [], require: false },
    { id: 10, name: "Citizen", image: citizen_img, textArray: [], durationArray: [], require: false },
    { id: 11, name: "Citizen", image: citizen_img, textArray: [], durationArray: [], require: false },
]

export const CHARACTER_BY_NAME: Record<string, Character> = Object.fromEntries(
    CHARACTERS.map((c) => [c.name, c])
);

export const CHARACTER_BY_ID: Record<string, Character> = Object.fromEntries(
    CHARACTERS.map((c) => [c.id, c])
);

// Convenience helpers, if you prefer function calls over direct lookups
export function getCharacterByName(name: string): Character | undefined {
    return CHARACTER_BY_NAME[name];
}

export function getCharacterById(id: string): Character | undefined {
    return CHARACTER_BY_ID[id];
}