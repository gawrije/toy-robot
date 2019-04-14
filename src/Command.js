
import * as constants from './constants';
export default class Command {

    constructor() {
        this.command = null;
        this.cordinateX = null;
        this.cordinateY = null;
        this.direction = null;
    }

    parse(commandInput) {
        let regExp = new RegExp(constants.REGEX_USER_INPUT, 'g'); 
        let match = regExp.exec(commandInput);
        if (match && match.length >= 1){
            if (match[1] === constants.Command.PLACE.name) {
                if (match[2] && match[3] && match[4]){
                    this.command = constants.Command.PLACE;
                    this.cordinateX = match[2];
                    this.cordinateY = match[3];
                    let facing = match[4];

                    if (facing === constants.Direction.NORTH.name) {
                        this.direction = constants.Direction.NORTH;
                    }else if (facing === constants.Direction.SOUTH.name) {
                        this.direction = constants.Direction.SOUTH;
                    }else if (facing === constants.Direction.EAST.name) {
                        this.direction = constants.Direction.EAST;
                    }else if (facing === constants.Direction.WEST.name) {
                        this.direction = constants.Direction.WEST;
                    }
                }else {
                    throw new Error(constants.ERR_INVALID_COMMAND);
                }
            }else if (match[1] === constants.Command.MOVE.name) {
                this.command = constants.Command.MOVE;
            }else if (match[1] === constants.Command.LEFT.name) {
                this.command = constants.Command.LEFT;
            }else if (match[1] === constants.Command.RIGHT.name) {
                this.command = constants.Command.RIGHT;
            }else if (match[1] === constants.Command.REPORT.name) {
                this.command = constants.Command.REPORT;
            }else{
                throw new Error(constants.ERR_INVALID_COMMAND);
            }
        }else{
            throw new Error(constants.ERR_INVALID_COMMAND);
        }
    }
}