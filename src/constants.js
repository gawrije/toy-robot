export const ERR_INVALID_COMMAND = "Invalid command"

export const CMD_TYPE_COMMAND = 0;
export const CMD_TYPE_ERROR = 1;

// Common regular expression to match the each user inputs
export const REGEX_USER_INPUT = "\\.*([A-Z]+)\\s*([0-4])*,*([0-4; ])*,*([A-Z]+)*\\.*";

export const Direction = Object.freeze({
    NORTH:   { name: "NORTH"},
    SOUTH:  { name: "SOUTH"},
    EAST: { name: "EAST"},
    WEST: { name: "WEST"}
});

export const Command = Object.freeze({
    PLACE:   { name: "PLACE"},
    MOVE:  { name: "MOVE"},
    LEFT: { name: "LEFT"},
    RIGHT: { name: "RIGHT"},
    REPORT: { name: "REPORT"},
});