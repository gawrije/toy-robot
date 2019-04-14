import React, { Component } from 'react'
import Grid from './Grid';
import Console from './Console';
import Command from './Command';
import Robot from './Robot';
import * as constants from './constants';

export class Game extends Component{

    onHandleCommand = e => {
        try{
            const command = new Command();
            command.parse(e);
            const robot = new Robot();
            return {success: true};
        }catch (e) {
            return {success: false, message: e.message};
        }
    }

    render() {
        return (
            <div className='main-container'>
                <Grid></Grid>
                <Console onCommand={this.onHandleCommand}></Console>
            </div> 
        );
    }
}